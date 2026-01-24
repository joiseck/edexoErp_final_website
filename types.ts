
import React from 'react';

export interface Module {
  id: string;
  title: string;
  // Fix: Added React import to resolve missing namespace
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  content: string;
  image: string;
}
