import { request, gql } from "graphql-request";

export const GetItemAll = () => {
  const query = gql`
    {
      items(name: "paca") {
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

GetItemAll().then((data) => console.log(data.items[0]));
