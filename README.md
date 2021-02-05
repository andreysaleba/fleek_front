# Getting Started

In the project directory you must create .env file with BASE_API url (by default server working on the port 3001). Example:

```
REACT_APP_API_BASE_URL=http://localhost:3001
```

Then after installing dependencies you should run `yarn start` to run the app in development mode

## How to use

For authorization in the application (when the server is running according to the instructions), you can use the following login data:

1. email - admin@example.com; password - admin
2. email - user@example.com; password - root

Then, by clicking on the button, you can generate/delete the current API Key for this user.

The generated key (as long as it is present on the web application page) can be used to send http requests in the x-api-key header