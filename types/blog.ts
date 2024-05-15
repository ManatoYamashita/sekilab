// types/blog.ts

import type { MicroCMSImage } from "microcms-js-sdk";

export interface Blog {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    width?: number;
    height?: number;
  };
  content: string;
  eyecatch: {
    url: string;
    width?: number;
    height?: number;
  };
  publishedAt?: string;
  createdAt?: string;
}