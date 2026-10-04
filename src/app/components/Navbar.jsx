'use client'

import { useEffect } from "react";
import Image from "next/image";

import Logo from "@/assets/palo-bangla.svg"

const Navbar = () => {
    
    return (
        <div className="my-6">
            <div>
                <div>
                <Image src={Logo} width={250} height={0} alt="prothom-alo-logo" ></Image>
            </div>
            </div>



            {/* second nav  */}

            <div>
                
            </div>
        </div>
    );
};

export default Navbar;