# ETZ Backend
###ETZ Backend is a  modded fortnite backend written in Node.js that features an account system and xmpp.

## Features
### THIS IS BASED ON LAWIN V2!
* CloudStorage and ClientSettings (Settings Saving).
* Locker:
    + Changing items.
    + Changing banner icon and banner color.
    + Changing item edit styles.
    + Favoriting items.
    + Marking items as seen.
* Friends:
    + Adding friends.
    + Accepting friend requests.
    + Removing friends.
    + Blocking friends.
    + Setting nicknames.
    + Removing nicknames.
* Item Shop:
    + Customizable Item Shop.
    + Purchasing items from the Item Shop.
    + Gifting items to your friends.
### XMPP Features
- Parties (builds 3.5 to 14.50).
- Chat (whispering, global chat, party chat).
- Friends.
### NOTE: LawinServerV2 does not support Save the World.

## Discord Bot Commands
### Commands:
- `/create {email} {username} {password}` - Creates an account on the backend (You can only create 1 account).
- `/details` - Retrieves your account info.
- `/lookup {username}` - Retrieves someones account info.
- `/exchange-code` - Generates an exchange code for login. (One time use for each code and if not used it expires after 5 mins).
- `/change-username {newUsername}` - You can change your username using this command.
- `/change-password {newPassword}` - You can change your password using this command.
- `/sign-out-of-all-sessions` - Signs you out if you have an active session.
- `/clear-items-for-shop` - Clears anything in your profile that is from the item shop.
### Moderation Commands:
- You can only use the moderation commands if you are a moderator.
- `/ban {targetUsername}` - Ban a user from the backend by their username.
- `/unban {targetUsername}` - Unban a user from the backend by their username.
- `/kick {targetUsername}` - Kick someone out of their current session by their username.
### How to set up moderators?
1) Go to Config/config.json in the directory you extracted LawinServerV2 into.
2) Open it, you should see a "moderators" section in the file.
3) You have to get your discord id and replace discordId with it.
4) You can set multiple moderators like this `["discordId","discordId2"]`.

## Hosting for others
You are allowed to host for others, however please credit me and don't remove my credits from `responses/contentpages.json`.

## How to host ETZ Backend
1) Install [NodeJS](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/try/download/community).
2) Download and Extract LawinServerV2 to a safe location.
3) Run "install_packages.bat" to install all the required modules.
4) Go to Config/config.json in the directory you extracted LawinServerV2 into.
5) Open it, set your discord bot token (DO NOT SHARE THIS TOKEN) and save it. The discord bot will be used for creating accounts and managing your account.
6) Run "start.bat", if there is no errors, it should work.
7) Use something to redirect the Fortnite servers to localhost:8080 (Which could be fiddler, ssl bypass that redirects servers, etc...)
8) When Fortnite launches and is connected to the backend, enter your email and password (or launch with an exchange code) then press login. It should let you in and everything should be working fine.

# How to host the Shop website?
Go to the **website** then **shop** once in shop run the **start.bat**
