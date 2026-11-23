export const GH = "https://github.com/kashanshah110";
export const WA =
  "https://wa.me/923295782050?text=Hi%20Kashan%2C%20I%20saw%20your%20portfolio.";
export const EMAIL = "syedkashanali623@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/kashan-ali-29815b30a/";

// CV file lives in /public. BASE_URL keeps the link working on subpaths (e.g. GitHub Pages).
export const CV_URL = `${import.meta.env.BASE_URL}Kashan_Ali_CV.pdf`;
export const PHOTO_URL = `${import.meta.env.BASE_URL}photo.jpg`;

export const SKILLS = [
  "React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS",
  "Tailwind", "REST APIs", "JWT Auth", "Git/GitHub", "Framer Motion", "Three.js",
];

export const ROLES = [
  "MERN Stack Developer",
  "React & Node.js Builder",
  "Cloud Computing Enthusiast",
  "IT Student at University of Gujrat",
];

export const PROJECTS = [
  { n: "Fitness First Gym", d: "Cinematic gym website for Fitness First in Koral, Islamabad, with smooth animations and real gym photography.", t: ["React", "Vite", "Framer Motion"], live: "https://fitness-first-gym-gray.vercel.app/" },
  { n: "JK Toolshub", d: "Free online tools site: image compressor, PDF and Word tools, and calculators.", t: ["HTML", "CSS", "JavaScript"], live: "https://jktoolshub.com" },
  { n: "VERDO Store", d: "Animated full-stack clothing store built for a client, with an admin panel.", t: ["Express", "MongoDB Atlas", "JavaScript"], gh: GH },
  { n: "UrbanWear", d: "MERN clothing e-commerce with authentication, product management and an admin panel.", t: ["MongoDB", "Express", "React", "Node.js"], gh: GH },
  { n: "NovaStore", d: "E-commerce store with an Express and MongoDB backend and an admin dashboard.", t: ["Express", "MongoDB", "JavaScript"], gh: GH },
  { n: "Social Media App", d: "MERN social app with user accounts, posts and interactions.", t: ["MongoDB", "Express", "React", "Node.js"], gh: GH },
];
