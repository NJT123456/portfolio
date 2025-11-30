export interface SocialMedia {
  name: string;
  url: string;
}

export interface NavLink {
  name: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  url: string;
  desc: string;
  img: string;
}

export interface ProjectGroup {
  nameProject: string;
  Project: ProjectItem[];
}

export interface Portfolio {
  email: string;
  socialMedia: SocialMedia[];
  navLinks: NavLink[];
  projects: ProjectGroup[];
}
