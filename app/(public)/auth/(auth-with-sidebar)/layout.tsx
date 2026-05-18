import SignUpSlider from "@/app/_components/SignupSlider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="container max-w-full flex justify-between min-h-screen ">
        <div className="hidden lg:block lg:w-[40%] xl:w-[33%] fixed overflow-hidden">
          <SignUpSlider />
        </div>
        <div className="w-full flex items-center justify-center min-h-screen xl:py-16 lg:w-[60%] lg:ml-[40%]">
          {children}
        </div>
      </div>
    </div>
  );
}
