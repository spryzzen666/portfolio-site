export interface Project {
  title: string;
  description: string;
  stack: string[];
  url: string;
  repo: string;
}

export const projects: Project[] = [
  {
    title: 'Task Manager',
    description:
      'Full-stack task manager with user accounts, sessions, and a REST API. Passwords hashed with scrypt, data stored in SQLite.',
    stack: ['React', 'TypeScript', 'Express', 'SQLite'],
    url: 'https://task-manager-u5qh.onrender.com',
    repo: 'https://github.com/spryzzen666/task-manager',
  },
  {
    title: 'FX-TERMINAL 3025',
    description:
      'Currency converter with live exchange rates, 12-hour caching, and a cyberpunk animated canvas background.',
    stack: ['JavaScript', 'Canvas', 'REST API'],
    url: 'https://fx-terminal3025.vercel.app',
    repo: 'https://github.com/spryzzen666/fx-terminal',
  },
  {
    title: 'Innoverse',
    description:
      'Bilingual (RU/KZ) marketing landing page for a programming school with a WhatsApp lead form and SEO.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://innoverse-kz.vercel.app',
    repo: 'https://github.com/spryzzen666/innoverse-kz',
  },
];