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
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    image: Image[];
}
export interface Image{
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