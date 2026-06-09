import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MONGODB_URI to .env file");
}

// ১. মঙ্গোডিবি ক্লায়েন্ট তৈরি হলো
const client = new MongoClient(process.env.MONGODB_URI);
// ⚡ Better Auth-এর জন্য ডাটাবেজ কানেকশন সুনির্দিষ্ট করা হলো
const db = client.db(); 

export const auth = betterAuth({
    // ⚡ এখানে mongodbAdapter এর ভেতর সরাসরি db অবজেক্ট পাস করে দেওয়া হলো যেন 'db.collection' ফাংশনটি কাজ করে
    database: mongodbAdapter(db), 
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }
    }
});