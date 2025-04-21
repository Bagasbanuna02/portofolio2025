"use client";

import {
  Box,
  Group,
  SegmentedControl,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useLanguage } from "../context/language-context";
import { IconLanguage } from "@tabler/icons-react";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const theme = useMantineTheme();

  return (
    <>
      <Box>
        <Group mb="xs" justify="center">
          <IconLanguage size={18} color={theme.colors.blue[4]} />
          <Text size="sm" c="dimmed">
            {t("language.switch")}
          </Text>
        </Group>
        <SegmentedControl
          fullWidth
          value={language}
          onChange={(value) => setLanguage(value as "en" | "id")}
          data={[
            { label: "English", value: "en" },
            { label: "Indonesia", value: "id" },
          ]}
          color="blue"
        />
      </Box>
    </>
  );
}
