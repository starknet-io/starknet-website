export const CMS_BRANCH_PREFIX =
  import.meta.env.VITE_GIT_BRANCH_NAME === "production"
    ? "cms"
    : import.meta.env.VITE_GIT_BRANCH_NAME === "dev"
    ? `devcms`
    : "branchcms";

// export const CMS_BRANCH_PREFIX = "cms";

export function contentKeyFromBranch(branch: string) {
  console.log("incoming branch", branch);
  return branch.slice(`${CMS_BRANCH_PREFIX}/`.length);
}

export function branchFromContentKey(contentKey: string) {
  console.log("incoming contentKey", contentKey);
  const returnval = `${CMS_BRANCH_PREFIX}/${contentKey}`;
  console.log("returnval", returnval);
  return returnval;
}
