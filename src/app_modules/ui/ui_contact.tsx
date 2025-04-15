"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ContactPage() {
  const theme = useMantineTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box py={60} className="hero-background">
        <Box className="bg-grid-pattern" />

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Title order={1} size="h1" fw={800} c="white" ta="center">
            Get In Touch
          </Title>
          <Box
            w={60}
            h={4}
            bg="blue"
            mx="auto"
            mt={10}
            style={{ borderRadius: 2 }}
          />
          <Text size="lg" c="dimmed" maw={800} mx="auto" mt="xl" ta="center">
            {` Have a project in mind or want to learn more about my services? I'd
            love to hear from you!`}
          </Text>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Grid gutter={50}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Title order={2} size="h2" fw={700} c="white">
                Contact Information
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={30}
                style={{ borderRadius: 2 }}
              />

              <SimpleGrid cols={1} spacing={30}>
                <Group>
                  <ThemeIcon size={50} radius="md" color="blue.8" c="blue.4">
                    <IconMail size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} size="lg" c="white">
                      Email
                    </Text>
                    <Text c="dimmed">hello@example.com</Text>
                  </Box>
                </Group>

                <Group>
                  <ThemeIcon size={50} radius="md" color="blue.8" c="blue.4">
                    <IconPhone size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} size="lg" c="white">
                      Phone
                    </Text>
                    <Text c="dimmed">+1 (555) 123-4567</Text>
                  </Box>
                </Group>

                <Group>
                  <ThemeIcon size={50} radius="md" color="blue.8" c="blue.4">
                    <IconMapPin size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} size="lg" c="white">
                      Location
                    </Text>
                    <Text c="dimmed">San Francisco, CA</Text>
                  </Box>
                </Group>
              </SimpleGrid>

              <Title order={3} size="h3" fw={700} c="white" mt={50} mb={20}>
                Connect With Me
              </Title>

              <Group>
                <Link href="https://github.com/Bagasbanuna02" passHref>
                  <ThemeIcon size={50} radius="xl" color="blue">
                    <IconBrandGithub size={24} />
                  </ThemeIcon>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bagas-nusantara-nabillah-45035a224/"
                  passHref
                >
                  <ThemeIcon size={50} radius="xl" color="blue">
                    <IconBrandLinkedin size={24} />
                  </ThemeIcon>
                </Link>
                <Link href="mailto:bagasbanuna12@gmail.com" passHref>
                  <ThemeIcon size={50} radius="xl" color="blue">
                    <IconMail size={24} />
                  </ThemeIcon>
                </Link>
              </Group>

              <Box mt={50}>
                <Text size="lg" c="gray.3">
                  {`  I'm available for freelance projects, full-time positions, and
                  consulting opportunities. Let's create something amazing
                  together!`}
                </Text>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
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

                <form>
                  <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        styles={{
                          label: {
                            color: theme.colors.gray[3],
                            marginBottom: 5,
                          },
                        }}
                      />
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        placeholder="Your email"
                        required
                        type="email"
                        styles={{
                          label: {
                            color: theme.colors.gray[3],
                            marginBottom: 5,
                          },
                        }}
                      />
                    </Grid.Col>
                  </Grid>

                  <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    styles={{
                      label: { color: theme.colors.gray[3], marginBottom: 5 },
                    }}
                  />

                  <TextInput
                    label="Phone"
                    placeholder="Your phone number (optional)"
                    mt="md"
                    styles={{
                      label: { color: theme.colors.gray[3], marginBottom: 5 },
                    }}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Your message"
                    minRows={5}
                    mt="md"
                    required
                    styles={{
                      label: { color: theme.colors.gray[3], marginBottom: 5 },
                    }}
                  />

                  <Group mt="xl">
                    <Button type="submit" size="lg" color="blue">
                      Send Message
                    </Button>
                  </Group>
                </form>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h2" fw={700} c="white">
              Frequently Asked Questions
            </Title>
            <Box
              w={60}
              h={4}
              bg="blue"
              mx="auto"
              mt={10}
              style={{ borderRadius: 2 }}
            />
            <Text size="lg" c="dimmed" maw={800} mx="auto" mt="xl">
              Answers to common questions about working with me.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {[
              {
                question: "What information do you need to start a project?",
                answer:
                  "To get started, I'll need details about your business, project goals, target audience, design preferences, and any specific functionality requirements. The more information you provide, the better I can tailor the solution to your needs.",
              },
              {
                question: "How do we communicate during the project?",
                answer:
                  "I use a combination of email, video calls, and project management tools to ensure clear and consistent communication throughout the project. I provide regular updates and am available to answer questions and address concerns.",
              },
              {
                question: "Do you offer post-launch support?",
                answer:
                  "Yes, I offer various support options after your website launches. This can include technical support, content updates, feature additions, and performance monitoring to ensure your site continues to run smoothly.",
              },
              {
                question: "Can you work with my existing team?",
                answer:
                  "I'm experienced in collaborating with designers, developers, marketers, and other stakeholders. I can integrate seamlessly with your team to ensure a cohesive approach to your project.",
              },
            ].map((faq, index) => (
              <Box
                key={index}
                p="xl"
                bg={theme.colors.dark[6]}
                className="faq-card"
                style={{ borderRadius: theme.radius.md }}
              >
                <Text fw={700} size="lg" c="white" mb="md">
                  {faq.question}
                </Text>
                <Text c="dimmed">{faq.answer}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="md" ta="center">
          <Title order={2} size="h2" fw={800} c="white">
            Ready to Start Your Project?
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            {`  Let's work together to create a website that helps your business
            grow and succeed in the digital world.`}
          </Text>
          <Group justify="center" mt={40}>
            <Button component={Link} href="/pricing" size="lg" color="blue">
              View Pricing
            </Button>
            <Button
              component={Link}
              href="/portfolio"
              size="lg"
              variant="outline"
            >
              See My Work
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
