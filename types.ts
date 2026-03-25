import React from 'react';

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Intermediate' | 'Advanced' | 'Mastery';
  description?: string;
  spots?: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  imageUrl?: string; 
}