"use client";

import {
  Box,
  Button,
  Grid,
  Group,
  TextInput,
  Textarea,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

export function FormContact() {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // <- Tambahin ini biar tidak reload

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        notifications.show({
          title: "Message Sent!",
          message: "Your message has been successfully delivered.",
          color: "green",
          icon: <IconCheck />,
        });

        setData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error(error);

      notifications.show({
        title: "Message Failed",
        message: "There was a problem sending your message. Please try again.",
        color: "red",
        icon: <IconX />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p="xl"
      bg={theme.colors.dark[7]}
      style={{
        borderRadius: theme.radius.md,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <Title order={2} size="h3" fw={700} c="white" mb={30}>
        Send Me a Message
      </Title>

      <form onSubmit={handleSubmit}>
        <Grid gutter="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Email"
              placeholder="Your email"
              required
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
        />

        <TextInput
          label="Phone"
          placeholder="Your phone number (optional)"
          mt="md"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        <Textarea
          label="Message"
          placeholder="Your message"
          minRows={5}
          mt="md"
          required
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <Group mt="xl">
          <Button
            type="submit"
            size="lg"
            color="blue"
            loading={loading}
            disabled={loading}
          >
            Send Message
          </Button>

          {/* <Button
            onClick={() => {
              notifications.show({
                title: "Default notification",
                message: "Do not forget to star Mantine on GitHub! 🌟",
              });
            }}
          >
            Klik
          </Button> */}
        </Group>
      </form>
    </Box>
  );
}
