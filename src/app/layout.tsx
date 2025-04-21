import type React from "react";
import "@mantine/core/styles.css";
import "./styles/global-styles.css"; // Import the custom styles
import ClientWrapper from "./components/client-wrapper";

export const metadata = {
  title: "Banuna Studio",
  description: "Touch Your Idea With Banuna Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>{/* Remove ColorSchemeScript completely */}</head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
