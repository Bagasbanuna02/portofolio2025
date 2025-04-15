"use client"

import type React from "react"

import {
  AppShell,
  Group,
  Text,
  Box,
  Anchor,
  Stack,
  ThemeIcon,
  Avatar,
  Divider,
  useMantineTheme,
  Burger,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconBriefcase,
  IconUser,
  IconMessage,
  IconCoin,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { assetsPath } from "@/lib/assets_path"

export default function ComponentLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure(false)
  const theme = useMantineTheme()
  const pathname = usePathname()

  const navLinks = [
    { icon: IconHome, label: "Home", path: "/" },
    { icon: IconBriefcase, label: "Portfolio", path: "/portofolio" },
    { icon: IconUser, label: "About Me", path: "/about" },
    { icon: IconCoin, label: "Price List", path: "/pricing" },
    { icon: IconMessage, label: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <AppShell
      header={{ height: { base: 60, md: 0 } }}
      navbar={{
        width: 250,
        breakpoint: "md",
        collapsed: { mobile: !opened },
        
      }}
      padding={0}
      
    >
      {/* Mobile Header with Burger */}
      <AppShell.Header display={{ md: "none" }}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text size="lg" fw={700}>
              Your Portfolio
            </Text>
            <Avatar src={assetsPath.photo} size="md" radius="xl" />
          </Group>
        </Group>
      </AppShell.Header>

      {/* Sidebar/Navbar */}
      <AppShell.Navbar p="md"
      >
        <Box>
          <Box ta="center" mb={20}>
            <Avatar src={assetsPath.photo} size={120} radius={120} mx="auto" mb={10} />
            <Text size="xl" fw={700} c="white">
              Your Name
            </Text>
            <Text size="sm" c="dimmed">
              Web Developer
            </Text>
          </Box>
          <Divider my="sm" />
        </Box>

        <Box mt="md" style={{ flex: "1" }}>
          <Stack gap="xs">
            {navLinks.map((item) => (
              <Anchor
                key={item.path}
                component={Link}
                href={item.path}
                c={isActive(item.path) ? "blue" : "dimmed"}
                fw={500}
                p="xs"
                display="flex"
                className={isActive(item.path) ? "active-nav-link" : "nav-link"}
                style={{
                  borderRadius: theme.radius.sm,
                  backgroundColor: isActive(item.path) ? theme.colors.dark[6] : "transparent",
                }}
                onClick={() => {
                  if (window.innerWidth < Number(theme.breakpoints.md)) {
                    close()
                  }
                }}
              >
                <Group>
                  <item.icon size={18} />
                  <Text>{item.label}</Text>
                </Group>
              </Anchor>
            ))}
          </Stack>
        </Box>

        <Box mt="auto">
          <Divider my="sm" />
          <Group justify="center" mt="md">
            <ThemeIcon size={36} radius="xl" color="blue">
              <IconBrandGithub size={18} />
            </ThemeIcon>
            <ThemeIcon size={36} radius="xl" color="blue">
              <IconBrandLinkedin size={18} />
            </ThemeIcon>
            <ThemeIcon size={36} radius="xl" color="blue">
              <IconMail size={18} />
            </ThemeIcon>
          </Group>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
