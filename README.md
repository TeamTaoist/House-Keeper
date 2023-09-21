# House Keeper

House Keeper is a web3 application to manage hacker houses, maintain projects, manage registrations, and stuff related to hacker houses. It supports typical substrate wallets.

The website is https://hk.taoist.dev

# Build and deploy front

`frontend` contains everything for webpages, it's a React application.

```
cd frontend
```

run `yarn` or `npm i`. Make sure, you have node 16 LTS.

modify the url in `StrapiOptions` to the your custom one.

run `yarn start` or `npm run start` to start the front end.

# Build and deploy server

`server` contains the server-side functions, it's based on the Strapi framework.

```
cd server
```

run `yarn` or `npm i`. Make sure, you have node 16 LTS or 18 LTS.

create `.env` from `.env.example`, and fill the corresponding tokens.

run `yarn dev` or `npm run dev` to start the server.

# Design

DB schema [this](./server/DB.md)