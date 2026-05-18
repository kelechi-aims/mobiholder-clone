export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-[url('/images/home-hero.gif')] bg-cover bg-center">
      {children}
    </div>
  );
}
