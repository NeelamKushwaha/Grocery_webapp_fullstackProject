

 Installation

To run this project on your local machine, follow these steps:

1. Clone the repository: git clone https://github.com/AbhayKadam57/Blinkit-web-app-Clone.git
2. Change directory: `cd server`
3. Install dependencies: `npm install`
4. Create a .env file and add the following environment variables

```
 MONGO_URI=<MONGO_URI>
 SECERTE_KEY=<YOUR_SECERTE_KEY>
 JWT_SECERTE_KEY=<YOUR_JWT_SECERTE_KEY>
 RAZORPAY_KEY_ID =<RAZORPAY_KEY_ID>
 RAZORPAY_KEY_SECRET =<RAZORPAY_KEY_SECRET>

```

5. Start the backend server: `npm start`(if you are using nodemon then change in script of pacakge.json for start i.e `nodemon index.js`)

6. Then `cd ..` to comes back to root file and do `cd app` and then do `npm install`.

7. Create a .env file and add the following environment variables

```
    VITE_RAZORPAY_KEY_ID =<RAZORPAY_KEY_ID>(same as used in server folder)
    VITE_RAZORPAY_KEY_SECRET =<RAZORPAY_KEY_SECRET>(same as used in server folder)
    VITE_BACKEND_API_URL=http://localhost:5500/api

```

8. start the frontend server: `npm run dev`.

