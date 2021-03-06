import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "<API KEY>",
    authDomain: "<AUTH DOMAIN>",
    databaseURL: "<DATABASE URL>",
    projectId: "<PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<SENDER ID>",
    appId: "<APP ID>"
});

export const db = app.database();

export const productsRef = db.ref('products');