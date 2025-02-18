import React from "react";  
import Container from "./ui/container";  
import Link from "next/link";  
import MainNav from "./main-nav";

function Navbar() {  
  return (  
    <div className="border-b">  
      <Container>  
        <div className="relative   px-4 sm:px-4 lg:px-8 flex h-16 items-center -ml-80 ">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">  
            <p className="font-bold text-xl">STORE</p>  
          </Link>  
          <MainNav data={[]}/>
        </div>  
      </Container>  
    </div>  
  );  
}  

export default Navbar;