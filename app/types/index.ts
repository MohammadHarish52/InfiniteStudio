import React from "react";

export interface Project {
  title: string;
  description: string;
  link: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface TeamMember {
  name: string;
  role: string;
  achievements: string[];
  image: string;
  connect: string;
}

export interface PricingPlan {
  name: string;
  priceDevOnly: string;
  priceDesignDev: string;
  period: string;
  description: string;
  featuresDevOnly: string[];
  featuresDesignDev: string[];
  category: string;
  popular: boolean;
}
