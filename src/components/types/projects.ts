export interface tech {
  name: string;
  color: string;
}

export interface project {
  title: string;
  description: string;
  tech: tech[];
  imgSrc: string;
  liveDemo: string;
  repo: string;
}
