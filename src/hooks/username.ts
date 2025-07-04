"use client";

import { useEffect, useState } from "react";
import { generateRandomUsername } from "@/lib/usernames";

export function useUsername() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(generateRandomUsername());

    const stored = localStorage.getItem("username");
    if (stored) {
      setUsername(stored);
    } else {
      const newUsername = generateRandomUsername();
      setUsername(newUsername);
      localStorage.setItem("username", newUsername);
    }
  }, []);

  return username;
}
