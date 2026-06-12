"use client";
import { authClient } from "@/lib/auth-client"; 
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, Suspense } from "react"; // Suspense ইম্পোর্ট করা হয়েছে
import { Button, Card, Form, Input, Label, TextField, FieldError } from "@heroui/react";

// ১. মূল লগইন ফর্মের কোড আলাদা করা হলো
function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (data) {
        alert("Login Successful!");
        window.location.assign(callbackUrl); 
      }

      if (error) {
        setErrorMessage(error.message || "Invalid email or password.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault(); 
    await authClient.signIn.social({
      provider: "google",
      callbackURL: callbackUrl, 
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={handleLogin}>
        {errorMessage && (
          <div className="bg-red-100 text-red-600 p-2 rounded text-center text-sm font-semibold">
            {errorMessage}
          </div>
        )}

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input 
            placeholder="Enter your password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldError />
        </TextField>

        <Button type="submit" color="primary" className="w-full font-semibold">Login</Button>

        <div className="text-center my-1 text-gray-400">OR</div>

        <Button 
          type="button" 
          variant="bordered" 
          onClick={handleGoogleLogin} 
          className="w-full font-semibold"
        >
          Sign in with Google
        </Button>

        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-500 underline">
            Register here
          </Link>
        </p>
      </Form>
    </Card>
  );
}

// ২. মূল Default Export যেটিকে Next.js খুঁজছে, সেখানে Suspense দিয়ে র‍্যাপ করা হলো
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}