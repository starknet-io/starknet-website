interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}

export function generateStaticParams() {
  return [];
}
