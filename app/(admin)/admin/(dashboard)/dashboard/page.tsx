import AdminFourthComponent from "@/app/_components/_dashboard/AdminFourthComponent";
import AdminThirdComponent from "@/app/_components/_dashboard/AdminThirdComponent";
import FirstComponent from "@/app/_components/_dashboard/FirstComponent";
import SecondComponent from "@/app/_components/_dashboard/SideMenu/SecondComponent";
import { adminStats } from "@/app/_lib/data1";
import React from "react";

function AdminDashboard() {
  return (
    <div className="w-full">
      <FirstComponent role="admin" />
      <SecondComponent stats={adminStats} />
      <AdminThirdComponent />
      <AdminFourthComponent />
    </div>
  );
}

export default AdminDashboard;
