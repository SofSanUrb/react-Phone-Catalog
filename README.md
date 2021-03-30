# 📱 REACT - Phone Catalog 📱

The challenge in this projects is to create a phone catalogue app from scratch

## 💻 Live Web

[Link]().

---

## 🏗 ️Main Structure client and Server

```
|– client
|   |– public
|   |– src
|     |– components
|     |– pages
|– server
|   |– config
|   |– db
|   |– error-handling
|   |– models
|   |– routes
|   |– utils
```

### ✳️ Routes
#### Client
- "/" Homepage with all phones
- "/phones/:phoneId" Get selected phone detailed Info
- "/addPhone" Add Phone to the Database
- "/edit/:phoneId" Edit selected Phone Data
- "" 404 error (Page not found)

#### Server (including CRUD capabilities)
- GET "/phones" Get all Phones from the Database
- GET "/phones/:phoneId" Get Phone Details
- POST "/add-phone" Create new phone in the database checking for all data to be filled in
- PATCH "/edit/:phoneId" Update data from phone
- DELETE "/delete/:phoneId" Delete Phone from the database

### 📚 Technologies
- React Hooks
- NodeJs
- Express
- Axios
- Persistence layer: MongoDB

### ✳️ External Libraries/Packages
- [Cloudinary](https://cloudinary.com/documentation/developer_overview)
- [Bootstrap for React](https://react-bootstrap.github.io/getting-started/introduction/)
- [React Helmet](https://www.npmjs.com/package/react-helmet)

## 🚀 How to run the Apps.

### Pre-requirements

You need to have [```Node```](https://nodejs.org/es/) previously installed in your computer.

To start using this project, clone this repo to a new directory.
> ```console
>  $ git clone https://github.com/conchaasensiomr/react-phone-catalog.git
> ```

### ➡️ Node
***

You have to go to server and run npm install in order to install the necesary dependencies.
> ```console
> $ cd server
> $ npm install
> ```
Now you need to do the same thing on the client side.
> ```console
> $ cd client
> $ npm install
> ```

Once you have installed the dependencies, you are ready to run the app with ```npm start```. Like above, we need to do it both in server and client sides.
> ```console
> $ cd server
> $ npm run dev
> ```

>  ```console
> $ cd client
> $ npm start
> ```

> 👉 Open http://localhost:3000 to view in the browser

### 📷 Cloudinary Server Setup

1 - Go to this link https://cloudinary.com/ and create your cloudinary account, verify your email and go through or skip the initial questions

2 - After you are done you should be able to see the following in your dashboard:

- Cloud Name
- API key
- API Secret

3 - These 3 elements are unique to you and will need them to use cloudinary. You will need to add them to your .env file:
````
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-key
CLOUD_API_SECRET=your-cloudinary-secret
````
## 💯 Improvements 
- I would rather use one repository for the client side and one repository for the server side due to security reasons.
- Apply Testing
- Protect the Database from non logged-in users with authentication feature

## 👩‍💻 Author

This App has been developed by [**Sofia Sánchez Urbano**](https://github.com/conchaasensiomr).