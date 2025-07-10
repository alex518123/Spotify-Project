import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  // Filtra a música atual pelo ID da URL
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  // Busca o artista
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  // Filtra todas as músicas desse artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  // Evita sortear a mesma música atual!
  const songsExceptCurrent = songsArrayFromArtist.filter(
    (song) => song._id !== id
  );

  const randomIndex = Math.floor(Math.random() * songsExceptCurrent.length);
  const randomIndex2 = Math.floor(Math.random() * songsExceptCurrent.length);

  const randomIdFromArtist = songsExceptCurrent[randomIndex]._id;
  const randomId2FromArtist = songsExceptCurrent[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        {/* 🔑 key={id} força o React a desmontar/montar o Player quando o ID mudar */}
        <Player
          key={id}
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
