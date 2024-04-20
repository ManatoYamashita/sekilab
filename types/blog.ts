// types/blog.ts

import type { MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
  title: string;
  thumbnail: MicroCMSImage;
  contents: string;
  content: string;
  eyecatch: MicroCMSImage;
  };