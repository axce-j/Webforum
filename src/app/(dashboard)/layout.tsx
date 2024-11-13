"use client";
import React from "react";
import Top from "@/components/store/top";
import SideBar from "@/components/store/sideBar";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-[100%] md:p-1 p-0 bg-[#611f69]">
        <Top/>
        <div className="flex">
        <div className="fixed z-50 bottom-0 left-0 right-0 top-auto md:top-[8dvh] md:left-0 md:bottom-auto"><SideBar/></div>
          <main className="rounded border md:border-[#7c3085] border-[#1d1c1d] w-full h-[96dvh] md:ml-[70px] ml-0 bg-[#1d1c1d] text-white">
              {children}
          </main>
        </div>
    </div>
  );
}

export default DashboardLayout;