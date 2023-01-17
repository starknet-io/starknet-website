interface Props {
  readonly children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return <>{children}</>;
}
