import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

export function NavbarContent() {
  const theme = useMantineTheme();

  const listPaths = [
    {
      icon: <IconHome2 size={18} />,
      label: "Home",
      path: "",
    },
    {
      icon: <IconHome2 size={18} />,
      label: "Portfolio",
      path: "",
    },
    {
      icon: <IconHome2 size={18} />,
      label: "About",
      path: "",
    },
    {
      icon: <IconHome2 size={18} />,
      label: "Contact",
      path: "",
    },
  ];

  return (
    <>
      <Box mt="md" style={{ flex: "1" }}>
        <Stack gap="xs">
         {listPaths.map((item, index) => (
            <Group
              key={index}
              c={index === 0 ? "blue" : "dimmed"}
              fw={500}
              p="xs"
              display="flex"
              style={{ borderRadius: theme.radius.sm }}
            >
              {item.icon}
              <Text>{item.label}</Text>
            </Group>
         ))}
        </Stack>
      </Box>
    </>
  );
}
