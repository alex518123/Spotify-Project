import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const navigate = useNavigate();

  // Atualiza a barra de progresso a cada segundo enquanto toca
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying && audioPlayer.current) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
        progressBar.current.style.setProperty(
          "--_progress",
          (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  // Força o <audio> a recarregar sempre que o src mudar
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.load();
      setCurrentTime(formatTime(0));
      setIsPlaying(false);
    }
  }, [audio]);

  const playPause = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    navigate(`/song/${randomIdFromArtist}`);
  };

  const handleNext = () => {
    navigate(`/song/${randomId2FromArtist}`);
  };
  
  return (
    <div className="player">
      <div className="player__controllers">
        <FontAwesomeIcon
          className="player__icon"
          icon={faBackwardStep}
          onClick={handlePrevious}
        />

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />

        <FontAwesomeIcon
          className="player__icon"
          icon={faForwardStep}
          onClick={handleNext}
        />
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio key={audio} ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
