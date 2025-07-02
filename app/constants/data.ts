import { Code2, Gauge, Laptop, Search } from "lucide-react";
import { Project, Service, TeamMember, PricingPlan } from "@/app/types";

export const projects: Project[] = [
  {
    title: "Fast&Fab",
    description:
      "A platform to ship clothes instantly, like Blinkit and Swiggy, for fashion delivery.",
    link: "https://fastandfab.in/",
    category: "Fashion Delivery",
  },
  {
    title: "Beyond Dream",
    description:
      "We help you find the best coaching classes and activities near you.",
    link: "https://www.beyonddream.in/",
    category: "Education",
  },

  {
    title: "Sibling Space",
    description:
      "Sibling is a mental health support platform fostering community, connection, and shared experiences to empower individuals on their wellness journey.",
    link: "https://www.sibling.space/",
    category: "Mental Health",
  },
  {
    title: "LetsGrowEsports",
    description: "A blogging for latest news in the esports industry",
    link: "https://letsgrowesports.vercel.app/",
    category: "Esports",
  },
];

export const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "We build tailored web solutions that perfectly align with your business needs and goals, using cutting-edge technologies.",
    icon: Code2,
  },
  {
    title: "Responsive Design",
    description:
      "Our designs adapt seamlessly to all devices, ensuring a consistent and engaging user experience across platforms.",
    icon: Laptop,
  },
  {
    title: "Performance Optimization",
    description:
      "We enhance your web applications for peak performance, ensuring fast load times and a smooth user experience.",
    icon: Gauge,
  },
  {
    title: "SEO & Analytics",
    description:
      "Improve your online visibility and track your success with our comprehensive SEO and analytics services.",
    icon: Search,
  },
];

export const team: TeamMember[] = [
  {
    name: "Mohammad Harish",
    role: "Founder InfiniteStudiosX |  Ex crackeddevs",
    achievements: ["Building InfiniteStudiosX", "Based in Kanpur, India"],
    image: "/harish.png",
    connect: "https://x.com/Harish_52",
  },

  {
    name: "Manan Arora",
    role: "Co-Founder InfiniteStudiosX",
    achievements: ["Building InfiniteStudiosX", "Based in India"],
    image: "/manan.jpg",
    connect: "https://x.com/Manancode",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    priceDevOnly: "$1,999",
    priceDesignDev: "$2,499",
    period: "one-time",
    description:
      "Perfect for small businesses looking to establish their digital presence",
    featuresDevOnly: [
      "Frontend Development",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Forms",
      "3 Revisions",
      "30 Days Support",
    ],
    featuresDesignDev: [
      "Custom Website Design",
      "Frontend Development",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Forms",
      "3 Revisions",
      "30 Days Support",
    ],
    category: "Basic Package",
    popular: false,
  },
  {
    name: "Professional",
    priceDevOnly: "$3,999",
    priceDesignDev: "$4,999",
    period: "one-time",
    description:
      "Ideal for growing businesses that need advanced functionality",
    featuresDevOnly: [
      "Everything in Starter",
      "Advanced Animations",
      "CMS Integration",
      "E-commerce Ready",
      "Analytics Setup",
      "Unlimited Revisions",
      "90 Days Support",
      "Performance Optimization",
    ],
    featuresDesignDev: [
      "Everything in Starter",
      "Advanced Animations",
      "Custom UI/UX Design",
      "CMS Integration",
      "E-commerce Ready",
      "Analytics Setup",
      "Unlimited Revisions",
      "90 Days Support",
      "Performance Optimization",
    ],
    category: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    priceDevOnly: "Custom",
    priceDesignDev: "Custom",
    period: "quote",
    description:
      "For large-scale projects requiring custom solutions and ongoing support",
    featuresDevOnly: [
      "Everything in Professional",
      "Custom Backend Development",
      "Third-party Integrations",
      "Advanced Security",
      "Multi-language Support",
      "Dedicated Project Manager",
      "Priority Support",
      "6 Months Maintenance",
    ],
    featuresDesignDev: [
      "Everything in Professional",
      "Custom Backend Development",
      "Advanced Design System",
      "Third-party Integrations",
      "Advanced Security",
      "Multi-language Support",
      "Dedicated Project Manager",
      "Priority Support",
      "6 Months Maintenance",
    ],
    category: "Premium Package",
    popular: false,
  },
];
