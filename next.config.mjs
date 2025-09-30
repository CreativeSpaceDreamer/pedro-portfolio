import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@/mdx-provider",
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
