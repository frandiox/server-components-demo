# React Server Components Demo (Vite version)

> This is a modified version of the original demo that works with Vite -- **HIGHLY EXPERIMENTAL**
> The original source of react-server-dom-vite package is based on @shopify/hydrogen and is [located here](https://github.com/frandiox/react/tree/rsc-vite).

* [What is this?](#what-is-this)
* [When will I be able to use this?](#when-will-i-be-able-to-use-this)
* [Setup](#setup)
* [DB Setup](#db-setup)
  + [Step 1. Create the Database](#step-1-create-the-database)
  + [Step 2. Connect to the Database](#step-2-connect-to-the-database)
  + [Step 3. Run the seed script](#step-3-run-the-seed-script)
* [Notes about this app](#notes-about-this-app)
  + [Interesting things to try](#interesting-things-to-try)
* [Built by (A-Z)](#built-by-a-z)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

## What is this?

This is a demo app built with Server Components, an experimental React feature. **We strongly recommend [watching our talk introducing Server Components](https://reactjs.org/server-components) before exploring this demo.** The talk includes a walkthrough of the demo code and highlights key points of how Server Components work and what features they provide.

## When will I be able to use this?

Server Components are an experimental feature and **are not ready for adoption**. For now, we recommend experimenting with Server Components via this demo app. **Use this in your projects at your own risk.**

## Setup

You will need to have nodejs >=14.9.0 in order to run this demo. [Node 14 LTS](https://nodejs.org/en/about/releases/) is a good choice! (If you use `nvm`, run `nvm i` before running `npm install` to install the recommended Node version.)

  ```
  npm install
  npm start
  ```

(Or `npm run start:prod` for a production build.)

Then open http://localhost:3000.

The app won't work until you set up the database, as described below.

<details>
  <summary>Setup with Docker (optional)</summary>
  <p>You can also start dev build of the app by using docker-compose.</p>
  <p>⚠️ This is <b>completely optional,</b> and is only for people who <i>prefer</i> Docker to global installs!</p>
  <p>If you prefer Docker, make sure you have docker and docker-compose installed then run:</p>
  <pre><code>docker-compose up</code></pre>
  <h4>Running seed script</h4>
  <p>1. Run containers in the detached mode</p>
  <pre><code>docker-compose up -d</code></pre>
  <p>2. Run seed script</p>
  <pre><code>docker-compose exec notes-app npm run seed</code></pre>
  <p>If you'd rather not use Docker, skip this section and continue below.</p>
</details>

## DB Setup

This demo uses SQLite3. Nothing to setup.

## Notes about this app

The demo is a note-taking app called **React Notes**. It consists of a few major parts:

- It uses a Vite plugin (not defined in this repo) that allows us to only include client components in build artifacts
- A Node.js server that:
  - Serves API endpoints used in the app
  - Renders Server Components into a special format that we can read on the client
- A React app containing Server and Client components used to build React Notes

### Interesting things to try

- Expand note(s) by hovering over the note in the sidebar, and clicking the expand/collapse toggle. Next, create or delete a note. What happens to the expanded notes?
- Change a note's title while editing, and notice how editing an existing item animates in the sidebar. What happens if you edit a note in the middle of the list?
- Search for any title. With the search text still in the search input, create a new note with a title matching the search text. What happens?
- Search while on Slow 3G, observe the inline loading indicator.
- Switch between two notes back and forth. Observe we don't send new responses next time we switch them again.
- Uncomment the `fetch('http://127.0.0.1:3000/sleep/....')` call in `Note.server.js` or `NoteList.server.js` to introduce an artificial delay and trigger Suspense.
  - If you only uncomment it in `Note.server.js`, you'll see the fallback every time you open a note.
  - If you only uncomment it in `NoteList.server.js`, you'll see the list fallback on first page load.
  - If you uncomment it in both, it won't be very interesting because we have nothing new to show until they both respond.
- Add a new Server Component and place it above the search bar in `App.server.js`. Import `db` from `db.server` and use `db.query()` from it to get the number of notes. Oberserve what happens when you add or delete a note.

You can watch a [recorded walkthrough of all these demo points here](https://youtu.be/La4agIEgoNg?t=600) (with timestamps).

## Built by (A-Z)

- [Andrew Clark](https://twitter.com/acdlite)
- [Dan Abramov](https://twitter.com/dan_abramov)
- [Joe Savona](https://twitter.com/en_JS)
- [Lauren Tan](https://twitter.com/sugarpirate_)
- [Sebastian Markbåge](https://twitter.com/sebmarkbage)
- [Tate Strickland](http://www.tatestrickland.com/) (Design)

## [Code of Conduct](https://engineering.fb.com/codeofconduct/)
Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](https://engineering.fb.com/codeofconduct/) so that you can understand what actions will and will not be tolerated.

## License
This demo is MIT licensed.
