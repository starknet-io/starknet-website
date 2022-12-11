import { useTranslations } from "next-intl";
import { NavbarServer } from "../../../components/NavbarServer";

export default function Index() {
  const t = useTranslations();

  return (
    <>
      <NavbarServer  />

      <p>{t("search")}</p>
    </>
  );
}
