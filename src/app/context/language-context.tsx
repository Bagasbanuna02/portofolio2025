"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Define available languages
export type Language = "en" | "id";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Home",
  "nav.portfolio": "Portfolio",
  "nav.about": "About Me",
  "nav.pricing": "Price List",
  "nav.contact": "Contact",

  // Home page - Hero Section
  "home.hero.title1": "Transforming Ideas into",
  "home.hero.title2": "Digital Experiences",
  "home.hero.description":
    "I'm a passionate web developer specializing in creating elegant, functional websites and applications that help businesses grow and succeed in the digital world.",
  "home.hero.button1": "View My Work",
  "home.hero.button2": "Get In Touch",

  // Home page - Services Section
  "home.services.title": "My Services",
  "home.services.description":
    "I offer a comprehensive range of web development and design services to help you establish a strong online presence.",
  "home.services.button": "View Pricing",

  // Home page - Services Items
  "home.services.item1.title": "Modern Web Development",
  "home.services.item1.description":
    "Building responsive, fast, and user-friendly websites using the latest technologies.",
  "home.services.item2.title": "Mobile-First Approach",
  "home.services.item2.description":
    "Ensuring your website looks and works perfectly on all devices, from phones to desktops.",
  "home.services.item3.title": "UI/UX Design",
  "home.services.item3.description":
    "Creating intuitive and beautiful interfaces that enhance user experience.",
  "home.services.item4.title": "SEO Optimization",
  "home.services.item4.description":
    "Implementing best practices to improve your visibility in search engines.",
  "home.services.item5.title": "Clean Code",
  "home.services.item5.description":
    "Writing maintainable, well-documented code that's easy to extend and update.",
  "home.services.item6.title": "Performance Optimization",
  "home.services.item6.description":
    "Ensuring your website loads quickly and runs smoothly for all users.",

  // Home page - Projects Section
  "home.projects.title": "Recent Projects",
  "home.projects.description":
    "Take a look at some of my latest work. Each project represents a unique challenge and solution.",
  "home.projects.button": "View All Projects",
  "home.projects.viewDetails": "View Details",
  "home.projects.category": "Web Design / Development",
  "home.projects.buttonViewAll": "View All Projects",

  // Home page - Testimonials Section
  "home.testimonials.title": "Client Testimonials",
  "home.testimonials.description":
    "Here's what my clients have to say about working with me.",

  // Home page - Testimonial Items
  "home.testimonials.client1.name": "Sarah Johnson",
  "home.testimonials.client1.position": "CEO, TechStart",
  "home.testimonials.client1.quote":
    "I gave Banuna Studio a chance to help me design and develop a website for my company. They were very enthusiastic and helped me create a simple and functional design. I am very satisfied with the results.",

  "home.testimonials.client2.name": "Michael Chen",
  "home.testimonials.client2.position": "Marketing Director, GrowthLabs",
  "home.testimonials.client2.quote":
    "I was impressed by the attention to detail and the ability to translate our vision into a beautiful, functional website. The process was smooth and the results speak for themselves.",

  "home.testimonials.client3.name": "Emily Rodriguez",
  "home.testimonials.client3.position": "Founder, DesignHub",
  "home.testimonials.client3.quote":
    "As a design professional, I have high standards for web development. This developer not only met those standards but raised the bar with their technical expertise and creative solutions.",

  "home.testimonials.client4.name": "David Kim",
  "home.testimonials.client4.position": "Product Manager, InnovateCorp",
  "home.testimonials.client4.quote":
    "The developer's ability to understand our complex requirements and deliver a user-friendly solution was remarkable. They were responsive, professional, and a pleasure to work with.",

  // Home page - CTA Section
  "home.cta.title": "Ready to Start Your Project?",
  "home.cta.description":
    "Let's work together to create a website that helps your business grow and succeed in the digital world.",
  "home.cta.button1": "Get in Touch",
  "home.cta.button2": "View Pricing",

  // Portfolio page
  "portfolio.title": "My Portfolio",
  "portfolio.description":
    "Explore my latest projects and see how I've helped clients achieve their digital goals through creative solutions and technical expertise.",
  "portfolio.tabs.all": "All Projects",
  "portfolio.tabs.web": "Web Development",
  "portfolio.tabs.mobile": "Mobile Apps",
  "portfolio.tabs.design": "UI/UX Design",
  "portfolio.process.title": "My Development Process",
  "portfolio.process.description":
    "I follow a structured approach to ensure every project is delivered on time, within budget, and exceeds expectations. My process is designed to be collaborative, transparent, and efficient.",
  "portfolio.process.button": "Start a Project",
  "portfolio.cta.title": "Have a Project in Mind?",
  "portfolio.cta.description":
    "Let's discuss how I can help bring your ideas to life with a custom solution tailored to your needs.",

  // About page
  "about.title": "About Me",
  "about.description":
    "Learn more about my background, skills, and approach to web development and design.",
  "about.who.title": "Who I Am",
  "about.skills.title": "My Skills",
  "about.skills.description":
    "I've developed a diverse set of skills that allow me to tackle projects of any size and complexity. Here's a breakdown of my technical expertise:",
  "about.technologies.title": "Technologies I Use",
  "about.technologies.description":
    "I stay up-to-date with the latest technologies and tools to ensure I'm delivering modern, efficient solutions for my clients.",
  "about.experience.title": "My Experience",
  "about.experience.description":
    "My professional journey has equipped me with the skills and experience to tackle complex web development challenges.",
  "about.education.title": "Education",
  "about.certifications.title": "Certifications",
  "about.cta.title": "Let's Work Together",
  "about.cta.description":
    "Now that you know more about me, I'd love to hear about your project and how I can help bring your vision to life.",

  // Pricing page
  "pricing.title": "Pricing Plans",
  "pricing.description":
    "Transparent pricing options designed to fit your needs and budget. Choose the plan that works best for your project.",
  "pricing.services.title": "Additional Services",
  "pricing.services.description":
    "Beyond the standard packages, I offer specialized services to meet your specific needs.",
  "pricing.faq.title": "Frequently Asked Questions",
  "pricing.faq.description":
    "Answers to common questions about my services, process, and pricing.",
  "pricing.process.title": "My Working Process",
  "pricing.process.description":
    "I follow a structured approach to ensure your project is delivered on time, within budget, and exceeds your expectations. Here's how we'll work together:",
  "pricing.cta.title": "Ready to Get Started?",
  "pricing.cta.description":
    "Contact me today to discuss your project and find the right solution for your needs and budget.",

  // Contact page
  "contact.title": "Get In Touch",
  "contact.description":
    "Have a project in mind or want to learn more about my services? I'd love to hear from you!",
  "contact.info.title": "Contact Information",
  "contact.form.title": "Send Me a Message",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.subject": "Subject",
  "contact.form.phone": "Phone",
  "contact.form.message": "Message",
  "contact.form.button": "Send Message",
  "contact.connect.title": "Connect With Me",
  "contact.faq.title": "Frequently Asked Questions",
  "contact.faq.description":
    "Answers to common questions about working with me.",
  "contact.cta.title": "Ready to Start Your Project?",
  "contact.cta.description":
    "Let's work together to create a website that helps your business grow and succeed in the digital world.",

  // Language switcher
  "language.en": "English",
  "language.id": "Indonesian",
  "language.switch": "Switch Language",
};

// Indonesian translations
const idTranslations: Record<string, string> = {
  // Navigation
  "nav.home": "Beranda",
  "nav.portfolio": "Portofolio",
  "nav.about": "Tentang Saya",
  "nav.pricing": "Daftar Harga",
  "nav.contact": "Kontak",

  // Home page - Hero Section
  "home.hero.title1": "Mengubah Ide Menjadi",
  "home.hero.title2": "Pengalaman Digital",
  "home.hero.description":
    "Saya adalah pengembang web yang bersemangat dalam menciptakan situs web dan aplikasi yang elegan, fungsional yang membantu bisnis tumbuh dan sukses di dunia digital.",
  "home.hero.button1": "Lihat Karya Saya",
  "home.hero.button2": "Hubungi Saya",

  // Home page - Services Section
  "home.services.title": "Layanan Saya",
  "home.services.description":
    "Saya menawarkan berbagai layanan pengembangan dan desain web untuk membantu Anda membangun kehadiran online yang kuat.",
  "home.services.button": "Lihat Harga",

  // Home page - Services Items
  "home.services.item1.title": "Pengembangan Web Modern",
  "home.services.item1.description":
    "Membangun situs web yang responsif, cepat, dan ramah pengguna menggunakan teknologi terbaru.",
  "home.services.item2.title": "Pendekatan Mobile-First",
  "home.services.item2.description":
    "Memastikan situs web Anda terlihat dan berfungsi dengan sempurna di semua perangkat, dari ponsel hingga desktop.",
  "home.services.item3.title": "Desain UI/UX",
  "home.services.item3.description":
    "Menciptakan antarmuka yang intuitif dan indah yang meningkatkan pengalaman pengguna.",
  "home.services.item4.title": "Optimasi SEO",
  "home.services.item4.description":
    "Menerapkan praktik terbaik untuk meningkatkan visibilitas Anda di mesin pencari.",
  "home.services.item5.title": "Kode Bersih",
  "home.services.item5.description":
    "Menulis kode yang mudah dipelihara, terdokumentasi dengan baik, dan mudah dikembangkan dan diperbarui.",
  "home.services.item6.title": "Optimasi Kinerja",
  "home.services.item6.description":
    "Memastikan situs web Anda dimuat dengan cepat dan berjalan lancar untuk semua pengguna.",

  // Home page - Projects Section
  "home.projects.title": "Proyek Terbaru",
  "home.projects.description":
    "Lihat beberapa karya terbaru saya. Setiap proyek mewakili tantangan dan solusi yang unik.",
  "home.projects.button": "Lihat Semua Proyek",
  "home.projects.viewDetails": "Lihat Detail",
  "home.projects.category": "Desain Web / Pengembangan",
  "home.projects.buttonViewAll": "Lihat Semua Proyek",

  // Home page - Testimonials Section
  "home.testimonials.title": "Testimoni Klien",
  "home.testimonials.description":
    "Berikut adalah apa yang klien saya katakan tentang bekerja dengan saya.",

  // Home page - Testimonial Items
  "home.testimonials.client1.name": "Sarah Johnson",
  "home.testimonials.client1.position": "CEO, TechStart",
  "home.testimonials.client1.quote":
    "Saya memberi Banuna Studio kesempatan untuk membantu saya mendesain dan mengembangkan situs web untuk perusahaan saya. Ia sangat antusias dan membantu saya membuat desain yang sederhana dan fungsional. Saya sangat puas dengan hasilnya.",

  "home.testimonials.client2.name": "Michael Chen",
  "home.testimonials.client2.position": "Direktur Pemasaran, GrowthLabs",
  "home.testimonials.client2.quote":
    "Saya terkesan dengan perhatian terhadap detail dan kemampuan untuk menerjemahkan visi kami menjadi situs web yang indah dan fungsional. Prosesnya berjalan lancar dan hasilnya berbicara sendiri.",

  "home.testimonials.client3.name": "Emily Rodriguez",
  "home.testimonials.client3.position": "Pendiri, DesignHub",
  "home.testimonials.client3.quote":
    "Sebagai profesional desain, saya memiliki standar tinggi untuk pengembangan web. Pengembang ini tidak hanya memenuhi standar tersebut tetapi juga meningkatkan standar dengan keahlian teknis dan solusi kreatif mereka.",

  "home.testimonials.client4.name": "David Kim",
  "home.testimonials.client4.position": "Manajer Produk, InnovateCorp",
  "home.testimonials.client4.quote":
    "Kemampuan pengembang untuk memahami persyaratan kompleks kami dan memberikan solusi yang ramah pengguna sangat luar biasa. Mereka responsif, profesional, dan menyenangkan untuk bekerja sama.",

  // Home page - CTA Section
  "home.cta.title": "Siap Memulai Proyek Anda?",
  "home.cta.description":
    "Mari bekerja sama untuk membuat situs web yang membantu bisnis Anda tumbuh dan sukses di dunia digital.",
  "home.cta.button1": "Hubungi Saya",
  "home.cta.button2": "Lihat Harga",

  // Portfolio page
  "portfolio.title": "Portofolio Saya",
  "portfolio.description":
    "Jelajahi proyek terbaru saya dan lihat bagaimana saya telah membantu klien mencapai tujuan digital mereka melalui solusi kreatif dan keahlian teknis.",
  "portfolio.tabs.all": "Semua Proyek",
  "portfolio.tabs.web": "Pengembangan Web",
  "portfolio.tabs.mobile": "Aplikasi Mobile",
  "portfolio.tabs.design": "Desain UI/UX",
  "portfolio.process.title": "Proses Pengembangan Saya",
  "portfolio.process.description":
    "Saya mengikuti pendekatan terstruktur untuk memastikan setiap proyek diselesaikan tepat waktu, sesuai anggaran, dan melebihi harapan. Proses saya dirancang untuk kolaboratif, transparan, dan efisien.",
  "portfolio.process.button": "Mulai Proyek",
  "portfolio.cta.title": "Punya Ide Proyek?",
  "portfolio.cta.description":
    "Mari diskusikan bagaimana saya dapat membantu mewujudkan ide Anda dengan solusi khusus yang disesuaikan dengan kebutuhan Anda.",

  // About page
  "about.title": "Tentang Saya",
  "about.description":
    "Pelajari lebih lanjut tentang latar belakang, keterampilan, dan pendekatan saya terhadap pengembangan dan desain web.",
  "about.who.title": "Siapa Saya",
  "about.skills.title": "Keterampilan Saya",
  "about.skills.description":
    "Saya telah mengembangkan berbagai keterampilan yang memungkinkan saya menangani proyek dengan ukuran dan kompleksitas apa pun. Berikut adalah rincian keahlian teknis saya:",
  "about.technologies.title": "Teknologi yang Saya Gunakan",
  "about.technologies.description":
    "Saya selalu mengikuti perkembangan teknologi dan alat terbaru untuk memastikan saya memberikan solusi modern dan efisien untuk klien saya.",
  "about.experience.title": "Pengalaman Saya",
  "about.experience.description":
    "Perjalanan profesional saya telah membekali saya dengan keterampilan dan pengalaman untuk mengatasi tantangan pengembangan web yang kompleks.",
  "about.education.title": "Pendidikan",
  "about.certifications.title": "Sertifikasi",
  "about.cta.title": "Mari Bekerja Sama",
  "about.cta.description":
    "Sekarang Anda tahu lebih banyak tentang saya, saya ingin mendengar tentang proyek Anda dan bagaimana saya dapat membantu mewujudkan visi Anda.",

  // Pricing page
  "pricing.title": "Paket Harga",
  "pricing.description":
    "Pilihan harga transparan yang dirancang untuk memenuhi kebutuhan dan anggaran Anda. Pilih paket yang paling sesuai untuk proyek Anda.",
  "pricing.services.title": "Layanan Tambahan",
  "pricing.services.description":
    "Di luar paket standar, saya menawarkan layanan khusus untuk memenuhi kebutuhan spesifik Anda.",
  "pricing.faq.title": "Pertanyaan yang Sering Diajukan",
  "pricing.faq.description":
    "Jawaban atas pertanyaan umum tentang layanan, proses, dan harga saya.",
  "pricing.process.title": "Proses Kerja Saya",
  "pricing.process.description":
    "Saya mengikuti pendekatan terstruktur untuk memastikan proyek Anda diselesaikan tepat waktu, sesuai anggaran, dan melebihi harapan Anda. Berikut cara kita akan bekerja sama:",
  "pricing.cta.title": "Siap Untuk Memulai?",
  "pricing.cta.description":
    "Hubungi saya hari ini untuk mendiskusikan proyek Anda dan menemukan solusi yang tepat untuk kebutuhan dan anggaran Anda.",

  // Contact page
  "contact.title": "Hubungi Saya",
  "contact.description":
    "Punya proyek dalam pikiran atau ingin tahu lebih banyak tentang layanan saya? Saya ingin mendengar dari Anda!",
  "contact.info.title": "Informasi Kontak",
  "contact.form.title": "Kirim Pesan Kepada Saya",
  "contact.form.name": "Nama",
  "contact.form.email": "Email",
  "contact.form.subject": "Subjek",
  "contact.form.phone": "Telepon",
  "contact.form.message": "Pesan",
  "contact.form.button": "Kirim Pesan",
  "contact.connect.title": "Terhubung Dengan Saya",
  "contact.faq.title": "Pertanyaan yang Sering Diajukan",
  "contact.faq.description":
    "Jawaban atas pertanyaan umum tentang bekerja dengan saya.",
  "contact.cta.title": "Siap Memulai Proyek Anda?",
  "contact.cta.description":
    "Mari bekerja sama untuk membuat situs web yang membantu bisnis Anda tumbuh dan sukses di dunia digital.",

  // Language switcher
  "language.en": "Bahasa Inggris",
  "language.id": "Bahasa Indonesia",
  "language.switch": "Ganti Bahasa",
};

// Create the translations object
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  id: idTranslations,
};

// Create the provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get initial language from localStorage if available, otherwise default to English
  const [language, setLanguage] = useState<Language>("en");

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
