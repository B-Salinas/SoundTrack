# Welcome to SoundTrack!

### **Live Link: [SoundTrack](https://en.wikipedia.org/wiki/HTTP_404)**

_SoundTrack_ is inspired by [SoundCloud](https://soundcloud.com/discover) and allows users to share and discover soundtracks from different movies. Users can listen to music uninterrupted as they browser different songs, albums, and other users. Users can also upload their own songs and create their own albums. 

Check out the [wiki](https://github.com/B-Salinas/SoundTrack/wiki) for more information! 

# Technologies 

#### Front-End
- React <i class="fab fa-react"></i>
- Redux
- CSS
- Font Awesome
- Cloudinary

[//]: # (- Hosted on Heroku)

#### Back-End
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) / [csurf](https://www.npmjs.com/package/csurf)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) for user authentication
- **built with [express](https://expressjs.com/)**
- [express-session](https://www.npmjs.com/package/express-session)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [faker](https://www.npmjs.com/package/faker) for generating large amounts of fake data
- **uses [postgreSQL](https://www.postgresql.org/) database**
- [sequelize](https://www.npmjs.com/package/sequelize) / [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

[//]: # (#### React Components)
[//]: # (#### Redux Store Tree)

# Features
- User authentication is handled using bcryptjs library for password hashing.
- Includes csrf attack protection and performs front-end and back-end validation on forms.

[//]: # (- Grants access to features like uploading and deleting songs to authorized users only.)
[//]: # (- Designed around a relational database schema, which allows users to upload, edit, like, and comment on songs and follow other users with dynamic data and rendering.)
[//]: # (- Makes use of AJAX / API Routes to render elements such as liking songs and following other users asynchronously.)


# Future Implementations
- Wave Forms
- Album Page
- Search Bar
- Playlists
- Likes on Comments
