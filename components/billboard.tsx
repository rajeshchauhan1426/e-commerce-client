import { Billboard as BillboardTypes } from "@/types";
import React from "react";

interface BillboardProps {
    data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-8 w-full h-full rounded-xl overflow-hidden">
            <div 
                className="rounded-xl w-full h-full relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${data?.imageUrl})` }}
            >

                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8 bg-black/30">
                    <h1 className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data?.label || "Default Label"}
                    </h1>
                </div>  
                <div className="h-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;
