import { Product } from "@/types"  
import React from "react";  
import NoResults from "./ui/no-result";  

interface ProductsListProps {  
    title: string;  
    items: Product[];  
}  

const ProductList: React.FC<ProductsListProps> = ({  
    title,  
    items  
}) => {  
    return (  
        <div className="flex flex-col items-center justify-center h-full"> {/* Adjusted to flexbox */}  
            <h3 className="font-bold text-3xl">{title}</h3>  
            {items.length === 0 && (  
                <div className="flex-grow flex items-center justify-center"> {/* Ensure this fills available space */}  
                    <NoResults />  
                </div>  
            )}  
        </div>  
    )  
}  

export default ProductList;  