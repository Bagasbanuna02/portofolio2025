"use client";

import type React from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { LanguageProvider } from "../context/language-context";
import MainLayout from "./main-layout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <LanguageProvider>
        <MainLayout>{children}</MainLayout>
      </LanguageProvider>
    </MantineProvider>
  );
}
