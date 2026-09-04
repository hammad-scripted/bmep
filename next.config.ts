import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? '/bmep')
  : '';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  ...(isGitHubPages
    ? {
      output: 'export',
      trailingSlash: true,
      basePath,
      assetPrefix: basePath,
      images: { unoptimized: true },
    }
    : {}),
};

export default nextConfig;
