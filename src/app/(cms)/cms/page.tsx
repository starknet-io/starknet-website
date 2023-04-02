import { redirect } from "next/navigation";

export default function Index() {
  redirect("/static-cms");

  return <></>;
}
