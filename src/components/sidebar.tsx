import React, { Dispatch, SetStateAction } from 'react';
import { BiHome } from "react-icons/bi";
import { GrDashboard } from 'react-icons/gr';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { MdDashboard, MdMoney } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

interface NavbarProps {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ isExpanded, setIsExpanded }) => {
    return (
        <div 
            className={`fixed left-0 h-[100vh] gap-7 ${isExpanded ? 'w-[12rem]' : 'w-[4rem]'} bg-white transition-all duration-300 ease-in-out py-10 px-2 flex flex-col items-center z-10`}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="flex items-center w-full overflow-hidden hover:cursor-pointer">
                <MdDashboard size={25} className="min-w-[40px]" opacity={0.7}/>
                <span className={`hover:pl-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'} `}>
                    Dashboard
                </span>
            </div>
            <div className="flex items-center w-full overflow-hidden hover:cursor-pointer">
                <RiMoneyDollarCircleFill size={25} className="min-w-[40px]" opacity={0.7}/>
                <span className={`hover:pl-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'} `}>
                    Billing
                </span>
            </div>
            <div className="flex items-center w-full overflow-hidden hover:cursor-pointer">
                <IoMdSettings size={25} className="min-w-[40px]" opacity={0.7}/>
                <span className={`hover:pl-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'} `}>
                    Settings
                </span>
            </div>
            <div className="flex items-center w-full overflow-hidden hover:cursor-pointer">
                <IoIosArrowBack size={25} className="min-w-[40px]" opacity={0.7}/>
                <span className={`hover:pl-2 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'} `}>
                    Logout
                </span>
            </div>
            
        </div>
    )
}