export default function getPublicUrl() {
  const PUBLIC_URL =
    process.env.VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
      ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "dev"
        ? `https://starknet-website-dev.vercel.app`
        : process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === "production"
        ? `https://www.starknet.io`
        : `https://${process.env.VERCEL_URL}`
      : "";

  return PUBLIC_URL;
}
