import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Billboard{
    id: string;
    name: string;
    imageUrl: string;
    label: string
}

export interface Category{
    id: string;
    name: string;
    billboard: Billboard;
    label: string
}

export interface Product{
    imageUrl: any;
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
}
export interface Image{
    alt: string;
    src: string | StaticImport;
    id: string;
    url:string;
}

export interface Size{
    id: string;
    name: string;
    value: string;
}

export interface Color{
     id: string;
     name: string;
     value: string;
}