import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    try {
        const res = await fetch(`${URL}/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch product: ${res.statusText}`);
        }

        const data = await res.json();

        // Debugging: Ensure full data is received
        console.log("Fetched Billboard Data:", data);


        return data;
    } catch (error) {
        console.error("Error fetching billboard:", error);
        throw error;
    }
};

export default getProduct;
