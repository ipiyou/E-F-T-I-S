import { request, gql } from "graphql-request";

export const GetItemAll = (keyword: string) => {
  const query = gql`
    {
      items(name: "${keyword}") {
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
