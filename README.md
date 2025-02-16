# 🎵 Spotify-Project

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Clone do Spotify desenvolvido com **React**, **Vite**, **Node.js**, **Express** e **MongoDB**. Este projeto simula a experiência de streaming de música, incluindo páginas de artistas, músicas populares, player funcional, navegação e integração com um banco de dados para gerenciamento de músicas e artistas.

### 🔗 Acesse o projeto: [Spotify-Project](https://spotify-project-bpa2.onrender.com/)

---

## 📸 Demonstração

![Preview do projeto](.github/preview.png)

---

## 🚀 Funcionalidades

- Página inicial com listagem de músicas e artistas populares.
- Navegação fluida entre páginas de artistas e músicas.
- Player funcional com play, pause, próxima e anterior música.
- Barra de progresso dinâmica e cálculo preciso de tempo.
- Integração com MongoDB para armazenamento de músicas e artistas.
- Design responsivo e intuitivo.

---

## 🛠️ Tecnologias Utilizadas

### Front-end:
- **React** com **Vite** para um desenvolvimento ágil e rápido.
- **React Router Dom** para navegação entre páginas.
- **Axios** para consumo de API.
- **FontAwesome** para ícones personalizados.
- **CSS** customizado para estilização responsiva.

### Back-end:
- **Node.js** com **Express** para construção da API.
- **MongoDB** com **Atlas** para banco de dados na nuvem.
- **MongoDB Driver** para integração com o banco de dados.

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado na sua máquina:
- **Node.js** (versão LTS recomendada)
- **NPM** ou **Yarn**
- **MongoDB Atlas** ou **MongoDB Local**

---

## 🔧 Instalação e Configuração

### Clone o repositório:
```
git clone https://github.com/alex518123/Spotify-Project.git

cd Spotify-Project
```

Isso vai:

- Baixar o projeto para o seu computador.

- Entrar na pasta do projeto.

**1. Instale as dependências do Front-end:**

Esse projeto foi dividido em duas partes: front-end (interface do usuário) e back-end (servidor e banco de dados). Cada um tem suas próprias dependências (bibliotecas e pacotes necessários para funcionar).

```
cd front-end

npm install
```

cd front-end: Entra na pasta do front-end.

npm install: Instala todas as dependências listadas no package.json do front-end, como React e outras bibliotecas usadas na interface.

**2. Instale as dependências do Back-end:**

```
cd ../back-end

npm install
```

cd ../back-end: Volta uma pasta (com ..) e entra na pasta do back-end.

npm install: Instala as dependências do back-end, como Express (framework para servidor) e MongoDB (banco de dados).

---

## 🚀 Como Rodar o Projeto

**Rodando o Front-end:**
```
cd front-end

npm run dev
```

- cd front-end: Navega até a pasta do front-end.

- npm run dev: Inicia o servidor de desenvolvimento do Vite, que é o build tool usado para o React neste projeto.

➡️ Front-end disponível em: http://localhost:5173

Quando você rodar o comando acima, o Vite vai iniciar um servidor local na porta 5173.

Você pode acessar a interface do usuário abrindo o navegador e entrando no endereço: http://localhost:5173.

**Rodando o Back-end:**
```
cd ../back-end

node server.js
```

- cd ../back-end: Volta para a pasta do back-end.

- node server.js: Inicia o servidor do back-end usando Node.js.

➡️ Back-end disponível em: http://localhost:3001

Esse servidor do Express vai rodar na porta 3001.

Ele fornece as APIs para o front-end buscar dados, como lista de músicas e artistas.

Por exemplo, acessando http://localhost:3001/artists, você deve ver o JSON com todos os artistas cadastrados no banco de dados MongoDB.

---

**ℹ️ Notas sobre o Ambiente Local**

**localhost:** Refere-se ao seu próprio computador, o que significa que o servidor está rodando localmente apenas para você acessar.

**Porta 5173:** É a porta padrão do Vite para desenvolvimento.

**Porta 3001:** Foi definida no server.js para o servidor Express.

Essas portas ajudam a diferenciar o front-end e o back-end, permitindo que eles rodem simultaneamente no mesmo computador sem conflitos.

---

## 📁 Estrutura do Projeto
```
Spotify-Project/
│   README.md
│
├── front-end/
│   └── src/
│       ├── api/
│       ├── assets/
│       │   ├── database/        # JSON de músicas e artistas (originais)
│       │   └── images/          # Imagens de músicas e artistas
│       └── components/
│           ├── Header.jsx
│           ├── Main.jsx
│           ├── Player.jsx
│           ├── ItemList.jsx
│           └── ...
│
└── back-end/
    ├── api/
    │   ├── connect.js           # Conexão com MongoDB
    │   ├── insertMany.js        # Inserção de dados no MongoDB
    │   └── server.js            # Configuração do servidor Express
    └
```

---

## 🌐 Integração com o MongoDB

**connect.js:** Realiza a conexão com o MongoDB Atlas usando MongoClient.

**insertMany.js:** Transfere dados do front-end para o banco de dados.

**server.js:** Configura rotas para as coleções artists e songs.

---

## 📦 Dados Utilizados

Os dados estão localizados em:

```
front-end/src/assets/database/
│   ├── artists.js               # Dados dos artistas
│   └── songs.js                 # Dados das músicas
```

Importante: No MongoDB, as coleções são renomeadas para artists e songs, excluindo o campo id para evitar conflitos.

---

## 🔥 Funcionalidades Detalhadas

🎶 Player de Música:
Play/Pause utilizando o hook useRef() para manipular o áudio.

Controle de Tempo:
formatTime() para formatar o tempo em MM:SS.
timeInSeconds() para converter strings de tempo em segundos.

Barra de Progresso:
Atualiza dinamicamente com setInterval() e style.setProperty().

📑 Listagem de Artistas e Músicas:
ItemList.jsx: Responsável por listar os artistas e músicas.
SingleItem.jsx: Exibe cada item com imagem, título e botão de play.
SongItem.jsx: Mostra detalhes das músicas, incluindo tempo de duração.

---

## 📝 Considerações Finais

Este projeto foi desenvolvido como parte de um estudo prático de React, Node.js e MongoDB, simulando as funcionalidades essenciais do Spotify.

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto!  

- Faça um fork do repositório  

- Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)  

- Faça commit das mudanças (`git commit -m 'Adiciona nova feature'`)  

- Envie um push para a branch (`git push origin feature/nova-feature`)  

- Abra um Pull Request

---

## 📬 Contato

📧 **E-mail:** alexresende675@gmail.com

🐙 **GitHub:** [alex518123](https://github.com/alex518123)

---

## 📜 Licença

Este projeto é open-source e está licenciado sob a MIT License.

---

Desenvolvido por: Alexander Resende [Dê uma olhada no meu portfólio!]()


