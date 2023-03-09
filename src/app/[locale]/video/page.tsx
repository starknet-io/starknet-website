import { playlist } from "@ui/VideoPlayer/utils";
import { redirect } from "next/navigation";

export default function Page({ params }: LocaleProps) {
  const { locale } = params;
  redirect(`/${locale}/video/${playlist[0].id}`);
}
