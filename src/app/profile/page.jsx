"use client";

import React, { useState, useEffect } from 'react';
import { authClient } from "@/lib/auth-clint";
import Image from "next/image";

const Myprofilepage = () => {
    const { data: session, isPending } = authClient.useSession();
    
    const [mounted, setMounted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleEditClick = () => {
        setName(session?.user?.name || "");
        setImage(session?.user?.image || "");
        setIsEditing(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        try {
            await authClient.user.update({
                name: name,
                image: image,
            });
            
            window.location.reload();
            
        } catch (error) {
            console.error("Update failed:", error);
            alert("Something went wrong!");
        } finally {
            setIsUpdating(false);
        }
    };

    if (!mounted || isPending) {
        return <div className="p-8 text-center text-sm font-medium">Loading profile...</div>;
    }

    if (!session) {
        return <div className="p-8 text-center text-red-500 font-medium">Please log in to view this page.</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-background border border-divider rounded-xl shadow-md">
            {!isEditing ? (
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    
                    <div className="flex justify-center">
                        {session.user.image && (session.user.image.startsWith("http://") || session.user.image.startsWith("https://")) ? (
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-sky-500">
                                <Image
                                    src={session.user.image}
                                    alt={session.user.name || "User"}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-sky-500 text-white flex items-center justify-center text-3xl font-bold">
                                {session.user.name?.charAt(0).toUpperCase() || "U"}
                            </div>
                        )}
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold">{session.user.name}</h2>
                        <p className="text-sm text-gray-500">{session.user.email}</p>
                    </div>

                    <button
                        onClick={handleEditClick}
                        className="w-full py-2 px-4 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition"
                    >
                        Edit Profile
                    </button>
                </div>
            ) : (
                <form onSubmit={handleUpdate} className="space-y-4">
                    <h1 className="text-2xl font-bold text-center">Update Profile</h1>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-2 border border-divider rounded-lg bg-transparent focus:outline-sky-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Profile Image URL</label>
                        <input
                            type="url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full p-2 border border-divider rounded-lg bg-transparent focus:outline-sky-500"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="w-1/2 py-2 px-4 border border-divider rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="w-1/2 py-2 px-4 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition disabled:opacity-50"
                        >
                            {isUpdating ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Myprofilepage;