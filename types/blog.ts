// types/blog.ts

import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
// import { Category } from "./category";

export type Blog = {
  title?: string;
  thumbnail?: MicroCMSImage;
  content?: string;
  eyecatch?: MicroCMSImage;
  // category: (MicroCMSListContent & Category) | null;
};