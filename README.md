### Setup and Custom Keyboard

View this repository and README file for more information: https://github.com/apal21/Telegram-Bot-Custom-Keyboard-Node.js

## How to Add Authentication

  1. After setting up the basic Telegram Bot, in this repository I've created an array `auth_users` on Line #8
  2. Inside this array remove all unnecessary User IDs and add your own IDs.
  3. If there is a user whose id is not inside this array, he/she will always get the response `Unauthorized User`.
  4. `/id` : Send this message to your bot to get your own User ID.

## How It works?

  1. In this `node-telegram-bot-api` package, callback of `onText` method's first argument is the message received by the bot.
  2. You can see its content by printing this `msg` object.
  3. Here `msg.from.id` gives the User Id and `msg.from.username` gives the Username of the user.
  4. We can also use Username to authenticate users but in Telegram it is not mandatory to have a Username but the User ID will always be there. (Safe Game...)
  5. `authenticate_users` function at the bottom of the `index.js` file will loop through all the User IDs and if any of the User ID matches with the ID from the message is sent, it returns `true` else it returns `false`.