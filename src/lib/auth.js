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

// MongoDB Client (একবারই কানেক্ট হয়)
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
    // ✅ BETTER_AUTH_URL অবশ্যই সেট করো
    baseURL: process.env.BETTER_AUTH_URL,

    database: mongodbAdapter(db),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    },

    // Optional: Security এর জন্য
    secret: process.env.BETTER_AUTH_SECRET,
});