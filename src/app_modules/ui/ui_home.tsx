"use client";

import { assetsPath } from "@/lib/assets_path";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandFigma,
  IconBrandReact,
  IconCode,
  IconDeviceMobile,
  IconRocket,
  IconSeo,
} from "@tabler/icons-react";
import Link from "next/link";

export default function HomePage() {
  const theme = useMantineTheme();

  const features = [
    {
      icon: IconBrandReact,
      title: "Modern Web Development",
      description:
        "Building responsive, fast, and user-friendly websites using the latest technologies.",
    },
    {
      icon: IconDeviceMobile,
      title: "Mobile-First Approach",
      description:
        "Ensuring your website looks and works perfectly on all devices, from phones to desktops.",
    },
    {
      icon: IconBrandFigma,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful interfaces that enhance user experience.",
    },
    {
      icon: IconSeo,
      title: "SEO Optimization",
      description:
        "Implementing best practices to improve your visibility in search engines.",
    },
    {
      icon: IconCode,
      title: "Clean Code",
      description:
        "Writing maintainable, well-documented code that's easy to extend and update.",
    },
    {
      icon: IconRocket,
      title: "Performance Optimization",
      description:
        "Ensuring your website loads quickly and runs smoothly for all users.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box py={{ base: 60, md: 120 }} className="hero-background">
        <Box className="bg-grid-pattern" />

        <Container size="lg">
          <Grid gutter={50} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={1} size={50} fw={800} lh={1.1} mb="md" c="white">
                <Text inherit>Transforming Ideas into</Text>
                <Text inherit c="blue">
                  Digital Experiences
                </Text>
              </Title>

              <Text size="lg" c="dimmed" mt="xl" maw={500}>
                I am a web developer specializing in creating modern, user-friendly
                websites that help businesses thrive online. My goal is to
                deliver high-quality solutions tailored to your needs.
              </Text>

              <Group mt={30}>
                <Button
                  component={Link}
                  href="/portofolio"
                  size="lg"
                  color="blue"
                >
                  View My Work
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                >
                  Get In Touch
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src={assetsPath.avatar}
                alt="Hero Image"
                radius="md"
                style={{
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                  transform:
                    "perspective(800px) rotateY(-10deg) rotateX(10deg)",
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h1" fw={700} c="white">
              My Services
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
              I offer a comprehensive range of web development and design
              services to help you establish a strong online presence.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
            {features.map((feature, index) => (
              <Box
                key={index}
                p="xl"
                bg={theme.colors.dark[7]}
                className="feature-card"
                style={{ borderRadius: theme.radius.md }}
              >
                <ThemeIcon size={50} radius="md" color="blue" mb="md">
                  <feature.icon size={26} />
                </ThemeIcon>
                <Text fw={700} size="lg" mb="xs" c="white">
                  {feature.title}
                </Text>
                <Text c="dimmed">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>

          <Box ta="center" mt={50}>
            <Button component={Link} href="/pricing" size="lg" color="blue">
              View Pricing
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Recent Projects Preview */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h1" fw={700} c="white">
              Recent Projects
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
              Take a look at some of my latest work. Each project represents a
              unique challenge and solution.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
            {[1, 2, 3].map((item) => (
              <Box
                key={item}
                className="project-container"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: theme.radius.md,
                  height: 320,
                }}
              >
                <Image
                  src={assetsPath.dummy_image}
                  alt={`Project ${item}`}
                  height={320}
                  style={{ objectFit: "cover" }}
                />
                <Box className="project-overlay" />
                <Box className="project-info">
                  <Text fw={700} size="xl" c="white">
                    Project {item} Title
                  </Text>
                  <Text c="gray.3" mb="md">
                    Web Design / Development
                  </Text>
                  <Button
                    variant="outline"
                    color="white"
                    component={Link}
                    href={`/portofolio/project-${item}`}
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Box ta="center" mt={50}>
            <Button
              component={Link}
              href="/portofolio"
              size="lg"
              variant="outline"
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h1" fw={700} c="white">
              Client Testimonials
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
              Hear what my clients have to say about their experience working
              with me. Their success is my success.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {[
              {
                name: "Sarah Johnson",
                position: "CEO, TechStart",
                quote:
                  "Working with this developer was a game-changer for our business. They delivered a website that exceeded our expectations and has significantly improved our online presence.",
              },
              {
                name: "Michael Chen",
                position: "Marketing Director, GrowthLabs",
                quote:
                  "I was impressed by the attention to detail and the ability to translate our vision into a beautiful, functional website. The process was smooth and the results speak for themselves.",
              },
              {
                name: "Emily Rodriguez",
                position: "Founder, DesignHub",
                quote:
                  "As a design professional, I have high standards for web development. This developer not only met those standards but raised the bar with their technical expertise and creative solutions.",
              },
              {
                name: "David Kim",
                position: "Product Manager, InnovateCorp",
                quote:
                  "The developer's ability to understand our complex requirements and deliver a user-friendly solution was remarkable. They were responsive, professional, and a pleasure to work with.",
              },
            ].map((testimonial, index) => (
              <Box
                key={index}
                p="xl"
                bg={theme.colors.dark[7]}
                className="process-step"
                style={{ borderRadius: theme.radius.md }}
              >
                <Text
                  size="lg"
                  c="dimmed"
                  style={{ fontStyle: "italic" }}
                  mb="xl"
                >
                  {testimonial.quote}
                </Text>
                <Group>
                  <Avatar
                    src={assetsPath.avatar}
                    alt={testimonial.name}
                    radius="xl"
                    size="md"
                  />
                  <Box>
                    <Text fw={700} c="white">
                      {testimonial.name}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {testimonial.position}
                    </Text>
                  </Box>
                </Group>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={100} bg={theme.colors.dark[7]}>
        <Container size="md" ta="center">
          <Title order={2} size="h1" fw={800} c="white">
            Ready to Start Your Project?
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            {"Let's work together to create something amazing. Whether you have a specific project in mind or just want to discuss ideas, I'm here to help."}
          </Text>
          <Group justify="center" mt={40}>
            <Button component={Link} href="/contact" size="lg" color="blue">
              Get in Touch
            </Button>
            <Button
              component={Link}
              href="/pricing"
              size="lg"
              variant="outline"
            >
              View Pricing
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
