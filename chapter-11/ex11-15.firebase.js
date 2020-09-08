// 코드 11-15 파이어베이스 설정과 파일 초기화: chapter-11/petstore/src/firebase.js

import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "<API KEY>",
    authDomain: "<AUTH DOMAIN>",
    databaseURL: "<DATABASE URL>",
    projectId: "<PROJECT ID>",
    storageBucket: "<STORAGE BUCKET>",
    messagingSenderId: "<SENDER ID>"
});

export const db = app.database();

export const productsRef = db.ref('products');