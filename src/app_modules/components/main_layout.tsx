"use client";

import type React from "react";

import { useLanguage } from "@/app/context/language-context";
import { imageAssetPath } from "@/lib/assets_path";
import { pagePath } from "@/lib/page_path";
import {
  Anchor,
  AppShell,
  Avatar,
  Box,
  Burger,
  Divider,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import {
  IconBriefcase,
  IconCoin,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CompButtonMediaSocial } from "./comp_button_mediaSocial";
import { useState } from "react";

export default function ComponentMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const pathname = usePathname();
  const { t } = useLanguage();
  const [version, setVersion] = useState("");

  const navLinks = [
    { icon: IconHome, label: t("nav.home"), path: pagePath.home },
    {
      icon: IconBriefcase,
      label: t("nav.portfolio"),
      path: pagePath.portofolio,
    },
    { icon: IconUser, label: t("nav.about"), path: pagePath.about },
    { icon: IconCoin, label: t("nav.pricing"), path: pagePath.pricing },
    { icon: IconMessage, label: t("nav.contact"), path: pagePath.contact },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  useShallowEffect(() => {
    handleVersion();
  }, []);

  async function handleVersion() {
    const response = await fetch("/api/version");
    const data = await response.json();
    setVersion(data.newVersion);
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
              Banuna Studio
            </Text>
            <Avatar
              src={opened ? imageAssetPath.avatar : imageAssetPath.logo}
              size="md"
              radius="xl"
              style={{ transition: "all 2s" }}
            />
          </Group>
        </Group>
      </AppShell.Header>

      {/* Sidebar/Navbar */}
      <AppShell.Navbar p="md">
        <Box>
          <Box ta="center" mb={20}>
            <Avatar
              src={imageAssetPath.logo}
              size={140}
              radius={120}
              mx="auto"
              mb={10}
            />
            <Text size="xl" fw={700} c="white">
              Bagas Banuna
            </Text>
            <Text size="sm" c="dimmed">
              Web Developer & UI / UX Design
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
                  backgroundColor: isActive(item.path)
                    ? theme.colors.dark[6]
                    : "transparent",
                }}
                onClick={() => {
                  if (window.innerWidth < Number(theme.breakpoints.md)) {
                    close();
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
            <CompButtonMediaSocial themeSize={36} iconSize={18} />
          </Group>

          {/* Language Switcher */}
          {/* <Box mt="xl" px="xs">
            <LanguageSwitcher />
          </Box> */}
        </Box>
        <Box ta={"center"} mt={"xs"}>
          <Text fz={"sm"} c="dimmed">
            v.{version}
          </Text>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
