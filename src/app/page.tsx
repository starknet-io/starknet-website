import { redirect } from "next/navigation";

export default function Index(): JSX.Element {
  redirect("/en");
}
