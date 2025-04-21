"use client";

import type React from "react";

import { useEffect, useState } from "react";
import ClientLayout from "./client-layout";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use this to prevent any rendering until we're fully on the client
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return nothing on the server, and during initial client render
  if (!isMounted) {
    // You can return a simple loading indicator here if needed
    return null;
  }

  // Once mounted on the client, render the actual layout
  return <ClientLayout>{children}</ClientLayout>;
}
