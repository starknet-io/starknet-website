import { playlist } from "@ui/VideoPlayer/constants";
import { redirect } from "next/navigation";

export default function Page({ params }: LocaleProps) {
  const { locale } = params;
  redirect(`/${locale}/video/${playlist[0].id}`);
}
