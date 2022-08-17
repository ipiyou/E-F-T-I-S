import { request, gql } from "graphql-request";

export type ApiType ={
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

export interface ApiInterface {
  items: ApiType[]
}

export const GetItemAll = (keyword: string) => {
  const query = gql`
    {
      items ${keyword && `(name: "${keyword}")`} {
        name
        types
        basePrice
        width
        height
        changeLast48hPercent
        iconLink
        sellFor {
          price
          source
        }
      }
    }
  `;

  return request("https://api.tarkov.dev/graphql", query);
};
