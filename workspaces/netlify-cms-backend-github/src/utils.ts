// cms - prod cms
// dms - dev cms
// pms - PR cms (any branch other than dev and prod)

export const CMS_BRANCH_PREFIX =
  import.meta.env.VITE_GIT_BRANCH_NAME === "production"
    ? "cms"
    : import.meta.env.VITE_GIT_BRANCH_NAME === "dev"
    ? `dms`
    : "pms";
