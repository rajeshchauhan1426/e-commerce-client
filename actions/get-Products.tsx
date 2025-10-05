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

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    // Map each product to include an imageUrl extracted from product.images
    const formattedData = data.map((product: any) => ({
      ...product,
      imageUrl: product.images?.[0]?.url || "/placeholder.png",
    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default getProducts;
