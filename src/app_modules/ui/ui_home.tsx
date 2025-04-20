"use client";

import { useLanguage } from "@/app/context/language-context";
import { imageAssetPath } from "@/lib/assets_path";
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
  const { t } = useLanguage();

  const features = [
    {
      icon: IconBrandReact,
      title: t("home.services.item1.title"),
      description: t("home.services.item1.description"),
    },
    {
      icon: IconDeviceMobile,
      title: t("home.services.item2.title"),
      description: t("home.services.item2.description"),
    },
    {
      icon: IconBrandFigma,
      title: t("home.services.item3.title"),
      description: t("home.services.item3.description"),
    },
    {
      icon: IconSeo,
      title: t("home.services.item4.title"),
      description: t("home.services.item4.description"),
    },
    {
      icon: IconCode,
      title: t("home.services.item5.title"),
      description: t("home.services.item5.description"),
    },
    {
      icon: IconRocket,
      title: t("home.services.item6.title"),
      description: t("home.services.item6.description"),
    },
  ];

  const recentProjects = [
    {
      title: "Daribalimice",
      image: imageAssetPath.project_image1,
      link: "https://daribalimice.vercel.app/home",
    },
  ];

  const testimonials = [
    {
      name: "Jerry Kurnia Lampe",
      position: "CEO, Daribalimice",
      quote: t("home.testimonials.client1.quote"),
    },
    // {
    //   name: t("home.testimonials.client2.name"),
    //   position: t("home.testimonials.client2.position"),
    //   quote: t("home.testimonials.client2.quote"),
    // },
    // {
    //   name: t("home.testimonials.client3.name"),
    //   position: t("home.testimonials.client3.position"),
    //   quote: t("home.testimonials.client3.quote"),
    // },
    // {
    //   name: t("home.testimonials.client4.name"),
    //   position: t("home.testimonials.client4.position"),
    //   quote: t("home.testimonials.client4.quote"),
    // },
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
                <Text inherit>{t("home.hero.title1")}</Text>
                <Text inherit c="blue">
                  {t("home.hero.title2")}
                </Text>
              </Title>

              <Text size="lg" c="dimmed" mt="xl" maw={500}>
                {t("home.hero.description")}
              </Text>

              <Group mt={30}>
                <Button
                  component={Link}
                  href="/portofolio"
                  size="lg"
                  color="blue"
                >
                  {t("home.hero.button1")}
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  size="lg"
                  variant="outline"
                >
                  {t("home.hero.button2")}
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src={imageAssetPath.avatar}
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
              {t("home.services.title")}
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
              {t("home.services.description")}
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
              {t("home.services.button")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Recent Projects Preview */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h1" fw={700} c="white">
              {t("home.projects.title")}
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
              {t("home.projects.description")}
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
            {recentProjects.map((item, i) => (
              <Box
                key={i}
                className="project-container"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: theme.radius.md,
                  height: 320,
                }}
              >
                <Image
                  src={imageAssetPath.project_image1}
                  alt={`Project ${item}`}
                  height={320}
                  style={{ objectFit: "cover" }}
                />
                <Box className="project-overlay" />
                <Box className="project-info">
                  <Text fw={700} size="xl" c="white">
                    {item.title}
                  </Text>
                  {/* <Text fw={700} size="xl" c="white">
                    Project {item.title} Title
                  </Text> */}
                  {/* <Text c="gray.3" mb="md">
                    {t("home.projects.category")}
                  </Text> */}

                  <Button
                    target="_blank"
                    variant="outline"
                    color="white"
                    component={Link}
                    href={item.link}
                  >
                    {t("home.projects.viewDetails")}
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
              {t("home.projects.buttonViewAll")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h1" fw={700} c="white">
              {t("home.testimonials.title")}
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
              {t("home.testimonials.description")}
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {testimonials.map((testimonial, index) => (
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
                    src={imageAssetPath.dummy_user}
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
            {t("home.cta.title")}
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            {t("home.cta.description")}
          </Text>
          <Group justify="center" mt={40}>
            <Button component={Link} href="/contact" size="lg" color="blue">
              {t("home.cta.button1")}
            </Button>
            <Button
              component={Link}
              href="/pricing"
              size="lg"
              variant="outline"
            >
              {t("home.cta.button2")}
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
