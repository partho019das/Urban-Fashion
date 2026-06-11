"use client";
import { authClient } from "@/lib/auth-clint";
import { Check } from "@gravity-ui/icons";
import { useState } from "react";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {
  // ⚡ HeroUI ইনপুটের ডাটা ধরার জন্য স্টেট
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
 
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: image || undefined, 
    });

    console.log({ data, error });

    if (data) {
      alert("Sign Up Successful!");
    
      window.location.assign("/login"); 
    }

    if (error) {
      alert(error.message || "Something went wrong!");
    }
  };

  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input 
            placeholder="Image URL" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input 
            placeholder="john@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input 
            placeholder="Enter your password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="text-center">
          <Button className="w-full text-xl hover:bg-red-500" type="submit">
            <Check />
            Signin
          </Button>
        </div>
      </Form>
      
      <p className="text-center mt-4"> or </p>
      
      <Button 
        type="button" 
        onClick={handleGoogleSignin} 
        variant="outline" 
        className="w-full hover:bg-sky-600 hover:text-white"
      > 
        <GrGoogle /> SignUp With Google
      </Button>

    </Card>
  );
}