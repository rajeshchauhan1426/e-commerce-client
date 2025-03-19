import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    // Construct the query URL
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
      },
    });

    console.log("Fetching Products from:", url); // ✅ Debugging log

    // Fetch data from API
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }

    const data = await res.json();

    // ✅ Ensure data is an array
    if (!Array.isArray(data)) {
      throw new Error("Invalid products data: Expected an array");
    }

    // ✅ Ensure `images` exist and extract the first image URL safely
    const formattedData = data.map((product) => ({
      ...product,
      imageUrl: product.images?.[0]?.url || "/placeholder.png", // Default fallback image
    }));

    console.log("Formatted Products Data:", JSON.stringify(formattedData, null, 2)); // Log after transformation

    return formattedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts;
