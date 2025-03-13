import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
    try {
        const res = await fetch(`${URL}/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch billboard: ${res.statusText}`);
        }

        const data = await res.json();

        // Debugging: Ensure full data is received
        console.log("Fetched Billboard Data:", data);

        if (!data || !data.label) {
            throw new Error("Billboard data is incomplete: Missing label");
        }

        return data;
    } catch (error) {
        console.error("Error fetching billboard:", error);
        throw error;
    }
};

export default getBillboard;
