"use client"

import { Navbar } from "@/components/sidebar";
import { redirect } from "next/dist/client/components/navigation";
import { useEffect, useState } from "react";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Navbar isExpanded={isNavExpanded} setIsExpanded={setIsNavExpanded}/>
            <main className={`w-screen transition-all duration-300 ease-in-out ${isNavExpanded ? 'ml-[12rem]' : 'ml-[4rem]'}`}>
                {children}
            </main>
        </div>
    )
}
 
export default MainLayout;

