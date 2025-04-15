import { Box, Stack, Anchor, Group, useMantineTheme, Text } from "@mantine/core";
import { IconHome2, IconBriefcase, IconUser, IconMessage } from "@tabler/icons-react";
import Link from "next/link";

export function NavbarContentBack(){
    const theme = useMantineTheme();
    return (
      <>
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
            //   onClick={() => {
            //     if (window.innerWidth < parseInt(theme.breakpoints.md, 10)) {
            //       toggle();
            //     }
            //   }}
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
      </>
    );
}