import React from "react";
import dynamic from "next/dynamic";
import { simpleGit } from "simple-git";

export const metadata = {
  title: "Content Manager",
};

const NetlifyCMSPage = dynamic(() => import("./NetlifyCMSPage"), { ssr: false });

export default async function Page() {
  return (
    <NetlifyCMSPage
      backendBranch={
        process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? (await currentBranch())
      }
    />
  );
}

async function currentBranch(): Promise<string> {
  const git = simpleGit();
  const { current } = await git.branch();

  return current;
}
