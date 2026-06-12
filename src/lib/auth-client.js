// import { createAuthClient } from "better-auth/client"

// export const authClient = createAuthClient({
//     baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
// })

// lib/auth-client.js
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // এটি লোকাল ও লাইভ ডোমেইনে অটোমেটিক সঠিক /api/auth পাথ হ্যান্ডেল করবে
    baseURL: process.env.BETTER_AUTH_URL//localhost:3000/api/auth"
});