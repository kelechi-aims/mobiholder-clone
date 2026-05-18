import Footer from "../../_components/_public/Footer";
import Navbar from "../../_components/_public/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="z-999 absolute w-full">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
}
