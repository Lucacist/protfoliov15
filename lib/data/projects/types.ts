export type ContentBlock =
  | { type: 'text'; value: string }
  | { type: 'image'; value: string; alt: string; maxWidth?: string }
  | { type: 'heading'; value: string }
  | { type: 'list'; value: string[] };

export type Project = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  repoUrl?: string;
  projectUrl?: string;
  siteUrl?: string;
  downloadUrl?: string;
  downloadUrl2?: string;
  downloadLabel?: string;
  downloadLabel2?: string;
  nodownloadLabel?: string;
  content?: ContentBlock[];
};
