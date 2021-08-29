#AMAZON CLONE

It is Full Stack Amazon Clone created with ReactJs frontend and NodeJs with ExpressJS backend.
This project includes similar UI as https://www.amazon.co.uk/, payment system created with Stripe, authorization and real time database with Firebase. You can create new account with your e-mail and password and must login for payment process. You can add items to your basket, remove them, proceed to payment and test the actual payment process. Your orders will be displayed in real time as you completed the payment.
Live version: https://challenge-b65d5.web.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


## Prerequisities

Stripe Account
Firebase Account (Upgraded to Blaze)

## Setup

Create `.env` file.
Create [Firebase Project and add Cloud Firestore](https://console.firebase.google.com/).
Then get the config something as below;

```js
const firebaseConfig = {
  apiKey: "XXXXXX-XXXXXXX",
  authDomain: "XXXX.firebaseapp.com",
  databaseURL: "https://XXXX.firebaseio.com",
  projectId: "XXXX",
  storageBucket: "XXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "1:XXXXXXXXX:web:XXXXXXXX",
};
```

Then, add these config to `.env`file as follows;

```env
REACT_APP_FIREBASE_API_KEY="XXXXXX-XXXXXXX"
REACT_APP_FIREBASE_AUTH_DOMAIN="XXXXX.firebaseapp.com"
REACT_APP_FIREBASE_DATABASE_URL="https://XXXX.firebaseio.com"
REACT_APP_FIREBASE_PROJECT_ID="XXXX"
REACT_APP_FIREBASE_STORAGE_BUCKET="XXXX.appspot.com"
REACT_APP_FIREBASE_MESSAGE_SENDER_ID="XXXXXXXXXXXXX"
REACT_APP_FIREBASE_APP_ID="1:XXXXXXXXX:web:XXXXXXXX"
```

Login to Stripe and get your test api keys. Then, add your publishable key and secret key into `.env`file as follows:

```env
REACT_APP_STRIPE_PUBLIC_KEY="XXXXXXXXX"
REACT_APP_STRIPE_SECRET_KEY="XXXXXXXXX"
```

Run following commands in terminal in main directory:

```bash
npm i
npm run build
firebase login
firebase deploy --only hosting
npm start
```

Then, open another terminal and run following commands:

```bash
cd functions
npm i
npm run build
firebase deploy --only functions
```

Add your Function URL into `.env`file as follows:

```env
REACT_APP_FIREBASE_FUNCTION_API="XXXXXXXX"
```

Then, run following command:

```bash
firebase emulators:start
```
