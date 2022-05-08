# SoundWave (A Clone of Soundcloud)

picture

[SoundWave](https://soundwave-clone.herokuapp.com/) is a music sharing platform that enables its users to upload and share audio files they have created. Users can visit other user profiles to see and comment on the music they have created.

# Technologies Used

### Built With

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [HTML
* [CSS]

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

## User Page

A User has a profile page that displays her songs. When visiting your own profile page, you can delete and or edit your songs.

## Wave Forms

When a song plays, the app translates the song into amplitudes. This creates a beautiful visual of how the intensity of the song changes throughout the listen.

## Bonus Features

## Comments map to a timestamp in the song.

When a User likes a song, the User's profile picture will show up below the wave form at the time the user makes his comment. This will inform the artist when people are commenting, and what parts of the song are hyping people up!

## Comments on Comments

A User can comment on a comment to start a thread. These comments can also be edited.
