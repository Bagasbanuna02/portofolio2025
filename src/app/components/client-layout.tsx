"use client";

import ComponentMainLayout from "@/app_modules/components/main_layout";
import { MantineProvider } from "@mantine/core";
import type React from "react";
import { LanguageProvider } from "../context/language-context";
import { theme } from "../theme";
import { Notifications } from "@mantine/notifications";


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <LanguageProvider>
        <ComponentMainLayout>{children}</ComponentMainLayout>
      </LanguageProvider>
    </MantineProvider>
  );
}
