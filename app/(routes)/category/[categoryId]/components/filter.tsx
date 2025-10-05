"use client";

import Button from "@/components/ui/button";
import { cn } from "@/libs/libs";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  name: string;
  data: { id: string; name: string }[] | undefined;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ name, data = [], valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(valueKey, id);
    router.push(`?${current.toString()}`);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {(Array.isArray(data) ? data : []).map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              onClick={() => onClick(filter.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-black border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
