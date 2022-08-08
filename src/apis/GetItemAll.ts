import { request, gql } from "graphql-request";

export interface ApiType {
  items: [
    
  ];
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
