"use client";

import { assetsPath } from "@/lib/assets_path";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  List,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
  IconCheck,
  IconCode,
  IconDatabase,
  IconDeviceMobile,
  IconDownload,
  IconSeo,
} from "@tabler/icons-react";
import Link from "next/link";

export default function AboutPage() {
  const theme = useMantineTheme();

  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "HTML / CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 75 },
    { name: "Mobile Development", level: 70 },
    { name: "DevOps / AWS", level: 65 },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box py={60} className="hero-background">
        <Box className="bg-grid-pattern" />

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Title order={1} size="h1" fw={800} c="white" ta="center">
            About Me
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
            Learn more about my background, skills, and approach to web
            development and design.
          </Text>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="md">
          <SimpleGrid cols={{
            base: 1,
            md: 2,
          }}>
            <Stack justify="center">
              <Image
                src={assetsPath.photo}
                alt="Profile"
                radius="md"
                style={{
                  border: `5px solid ${theme.colors.dark[6]}`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                }}
              />
            </Stack>

            <Box>
              <Title order={2} size="h2" fw={700} c="white">
                Who I Am
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />

              <Text size="lg" c="gray.3">
                {` I'm a passionate web developer with over 5 years of experience
                creating beautiful, functional websites and applications. I
                specialize in front-end development, with expertise in React,
                Next.js, and modern CSS frameworks.`}
              </Text>

              <Text size="lg" c="gray.3" mt="md">
                My journey in web development began when I discovered my passion
                for creating digital experiences that are not only visually
                appealing but also intuitive and user-friendly. I believe that
                great design and solid functionality go hand in hand to create
                exceptional digital products.
              </Text>

              <Text size="lg" c="gray.3" mt="md">
                {` When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and community events.`}
              </Text>

              <List
                spacing="sm"
                size="lg"
                center
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconCheck size={16} />
                  </ThemeIcon>
                }
                mt={30}
              >
                <List.Item>
                  <Text c="gray.3">
                    Dedicated to creating responsive, user-friendly websites
                  </Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.3">
                    Committed to clean, maintainable code and best practices
                  </Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.3">
                    Passionate about continuous learning and improvement
                  </Text>
                </List.Item>
                <List.Item>
                  <Text c="gray.3">
                    Focused on delivering projects that exceed expectations
                  </Text>
                </List.Item>
              </List>

              <Group mt={30}>
                <Button color="blue" leftSection={<IconDownload size={18} />}>
                  Download CV
                </Button>
                <Button component={Link} href="/contact" variant="outline">
                  Contact Me
                </Button>
              </Group>
            </Box>
          </SimpleGrid>

        
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="md">
          <Grid gutter={"lg"}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} size="h2" fw={700} c="white">
                My Skills
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />
              <Text size="lg" c="gray.3" mb={40}>
                {` I've developed a diverse set of skills that allow me to tackle
                projects of any size and complexity. Here's a breakdown of my
                technical expertise:`}
              </Text>

              {skills.map((skill, index) => (
                <Box key={index} mb={20}>
                  <Group justify="space-between" mb={5}>
                    <Text fw={500} c="white">
                      {skill.name}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {skill.level}%
                    </Text>
                  </Group>
                  <Progress
                    value={skill.level}
                    color="blue"
                    size="md"
                    radius="xs"
                  />
                </Box>
              ))}
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} size="h2" fw={700} c="white">
                Technologies I Use
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />
              <Text size="lg" c="gray.3" mb={40}>
                {` I stay up-to-date with the latest technologies and tools to
                ensure I'm delivering modern, efficient solutions for my
                clients.`}
              </Text>

              <SimpleGrid cols={{ base: 2, sm: 3 }} spacing={30}>
                {[
                  { icon: IconBrandReact, title: "React" },
                  { icon: IconBrandJavascript, title: "JavaScript" },
                  { icon: IconBrandTypescript, title: "TypeScript" },
                  { icon: IconCode, title: "HTML/CSS" },
                  { icon: IconDatabase, title: "MongoDB" },
                  { icon: IconBrandGithub, title: "Git" },
                  { icon: IconDeviceMobile, title: "React Native" },
                  { icon: IconBrandFigma, title: "Figma" },
                  { icon: IconSeo, title: "SEO" },
                ].map((tech, index) => (
                  <Box
                    key={index}
                    p="lg"
                    ta="center"
                    bg={theme.colors.dark[6]}
                    className="process-step"
                    style={{ borderRadius: theme.radius.md }}
                  >
                    <ThemeIcon
                      size={50}
                      radius="md"
                      color="blue"
                      mb="md"
                      mx="auto"
                    >
                      <tech.icon size={26} />
                    </ThemeIcon>
                    <Text fw={500} c="white">
                      {tech.title}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h2" fw={700} c="white">
              My Experience
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
              My professional journey has equipped me with the skills and
              experience to tackle complex web development challenges.
            </Text>
          </Box>

          <Timeline active={-1} bulletSize={24} lineWidth={2} color="blue">
            <Timeline.Item
              title="Senior Frontend Developer"
              bullet={<IconBrandReact size={12} />}
            >
              <Text c="dimmed" size="sm">
                TechInnovate Inc. | 2021 - Present
              </Text>
              <Text size="md" mt={4} c="gray.3">
                Lead the development of complex web applications using React and
                Next.js. Collaborate with designers and backend developers to
                implement responsive, accessible, and performant user
                interfaces.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Web Developer"
              bullet={<IconCode size={12} />}
            >
              <Text c="dimmed" size="sm">
                Digital Solutions Agency | 2019 - 2021
              </Text>
              <Text size="md" mt={4} c="gray.3">
                Developed and maintained websites for clients across various
                industries. Implemented responsive designs, integrated content
                management systems, and optimized website performance.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Frontend Developer"
              bullet={<IconBrandJavascript size={12} />}
            >
              <Text c="dimmed" size="sm">
                WebCraft Studio | 2018 - 2019
              </Text>
              <Text size="md" mt={4} c="gray.3">
                Built interactive user interfaces using JavaScript and modern
                frameworks. Collaborated with the design team to implement
                pixel-perfect layouts and animations.
              </Text>
            </Timeline.Item>

            <Timeline.Item
              title="Web Design Intern"
              bullet={<IconBrandFigma size={12} />}
            >
              <Text c="dimmed" size="sm">
                Creative Design Co. | 2017 - 2018
              </Text>
              <Text size="md" mt={4} c="gray.3">
                Assisted in designing and developing websites for small
                businesses. Gained hands-on experience with HTML, CSS, and basic
                JavaScript while learning about user experience design
                principles.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Container>
      </Box>

      {/* Education Section */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Grid gutter={"md"}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} size="h2" fw={700} c="white">
                Education
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />

              <Box
                p="xl"
                mb={20}
                bg={theme.colors.dark[6]}
                className="process-step"
                style={{ borderRadius: theme.radius.md }}
              >
                <Text fw={700} size="lg" c="white">
                  Bachelor of Science in Computer Science
                </Text>
                <Text c="dimmed" mb="md">
                  University of Technology | 2014 - 2018
                </Text>
                <Text c="gray.3">
                  Specialized in web development and user interface design.
                  Completed coursework in algorithms, data structures, database
                  systems, and software engineering principles.
                </Text>
              </Box>

              <Box
                p="xl"
                bg={theme.colors.dark[6]}
                className="process-step"
                style={{ borderRadius: theme.radius.md }}
              >
                <Text fw={700} size="lg" c="white">
                  Web Development Bootcamp
                </Text>
                <Text c="dimmed" mb="md">
                  CodeMasters Academy | 2018
                </Text>
                <Text c="gray.3">
                  Intensive 12-week program focused on modern web development
                  technologies including JavaScript, React, Node.js, and
                  database integration.
                </Text>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} size="h2" fw={700} c="white">
                Certifications
              </Title>
              <Box
                w={60}
                h={4}
                bg="blue"
                mt={10}
                mb={20}
                style={{ borderRadius: 2 }}
              />

              <SimpleGrid cols={1} spacing={20}>
                {[
                  {
                    title: "Advanced React and Redux",
                    issuer: "Frontend Masters",
                    year: "2022",
                    description:
                      "Comprehensive certification covering advanced React patterns, Redux state management, and performance optimization techniques.",
                  },
                  {
                    title: "Full-Stack JavaScript Development",
                    issuer: "Udemy",
                    year: "2021",
                    description:
                      "End-to-end web application development using JavaScript, Node.js, Express, and MongoDB.",
                  },
                  {
                    title: "UI/UX Design Fundamentals",
                    issuer: "Interaction Design Foundation",
                    year: "2020",
                    description:
                      "Principles of user interface design, user experience research, and creating accessible digital products.",
                  },
                  {
                    title: "AWS Certified Developer",
                    issuer: "Amazon Web Services",
                    year: "2019",
                    description:
                      "Cloud infrastructure, serverless architecture, and deploying applications on AWS.",
                  },
                ].map((cert, index) => (
                  <Box
                    key={index}
                    p="xl"
                    bg={theme.colors.dark[6]}
                    className="process-step"
                    style={{ borderRadius: theme.radius.md }}
                  >
                    <Group justify="space-between" mb="xs">
                      <Text fw={700} size="lg" c="white">
                        {cert.title}
                      </Text>
                      <Text c="blue" fw={500}>
                        {cert.year}
                      </Text>
                    </Group>
                    <Text c="dimmed" mb="md">
                      {cert.issuer}
                    </Text>
                    <Text c="gray.3">{cert.description}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="md" ta="center">
          <Title order={2} size="h2" fw={800} c="white">
            {`Let's Work Together`}
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            {`Now that you know more about me, I'd love to hear about your project
            and how I can help bring your vision to life.`}
          </Text>
          <Group justify="center" mt={40}>
            <Button component={Link} href="/contact" size="lg" color="blue">
              Get in Touch
            </Button>
            <Button
              component={Link}
              href="/portofolio"
              size="lg"
              variant="outline"
            >
              View My Work
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
