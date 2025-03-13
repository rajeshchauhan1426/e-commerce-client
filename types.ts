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