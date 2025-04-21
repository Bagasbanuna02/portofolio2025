"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  List,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import Link from "next/link";

export default function PricingPage() {
  const theme = useMantineTheme();

  const pricingPlans = [
    {
      title: "Basic",
      price: "Rp 1,5 JT",
      description: "Perfect for small businesses and personal websites",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Up to 5 Pages", included: true },
        { text: "Contact Form", included: true },
        { text: "Basic SEO Setup", included: true },
        // { text: "Content Management System", included: false },
        // { text: "E-commerce Functionality", included: false },
        { text: "Custom Animations", included: false },
        { text: "Priority Support", included: false },
      ],
      popular: false,
      color: "gray",
    },
    {
      title: "Professional",
      price: "Rp 3 JT",
      description: "Ideal for growing businesses and online stores",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Up to 10 Pages", included: true },
        { text: "Contact Form", included: true },
        { text: "Advanced SEO Setup", included: true },
        // { text: "Content Management System", included: true },
        // { text: "E-commerce Functionality", included: true },
        { text: "Custom Animations", included: true },
        { text: "Priority Support", included: false },
      ],
      popular: true,
      color: "blue",
    },
    {
      title: "Premium",
      price: "Rp 7 JT",
      description: "Comprehensive solution for established businesses",
      features: [
        { text: "Responsive Design", included: true },
        { text: "Unlimited Pages", included: true },
        { text: "Advanced Contact Forms", included: true },
        { text: "Complete SEO Package", included: true },
        // { text: "Content Management System", included: true },
        // { text: "E-commerce Functionality", included: true },
        { text: "Custom Animations", included: true },
        { text: "Priority Support", included: true },
      ],
      popular: false,
      color: "gray",
    },
  ];

  const customServices = [
    {
      title: "Website Redesign",
      price: "From Rp 500.000",
      description:
        "Refresh your existing website with a modern design and improved functionality.",
    },
    {
      title: "Landing Page",
      price: "From Rp 500.000",
      description:
        "High-converting landing page designed to showcase your product or service.",
    },
    {
      title: "Website Maintenance",
      price: "From Rp 150.000",
      description:
        "Regular updates, security patches, backups, and technical support for your website.",
    },
    // {
    //   title: "E-commerce Development",
    //   price: "From $2,500",
    //   description:
    //     "Custom online store with product management, payment processing, and order tracking.",
    // },
    // {
    //   title: "Custom Web Application",
    //   price: "From $5,000",
    //   description:
    //     "Tailored web applications with user authentication, database integration, and custom features.",
    // },

    // {
    //   title: "SEO Optimization",
    //   price: "From $500",
    //   description:
    //     "Comprehensive SEO audit and optimization to improve your search engine rankings.",
    // },
  ];

  return (
    <Box>
      {/* Header Section */}
      <Box py={60} className="hero-background">
        <Box className="bg-grid-pattern" />

        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Title order={1} size="h1" fw={800} c="white" ta="center">
            Pricing Plans
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
            Transparent pricing options designed to fit your needs and budget.
            Choose the plan that works best for your project.
          </Text>
        </Container>
      </Box>

      {/* Pricing Plans */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={"lg"}>
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                padding="xl"
                radius="md"
                withBorder={plan.popular}
                className="pricing-card"
                style={{
                  borderColor: plan.popular
                    ? theme.colors.blue[5]
                    : "transparent",
                  borderWidth: plan.popular ? 2 : 0,
                  backgroundColor: theme.colors.dark[7],
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {plan.popular && (
                  <Box
                    style={{
                      position: "absolute",
                      top: -15,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: theme.colors.blue[5],
                      color: "white",
                      padding: "5px 15px",
                      borderRadius: theme.radius.sm,
                      fontWeight: 600,
                      fontSize: theme.fontSizes.sm,
                    }}
                  >
                    Most Popular
                  </Box>
                )}

                <Text fw={700} size="xl" c="white" ta="center">
                  {plan.title}
                </Text>
                <Text c="dimmed" size="sm" ta="center" mb="lg">
                  {plan.description}
                </Text>

                <Text
                  fw={800}
                  size="3rem"
                  c={plan.popular ? "blue" : "white"}
                  ta="center"
                >
                  {plan.price}
                </Text>
                <Text mt={"md"} c="dimmed" size="sm" ta="center" mb="xl">
                  One-time payment
                </Text>

                <Divider my="lg" />

                <List spacing="md" center mb="xl">
                  {plan.features.map((feature, idx) => (
                    <List.Item
                      key={idx}
                      icon={
                        <ThemeIcon
                          color={feature.included ? "blue" : "gray"}
                          variant={feature.included ? "light" : "subtle"}
                          size={24}
                          radius="xl"
                        >
                          {feature.included ? (
                            <IconCircleCheck size={16} />
                          ) : (
                            <IconCircleX size={16} />
                          )}
                        </ThemeIcon>
                      }
                    >
                      <Text c={feature.included ? "gray.3" : "dimmed"}>
                        {feature.text}
                      </Text>
                    </List.Item>
                  ))}
                </List>

                <Button
                  component={Link}
                  href="/contact"
                  fullWidth
                  color={plan.popular ? "blue" : "gray"}
                  variant={plan.popular ? "filled" : "outline"}
                  size="lg"
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </SimpleGrid>

          <Box ta="center" mt={50}>
            <Text c="dimmed" size="lg">
              Need a custom solution?{" "}
              <Link href="/contact" style={{ color: theme.colors.blue[5] }}>
                Contact me
              </Link>{" "}
              for a personalized quote.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Custom Services */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Box ta="center" mb={50}>
            <Title order={2} size="h2" fw={700} c="white">
              Additional Services
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
              Beyond the standard packages, I offer specialized services to meet
              your specific needs.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={30}>
            {customServices.map((service, index) => (
              <Box
                key={index}
                p="xl"
                bg={theme.colors.dark[6]}
                className="service-card"
                style={{ borderRadius: theme.radius.md }}
              >
                <Text fw={700} size="lg" c="white" mb="xs">
                  {service.title}
                </Text>
                <Text fw={800} size="xl" c="blue" mb="md">
                  {service.price}
                </Text>
                <Text c="dimmed">{service.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
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
              Answers to common questions about my services, process, and
              pricing.
            </Text>
          </Box>

          <Grid gutter={30}>
            {[
              {
                question: "How long does it take to complete a website?",
                answer:
                  "The timeline varies depending on the complexity of the project. A basic website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer:
                  "Yes, I offer website maintenance packages to keep your site secure, up-to-date, and running smoothly. This includes regular updates, security monitoring, backups, and technical support.",
              },
              {
                question: "What is your payment structure?",
                answer:
                  "I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can establish a milestone-based payment schedule.",
              },
              {
                question: "Can you work with my existing brand guidelines?",
                answer:
                "I can work with your existing brand guidelines to ensure your website aligns with your brand identity. If you don't have guidelines, I can help develop a consistent visual style for your website.",
              },
              // {
              //   question: "Do you provide hosting services?",
              //   answer:
              //     "While I don't provide hosting directly, I can recommend reliable hosting providers and help set up your website on your chosen platform. I can also manage the hosting setup process for you if needed.",
              // },
              // {
              //   question: "Do you offer rush services for urgent projects?",
              //   answer:
              //     "Yes, I can accommodate rush projects for an additional fee, depending on my current workload and the scope of your project. Please contact me to discuss your timeline and requirements.",
              // },
            ].map((faq, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Box
                  p="xl"
                  bg={theme.colors.dark[6]}
                  className="faq-card"
                  style={{
                    borderRadius: theme.radius.md,
                    height: "100%",
                  }}
                >
                  <Text fw={700} size="lg" c="white" mb="md">
                    {faq.question}
                  </Text>
                  <Text c="dimmed">{faq.answer}</Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={80} bg={theme.colors.dark[7]}>
        <Container size="lg">
          <Grid gutter={"xs"}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Title order={2} size="h2" fw={700} c="white">
                My Working Process
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
                {` I follow a structured approach to ensure your project is
                delivered on time, within budget, and exceeds your expectations.
                Here's how we'll work together:`}
              </Text>
              <Button
                component={Link}
                href="/contact"
                size="lg"
                color="blue"
                mt={30}
              >
                Start Your Project
              </Button>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={20}>
                {[
                  {
                    number: "01",
                    title: "Consultation",
                    description:
                      "We'll discuss your goals, requirements, and vision for your project to ensure we're aligned.",
                  },
                  {
                    number: "02",
                    title: "Proposal",
                    description:
                      "I'll provide a detailed proposal outlining the scope, timeline, and cost of your project.",
                  },
                  {
                    number: "03",
                    title: "Design",
                    description:
                      "Once approved, I'll create wireframes and design mockups for your review and feedback.",
                  },
                  {
                    number: "04",
                    title: "Development",
                    description:
                      "I'll build your website or application using the latest technologies and best practices.",
                  },
                  {
                    number: "05",
                    title: "Testing",
                    description:
                      "Rigorous testing across devices and browsers to ensure functionality and responsiveness.",
                  },
                  {
                    number: "06",
                    title: "Launch",
                    description:
                      "Once approved, your project goes live with ongoing support to ensure everything runs smoothly.",
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
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={80} bg={theme.colors.dark[8]}>
        <Container size="md" ta="center">
          <Title order={2} size="h2" fw={800} c="white">
            Ready to Get Started?
          </Title>
          <Text size="lg" c="dimmed" maw={600} mx="auto" mt="xl">
            Contact me today to discuss your project and find the right solution
            for your needs and budget.
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
