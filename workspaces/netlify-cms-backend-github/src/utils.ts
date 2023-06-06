export const CMS_BRANCH_PREFIX =
  import.meta.env.VITE_GIT_BRANCH_NAME === "production"
    ? "cms"
    : import.meta.env.VITE_GIT_BRANCH_NAME.match(/((?:^|.*-)cms)\//)?.[1] ?? `${import.meta.env.VITE_GIT_BRANCH_NAME }-cms`;

export function contentKeyFromBranch(branch: string) {
  return branch.slice(`${CMS_BRANCH_PREFIX}/`.length);
}

export function branchFromContentKey(contentKey: string) {
  return `${CMS_BRANCH_PREFIX}/${contentKey}`;
}
