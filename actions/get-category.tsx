import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    try {
      const url = `${URL}/${id}`;
      console.log("Fetching category from:", url);
  
      const res = await fetch(url);
  
      if (!res.ok) {
        console.error(`Response not OK: ${res.status}`);
        throw new Error(`Failed to fetch category: ${res.statusText}`);
      }
  
      const data = await res.json();
      console.log("Fetched category data:", data);
  
      return data;
    } catch (error) {
      console.error("Error fetching category:", error);
      throw error;
    }
  };
export default getCategory