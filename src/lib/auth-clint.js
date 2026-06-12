// import { createAuthClient } from "better-auth/client"

// export const authClient = createAuthClient({
//     baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
// })

// lib/auth-client.js
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এটি লোকালহোস্টে থাকলে http://localhost:3000 নিবে, 
    // আর নেটলিফাইতে থাকলে অটোমেটিক লাইভ সাইটের লিংকটি নিয়ে নিবে!
    baseURL: process.env.NEXT_PUBLIC_APP_URL
});