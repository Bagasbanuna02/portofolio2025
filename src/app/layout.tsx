import type React from "react"
import "@mantine/core/styles.css"
import { MantineProvider, ColorSchemeScript } from "@mantine/core"
import { theme } from "./theme"
import "./styles/global-styles.css" // Import the custom styles
import { MainLayout } from "./components/main-layout"

export const metadata = {
  title: "Professional Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }} data-mantine-color-scheme="light" >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}  defaultColorScheme="dark">
          <MainLayout>{children}</MainLayout>
        </MantineProvider>
      </body>
    </html>
  )
}
