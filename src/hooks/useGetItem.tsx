import { useEffect, useState } from "react";
import { GetItemAll } from "../apis/Get_Item_All";

interface PropType {
  Search: boolean;
  setSearch: (Search: boolean) => void;
  Text: { searchValue: string };
}

interface ApiType {
  itemes: [
    {
      name: string;
      types: [];
      basePrice: number;
      width: number;
      height: number;
      changeLast48hPercent: number;
      iconLink: string;
      sellFor: [
        { price: number; source: "fence" },
        { price: number; source: "skier" },
        { price: number; source: "peacekeeper" },
        { price: number; source: "ragman" },
        { price: number; source: "fleaMarket" }
      ];
    }
  ];
}

function useGetItem({ Search, setSearch, Text }: PropType) {
  const [slice, setSlice] = useState<ApiType>();
  useEffect(() => {
    if (Search) {
      setSearch(false);
      GetItemAll(Text.searchValue).then((data) => setSlice(data));
    }
  }, [Search]);
  return { slice };
}

export default useGetItem;
