// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your MONGODB_URI to .env file");
// }

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db(); 

// export const auth = betterAuth({
//     baseURL: process.env.BETTER_AUTH_URL,   // ← এটা গুরুত্বপূর্ণ

//     database: mongodbAdapter(db), 
    
//     emailAndPassword: {
//         enabled: true,
//     },
    
//     socialProviders: {
//         google: {
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         }
//     }
// });
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MONGODB_URI to .env file");
}

if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error("Please add BETTER_AUTH_SECRET to .env file");
}

const client = new MongoClient(process.env.MONGODB_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 15000,
});

const db = client.db("partho-data");

export const auth = betterAuth({
    // প্রোডাকশনে সার্ভারের জন্য /api/auth পাথটি লাগবেই, তাই লোকাল ও লাইভ দুটোর জন্যই ডাইনামিক করে দেওয়া হলো
    baseURL: process.env.NODE_ENV === "production" 
        ? "https://urban-fashion1.netlify.app/api/auth" 
        : "http://localhost:3000/api/auth",

    secret: process.env.BETTER_AUTH_SECRET,

    database: mongodbAdapter(db),

    // প্রোডাকশনে ক্রস-অরিজিন রিকোয়েস্ট সিকিউর করার জন্য এটি মাস্ট
    trustedHeaders: true,

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    }
});