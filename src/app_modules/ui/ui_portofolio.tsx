/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Tabs,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Portfolio_projects } from "../components/portofolio/list_porject";

export default function PortfolioPage() {
  const theme = useMantineTheme();

  return (
    <Box>
      {/* Header Section */}
      <Box py={60} className="hero-background">
        <Box className="bg-grid-pattern" />

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Title order={1} size="h1" fw={800} c="white" ta="center">
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
          <Text size="lg" c="dimmed" maw={800} mx="auto" mt="xl" ta="center">
            {` Explore my latest projects and see how I've helped clients achieve
            their digital goals through creative solutions and technical
            expertise.`}
          </Text>
        </Container>
      </Box>

      {/* Portfolio Projects */}
      <Box py={60} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Tabs defaultValue="all" color="blue">
            <Tabs.List grow justify="center" mb={40}>
              <Tabs.Tab value="all">All Projects</Tabs.Tab>
              <Tabs.Tab value="web">Web Development</Tabs.Tab>
              <Tabs.Tab value="mobile">Mobile Apps</Tabs.Tab>
              <Tabs.Tab value="design">UI/UX Design</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="all">
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
                {Portfolio_projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>

            <Tabs.Panel value="web">
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
                {Portfolio_projects.filter(
                  (project) => project.category === "web"
                ).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>

            <Tabs.Panel value="mobile">
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
                {Portfolio_projects.filter(
                  (project) => project.category === "mobile"
                ).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>

            <Tabs.Panel value="design">
              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
                {Portfolio_projects.filter(
                  (project) => project.category === "design"
                ).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>
          </Tabs>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 1, md: 1, lg: 2 }} spacing={30}>
            <div>
              <Title order={2} size="h2" fw={700} c="white">
                My Development Process
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />
              <Text size="lg" c="gray.3" mt="xl">
                I follow a structured approach to ensure every project is
                delivered on time, within budget, and exceeds expectations. My
                process is designed to be collaborative, transparent, and
                efficient.
              </Text>
              <Button
                component={Link}
                href="/contact"
                size="lg"
                color="blue"
                mt={30}
              >
                Start a Project
              </Button>
            </div>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "Understanding your business, goals, target audience, and project requirements through in-depth consultation.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "Creating a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution.",
                },
                {
                  number: "03",
                  title: "Design",
                  description:
                    "Developing wireframes and visual designs that align with your brand and provide an optimal user experience.",
                },
                {
                  number: "04",
                  title: "Development",
                  description:
                    "Building your project using the latest technologies and best practices for performance and security.",
                },
                {
                  number: "05",
                  title: "Testing",
                  description:
                    "Rigorous testing across devices and browsers to ensure functionality, usability, and accessibility.",
                },
                {
                  number: "06",
                  title: "Launch & Support",
                  description:
                    "Deploying your project and providing ongoing support and maintenance to ensure continued success.",
                },
              ].map((step, index) => (
                <Box
                  key={index}
                  p="lg"
                  bg={theme.colors.dark[6]}
                  className="process-step"
                  style={{ borderRadius: theme.radius.md }}
                >
                  <Text size="xl" fw={900} c="blue" mb="xs">
                    {step.number}
                  </Text>
                  <Text fw={700} size="lg" mb="xs" c="white">
                    {step.title}
                  </Text>
                  <Text c="dimmed">{step.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="md" ta="center">
          <Title order={2} size="h2" fw={800} c="white">
            Have a Project in Mind?
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            {` Let's discuss how I can help bring your ideas to life with a custom
            solution tailored to your needs.`}
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

function ProjectCard({ project }: { project: any }) {
  const theme = useMantineTheme();

  return (
    <Box
      className="project-card"
      style={{
        borderRadius: theme.radius.md,
        overflow: "hidden",
        backgroundColor: theme.colors.dark[7],
      }}
    >
      <Box style={{ position: "relative", overflow: "hidden", height: 200 }}>
        <Image
          src={project.image}
          alt={project.title}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box p="lg">
        <Group mb="xs">
          {project.tags.map((tag: string, index: number) => (
            <Badge key={index} color="blue" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
        <Text fw={700} size="lg" mb="xs" c="white">
          {project.title}
        </Text>
        <Text c="dimmed" mb="md" lineClamp={3}>
          {project.description}
        </Text>
        <Button
          component={Link}
          href={`/portfolio/project-${project.id}`}
          variant="light"
          color="blue"
          rightSection={<IconExternalLink size={16} />}
        >
          View Project
        </Button>
      </Box>
    </Box>
  );
}
