import HeaderAuth from "./_components/Header/Header";
import MainAuth from "./_components/Main/Main";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAuth />
      <MainAuth>{children}</MainAuth>
    </>
  );
}
