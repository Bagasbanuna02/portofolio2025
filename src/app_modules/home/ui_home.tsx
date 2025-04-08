"use client";

import {
  Box,
  Container,
  Title,
  Group,
  Button,
  SimpleGrid,
  Card,
  Grid,
  Stack,
  ThemeIcon,
  TextInput,
  Textarea,
  Text,
  Image,
  useMantineTheme,
} from "@mantine/core";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      {/* Hero Section */}
      <Box
        py={{ base: 40, md: 80 }}
        // sx={{
        //   background: `linear-gradient(to bottom, ${theme.colors.dark[7]}, ${theme.colors.dark[8]})`,
        //   position: "relative",
        //   overflow: "hidden",
        // }}
      >
        <Box
        // sx={{
        //   position: "absolute",
        //   inset: 0,
        //   backgroundImage: `linear-gradient(to right, ${theme.colors.dark[6]} 1px, transparent 1px), linear-gradient(to bottom, ${theme.colors.dark[6]} 1px, transparent 1px)`,
        //   backgroundSize: "4rem 4rem",
        //   maskImage:
        //     "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
        // }}
        />

        <Container size="lg" ta="center">
          <Title order={1} size="h1" fw={700} lh={1.1} mb="md" c="white">
            <Text inherit>Creative Developer</Text>
            <Text inherit c="blue">
              Building Digital Experiences
            </Text>
          </Title>

          <Text size="lg" c="dimmed" maw={800} mx="auto" mt="xl">
            {`I design and develop experiences that make people's lives simple.
            Specializing in creating elegant, functional websites and
            applications.`}
          </Text>

          <Group justify="center" mt={30}>
            <Button size="md" color="blue">
              View My Work
            </Button>
            <Button size="md" variant="outline">
              Contact Me
            </Button>
          </Group>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" py={60} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={40}>
            <Title order={2} size="h2" fw={700} c="white">
              My Portfolio
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
              Here are some of my recent projects. Each project is unique and
              solves specific problems.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                padding="md"
                radius="md"
                bg={theme.colors.dark[7]}
              >
                <Card.Section>
                  <Box pos="relative">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      height={200}
                      alt={`Project ${item}`}
                    />
                    <Box
                    // sx={{
                    //   position: "absolute",
                    //   top: 0,
                    //   left: 0,
                    //   right: 0,
                    //   bottom: 0,
                    //   background: `rgba(${theme.colors.blue[6]
                    //     .replace("rgb(", "")
                    //     .replace(")", "")}, 0.8)`,
                    //   opacity: 0,
                    //   transition: "opacity 300ms ease",
                    //   display: "flex",
                    //   alignItems: "center",
                    //   justifyContent: "center",
                    //   "&:hover": {
                    //     opacity: 1,
                    //   },
                    // }}
                    >
                      <Button variant="outline" color="white">
                        View Project
                      </Button>
                    </Box>
                  </Box>
                </Card.Section>

                <Text fw={600} size="lg" mt="md" c="white">
                  Project Title {item}
                </Text>
                <Text size="sm" c="dimmed">
                  Web Design / Development
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box id="about" py={60} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box pos="relative" maw={400} mx={{ base: "auto", md: 0 }}>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  radius="md"
                />
                <Box
                  pos="absolute"
                  bottom={-24}
                  right={-24}
                  w={96}
                  h={96}
                  bg="blue"
                  style={{ borderRadius: 12 }}
                  visibleFrom="md"
                />
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} size="h2" fw={700} c="white">
                About Me
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />

              <Text size="lg" mt="xl" c="gray.3">
              {`I'm a passionate web developer with over 5 years of experience
                creating beautiful, functional websites and applications. I
                specialize in front-end development, with expertise in React,
                Next.js, and modern CSS frameworks.`}
              </Text>

              <Text size="lg" mt="md" c="gray.3">
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that not only look great
                but also provide exceptional user experiences.
              </Text>

              <Grid mt={30}>
                <Grid.Col span={6}>
                  <Text fw={600} size="lg" c="white">
                    Skills
                  </Text>
                  <Stack gap={5} mt={8}>
                    <Text c="dimmed">React & Next.js</Text>
                    <Text c="dimmed">TypeScript</Text>
                    <Text c="dimmed">UI/UX Design</Text>
                    <Text c="dimmed">Responsive Design</Text>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Text fw={600} size="lg" c="white">
                    Education
                  </Text>
                  <Stack gap={5} mt={8}>
                    <Text c="dimmed">B.S. Computer Science</Text>
                    <Text c="dimmed">Web Development Certification</Text>
                    <Text c="dimmed">UI/UX Design Course</Text>
                  </Stack>
                </Grid.Col>
              </Grid>

              <Group mt={30}>
                <Button color="blue">Download CV</Button>
                <Button variant="outline">Contact Me</Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={60} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={40}>
            <Title order={2} size="h2" fw={700} c="white">
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
            <Text size="lg" c="dimmed" maw={800} mx="auto" mt="xl">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </Text>
          </Box>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="lg">
                <Group>
                  <ThemeIcon size={48} radius="xl" color="blue.8" c="blue.4">
                    <IconMail size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} c="white">
                      Email
                    </Text>
                    <Text c="dimmed">hello@example.com</Text>
                  </Box>
                </Group>

                <Group>
                  <ThemeIcon size={48} radius="xl" color="blue.8" c="blue.4">
                    <IconBrandLinkedin size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} c="white">
                      LinkedIn
                    </Text>
                    <Text c="dimmed">linkedin.com/in/yourname</Text>
                  </Box>
                </Group>

                <Group>
                  <ThemeIcon size={48} radius="xl" color="blue.8" c="blue.4">
                    <IconBrandGithub size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600} c="white">
                      GitHub
                    </Text>
                    <Text c="dimmed">github.com/yourname</Text>
                  </Box>
                </Group>

                <Box mt="md">
                  <Text fw={600} size="lg" mb="sm" c="white">
                    Follow Me
                  </Text>
                  <Group>
                    <ThemeIcon size={40} radius="xl" color="blue">
                      <IconBrandGithub size={20} />
                    </ThemeIcon>
                    <ThemeIcon size={40} radius="xl" color="blue">
                      <IconBrandLinkedin size={20} />
                    </ThemeIcon>
                    <ThemeIcon size={40} radius="xl" color="blue">
                      <IconExternalLink size={20} />
                    </ThemeIcon>
                  </Group>
                </Box>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <form>
                <Grid gutter="md">
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput label="Name" placeholder="Your name" required />
                  </Grid.Col>

                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                      label="Email"
                      placeholder="Your email"
                      required
                      type="email"
                    />
                  </Grid.Col>
                </Grid>

                <TextInput label="Subject" placeholder="Subject" mt="md" />

                <Textarea
                  label="Message"
                  placeholder="Your message"
                  minRows={4}
                  mt="md"
                  required
                />

                <Button fullWidth mt="xl" color="blue">
                  Send Message
                </Button>
              </form>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={40} bg={theme.colors.dark[9]} c="white">
        <Container size="lg">
          <Group justify="space-between" align="center" wrap="wrap">
            <Group>
              <Box w={30} h={30} bg="blue" style={{ borderRadius: "50%" }} />
              <Text fw={700} size="lg">
                Portfolio
              </Text>
            </Group>

            <Box ta={{ base: "center", md: "right" }}>
              <Text c="dimmed">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </Text>
              <Text c="dimmed" mt={5}>
                Designed and built with ❤️
              </Text>
            </Box>
          </Group>
        </Container>
      </Box>
    </>
  );
}
