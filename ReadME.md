```
# Μπαχαλάδικο App

This is a full-stack application built with GraphQL, Apollo Client, Prisma, React, TypeScript, and Tailwind CSS.

## Features

- Client-side application built with React and Apollo Client for consuming the GraphQL API.
- Server-side API built with GraphQL and Prisma for data fetching and manipulation.
- Data persistence using a PostgreSQL database.
- Authentication and authorization using JWT (JSON Web Tokens).
- Responsive and modern UI using Tailwind CSS.

## Installation

1. Clone the repository:
```

git clone <repository-url>

```

2. Install the dependencies for the server:
```

cd server
npm install

````

3. Set up the environment variables:
- Create a `.env` file in the `server` directory.
- Set the following environment variables:
  ```
  DATABASE_URL=<your-database-url>
  ```
````
4. Run database migrations and generate Prisma client:


```jsx 
npm run prisma:migration
```

5. Start the server:
```

npm run dev

```

6. Install the dependencies for the client:
```

cd ../client
npm install

````

7. Set up the environment variables:
- Create a `.env` file in the `client` directory.
- Set the following environment variables:
  ```
  REACT_APP_GRAPHQL_API_URL=http://localhost:4000/graphql
  ```

8. Start the client:
````

npm run start

```

9. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

- The client application is accessible at `http://localhost:3000`.
- The GraphQL API is accessible at `http://localhost:4000/graphql`.
- Use the client application to interact with the GraphQL API, perform CRUD operations, and view the data.


## Scripts

In the `server` directory, you can run the following scripts:

- `npm run start`: Starts the server.
- `npm run dev`: Starts the server in development mode using Nodemon.
- `npm run migrate`: Applies database migrations using Prisma.
- `npm run generate`: Generates the Prisma client.

In the `client` directory, you can run the following scripts:

- `npm run start`: Starts the client application.
- `npm run build`: Builds the client application for production.

## License

This project is licensed under the [MIT License](LICENSE).
```
