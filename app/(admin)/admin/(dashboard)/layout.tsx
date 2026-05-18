import { LargeScreenSideMenu } from "@/app/_components/_dashboard/SideMenu/LargeScreenMenu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0d0d0d] h-screen overflow-hidden">
      <div className="container mx-auto flex py-5 gap-7 h-full min-h-0">
        <div className="hidden xl:block w-[18%] pb-5">
          <div className="h-screen">
            <LargeScreenSideMenu role="admin" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
