import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Justin Tang',
    // Drop your photo in public/images/ (any .jpg, .png, .webp) — auto-detected.
    photoBackEmoji: '🤖',
    title: {
      en: 'Computer Science Student',
    },
    subtitle: {
      en: '2nd-Year Undergraduate @ UC Irvine',
    },
    location: 'San Jose, CA',
  },

  // ===== SEO =====
  seo: {
    title: 'Justin Tang — Computer Science Student',
    description: 'Resume of Justin Tang, Computer Science student at UC Irvine focused on robotics and machine learning.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en'],
    labels: {
      en: 'EN',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'j-ctang', href: 'https://github.com/j-ctang' },
    { type: 'email', label: 'jstn.c.tang@gmail.com' },
    { type: 'location', label: 'San Jose, CA' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Programming Languages' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'C++' },
      ],
    },
    {
      title: { en: 'ML & Robotics' },
      type: 'badges',
      items: [
        { name: 'PyTorch' },
        { name: 'Hugging Face' },
        { name: 'LeRobot' },
        { name: 'ManiSkill' },
      ],
    },
    {
      title: { en: 'Systems' },
      type: 'badges',
      items: [
        { name: 'Linux' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'makermods',
      company: { en: 'MakerMods' },
      role: { en: 'Software Engineer Intern' },
      type: { en: 'Internship' },
      period: { en: 'Jul 2026 - Sep 2026' },
      description: {
        en: 'Built the web dashboard layer for a robot learning platform, turning LeRobot CLI workflows into a no-code interface for recording, training, and evaluating imitation-learning policies across multiple robot arms.',
      },
      techs: ['Python', 'React', 'TypeScript', 'PyTorch', 'Hugging Face', 'LeRobot'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Robotics/AI startup (~8-person engineering team, 200+ member community) building a LeRobot-based platform for recording demonstrations, training imitation-learning policies, and deploying them across three supported robot arms (SO-101, MakerArm, Metal Arm) of varying sizes.',
        },
        tasks: {
          en: [
            'Wired core LeRobot CLI workflows (calibration, teleoperation/recording, dataset merge/upload, training/deployment) into a no-code web dashboard',
            'Shipped a Hugging Face Hub-streaming dataset viewer, removing the need to download entire datasets locally just to preview them',
            'Added DAgger-based coaching, letting users take over and correct a trained policy mid-rollout, feeding corrections back into the training data',
            'Implemented hardware episode replay, letting users replay recorded trajectories on the physical arm and evaluate how sim-trained policies transfer to real-world motion',
            'Fixed a dataset-list staleness bug so newly recorded or coached datasets appeared immediately without a manual reload',
            'Added per-episode task naming for datasets where every episode is a distinct task/instruction',
            'Added multi-checkpoint model publishing to the Hugging Face Hub',
            'Built a live 3D URDF visualization of the robot arm during teleoperation, replacing a plain numeric joint readout',
            'Added cross-arm safety gating to prevent applying a policy or config across incompatible robot arms as the platform grew to support three differently-sized arms',
            'Built a local training queue to schedule multiple training runs without GPU/resource collisions',
          ],
        },
        env: {
          en: 'Python / React / TypeScript / PyTorch / Hugging Face Hub / LeRobot / Git',
        },
      },
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'University of California, Irvine' },
      degree: { en: 'Bachelor of Science in Computer Science' },
      period: 'Fall 2025 - Spring 2029 (Expected)',
    },
  ],

  // ===== THEME =====
  theme: {
    preset: 'warm',
    defaultMode: 'dark',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT' },
      skills: { en: 'SKILLS' },
      experience: { en: 'PROFESSIONAL EXPERIENCE' },
      education: { en: 'EDUCATION' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:' },
      moreTasks: { en: 'more tasks...' },
      techEnv: { en: 'Tech environment:' },
      technologies: { en: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details' },
      switchTheme: { en: 'Toggle dark mode' },
      downloadPdf: { en: 'Download PDF' },
    },
  },
}
