# Social Network API

![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

A back-end development showcasing a social network database, with various API routes to support a social network's functionality. A user can:

- Add and remove their thoughts.
- Add and remove their reactions to other's thoughts.
- Add and remove friends.

## Installation

- Fork the repository.
- Open the working directory in terminal and make sure to install node_modules.
- Run `npm run seed` to seed the database with random user data, and run `node server` to start the server.
- Then, access any of the endpoints.

List of endpoints:

**`/api/users`**

- Get all users
- Get a single user by on its id
- Create a new user
- Update a user by its id
- Delete a user

**`/api/users/:userId/friends/:friendId`**

- Add a friend to user's friend list
- Delete a friend from a user's friend list

**`/api/thoughts`**

- Get all thoughts
- Get a single thought by on its id
- Create a new thought
- Update a thought by its id
- Delete a thought by its id

**`/api/thoughts/:thoughtId/reactions`**

- Create a reaction
- Delete a reaction

## Usage

Watch this [video!](https://drive.google.com/file/d/1GKK5B86AEcB4nJuZr_JG40Rv-yUMwMl8/view?usp=share_link)

## License

MIT

## Questions

If you have any questions, visit my GitHub page at https://www.github.com/horton-michael.
