# BloodLine Backend

REST APIs for BloodLine mobile app.

## Tech Stack 🗃
<br>
<img src="https://img.shields.io/static/v1?label=v16&message=node&color=success">
<img src="https://img.shields.io/static/v1?label=v4&message=express&color=blue">
<img src="https://img.shields.io/static/v1?label=v5&message=mongodb&color=success">
<img src="https://img.shields.io/static/v1?label=v6&message=mongoose&color=green">
<br><br><br>

### Installation Guide
- Clone the Repo
```sh
git clone https://github.com/thisisrishabh22/Blood-Line-Backend.git
```
- Change the directory to project
```sh
cd Blood-Line-Backend\
```
- Install Packages

If using yarn as package manager
```sh
yarn
```
If using npm as package manager
```sh
npm install
```
### Configuration for REST API
- Create .env file in the root of project folder.
- Store the MongoDB connection string in the .env as demonstrated in .env.example
- Start the server

### Development

1. Using PM2

- Make sure you have pm2 installed in your server
- If using yarn as package manager
```sh
yarn
pm2 start server.js --name bloodline-api
```
- If using npm as package manager
```sh
npm install
pm2 start server.js --name bloodline-api
```

2. Using Docker

- Make sure you have docker and docker-compose installed on your system

- Build the Images
```sh
docker-compose build
```
- Run the containers in daemon
```sh
docker-compose up -d
```

<br><br>

## Contributors 🌟
<br>
Thanks goes to these people ✨✨:
<br><br>
<table>
  <tr>
   <td align="center"><a href="https://github.com/Sumitkumar-Thakur"><img src="https://avatars.githubusercontent.com/u/92580661?v=4" width="100px;" style="border-radius: 50%;" alt="Sumit Thakur"/><br /><sub><b>Sumit Thakur</b></sub></a><br /><a href="https://github.com/Sumitkumar-Thakur" title="Code">💻</a></td>
<td align="center"><a href="https://github.com/thisisrishabh22"><img src="https://avatars.githubusercontent.com/u/56874272?v=4" width="100px;" style="border-radius: 50%;" alt="Rishabh Singh"/><br /><sub><b>Rishabh Singh
</b></sub></a><br /><a href="https://github.com/thisisrishabh22" title="Code">💻</a></td>
  </tr>
</table>
