# SoundWave (A Clone of Soundcloud)

[SoundWave](https://soundwave-clone.herokuapp.com/) is a music sharing platform that enables its users to upload and share audio files they have created. Users can visit other user profiles to see and comment on the music they have created.

# Technologies Used

### Built With

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com/)
* [PostgreSQL](https://www.postgresql.org/)
* HTML
* CSS

### Contact

<a href="https://https://www.linkedin.com/in/david-forster-70b44673/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=davidpforster24@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://github.com/da5idf"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>

# Getting Started

1. Clone this repository <br />

&ensp;&ensp;`git clone https://github.com/da5idf/SoundWave.git`

2. Install dependencies  <br />

&ensp;&ensp;`npm install`

3. Create a .env file in the root direction based on the .env.example given.  <br />

4. Create a user in psql based on your .env DATABASE_URL app_name   <br />

&ensp;&ensp;`psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Create a database in psql based on your .env DATABASE_URL db_name.  <br />

6. Start your shell and migrate and seed the database.   <br />

&ensp;&ensp;`npx dotenv sequelize db:migrate`   <br />

&ensp;&ensp;`npx dotenv sequelize db:seed:all`

# Features Highlight

## Full CRUD for Songs

Users can upload audio content to share with the world. Users can edit song information or replace the audio file. If a user decides she wants to remove one of her songs, she is able to do so. 

## Full CRUD for Comments

A User can comment on songs to show his support. A User can edit and delete his comments as he sees fit.
