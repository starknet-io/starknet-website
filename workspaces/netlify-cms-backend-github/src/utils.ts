export const CMS_BRANCH_PREFIX =
  import.meta.env.VITE_GIT_BRANCH_NAME === "production"
    ? "cms"
    : `${import.meta.env.VITE_GIT_BRANCH_NAME}-cms`;

export function contentKeyFromBranch(branch: string) {
  return branch.slice(`${CMS_BRANCH_PREFIX}/`.length);
}

export function branchFromContentKey(contentKey: string) {
  return `${CMS_BRANCH_PREFIX}/${contentKey}`;
}

export const API_BASE_URL = import.meta.env.VITE_GIT_BRANCH_NAME === 'production'
  ? "https://starknet-website.vercel.app/api"
  : import.meta.env.VITE_API_BASE_URL ??
    "https://starknet-website.vercel.app/api";
