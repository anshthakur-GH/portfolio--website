import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Layout } from 'lucide-react';

const expertise = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic web applications using modern technologies.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions and predictive models using advanced AI algorithms.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user interfaces with a focus on user experience.",
    icon: <Layout className="w-6 h-6" />,
  },
]; 