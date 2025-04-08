"use client";

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
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconHome2,
  IconMail,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
export function MainLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      // header={{ height: 60 }}
      header={{ height: { base: 60, md: 0 } }}
      navbar={{
        width: 280,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* Mobile Header with Burger */}
      <AppShell.Header display={{ md: "none" }}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Text size="lg" fw={700}>
              Your Portfolio
            </Text>
            <Avatar
              src="https://github.com/Bagasbanuna02/assets/blob/main/banuna-studio/logo.png?raw=true"
              size="md"
              radius="xl"
            />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Box>
          <Box ta="center" mb={20}>
            <Avatar
              style={{
                border: `2px solid black`,
              }}
              src="https://github.com/Bagasbanuna02/assets/blob/main/banuna-studio/logo.png?raw=true"
              size={120}
              radius={120}
              mx="auto"
              mb={10}
            />
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
            <Anchor
              component={Link}
              href="#home"
              c="blue"
              fw={500}
              p="xs"
              display="flex"
              style={{ borderRadius: theme.radius.sm }}
              // sx={(theme) => ({
              //   "&:hover": {
              //     backgroundColor: theme.colors.dark[6],
              //   },
              // })}
              // onClick={() => {
              //   if (window.innerWidth < theme.breakpoints.md) {
              //     toggle();
              //   }
              // }}
            >
              <Group>
                <IconHome2 size={18} />
                <Text>Home</Text>
              </Group>
            </Anchor>

            <Anchor
              component={Link}
              href="#portfolio"
              c="dimmed"
              fw={500}
              p="xs"
              display="flex"
              style={{ borderRadius: theme.radius.sm }}
              // sx={(theme) => ({
              //   "&:hover": {
              //     backgroundColor: theme.colors.dark[6],
              //     color: theme.colors.blue[4],
              //   },
              // })}
              // onClick={() => {
              //   if (window.innerWidth < theme.breakpoints.md) {
              //     toggle();
              //   }
              // }}
            >
              <Group>
                <IconBriefcase size={18} />
                <Text>Portfolio</Text>
              </Group>
            </Anchor>

            <Anchor
              component={Link}
              href="#about"
              c="dimmed"
              fw={500}
              p="xs"
              display="flex"
              style={{ borderRadius: theme.radius.sm }}
              // sx={(theme) => ({
              //   "&:hover": {
              //     backgroundColor: theme.colors.dark[6],
              //     color: theme.colors.blue[4],
              //   },
              // })}
              // onClick={() => {
              //   if (window.innerWidth < theme.breakpoints.md) {
              //     toggle();
              //   }
              // }}
            >
              <Group>
                <IconUser size={18} />
                <Text>About Me</Text>
              </Group>
            </Anchor>

            <Anchor
              component={Link}
              href="#contact"
              c="dimmed"
              fw={500}
              p="xs"
              display="flex"
              style={{ borderRadius: theme.radius.sm }}
              // sx={(theme) => ({
              //   "&:hover": {
              //     backgroundColor: theme.colors.dark[6],
              //     color: theme.colors.blue[4],
              //   },
              // })}
              // onClick={() => {
              //   if (window.innerWidth < theme.breakpoints.md) {
              //     toggle();
              //   }
              // }}
            >
              <Group>
                <IconMessage size={18} />
                <Text>Contact</Text>
              </Group>
            </Anchor>
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
  );
}
