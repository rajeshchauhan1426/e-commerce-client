import { Billboard as BillboardTypes } from "@/types";
import React from "react";


interface BillboardProps{
    data: BillboardTypes
};


const Billboard:React.FC<BillboardProps> =({
data

}) => {
return (
    <div className="p-4 sm:p-8 rounded-xl overflow-hidden">
        <div></div>

    </div>
)
}

export default Billboard