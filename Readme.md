

 Installation

To run this project on your local machine, follow these steps:

1. Copy the code from the repository.
2. Install dependencies: `npm install`
3. Create a .env file and add the following environment variables

```
 MONGO_URI=<MONGO_URI>
 SECERTE_KEY=<YOUR_SECERTE_KEY>
 JWT_SECERTE_KEY=<YOUR_JWT_SECERTE_KEY>
 RAZORPAY_KEY_ID =<RAZORPAY_KEY_ID>
 RAZORPAY_KEY_SECRET =<RAZORPAY_KEY_SECRET>

```

4. Start the backend server: `npm start`(if you are using nodemon then change in script of pacakge.json for start i.e `nodemon index.js`)

5. Then `cd ..` to comes back to root file and do `cd app` and then do `npm install`.

6. Create a .env file and add the following environment variables

```
    VITE_RAZORPAY_KEY_ID =<RAZORPAY_KEY_ID>(same as used in server folder)
    VITE_RAZORPAY_KEY_SECRET =<RAZORPAY_KEY_SECRET>(same as used in server folder)
    VITE_BACKEND_API_URL=http://localhost:5500/api

```

7. start the frontend server: `npm run dev`.


Grocery_webapp_fullstackProject

This project is a modified version of [Blinkit-web-app-Clone](https://github.com/AbhayKadam57/Blinkit-web-app-Clone).

Changes Made
- Renamed folder structure for better clarity
- Updated UI components
- Removed all references to the original Blinkit/Flinkit branding and logo
- Added a new custom logo for the application
- Cleaned up unused files and improved component organization

 
Original Author
- Created by [AbhayKadam57](https://github.com/AbhayKadam57)
- No license specified in the original repository. This version is shared for educational purposes only.

