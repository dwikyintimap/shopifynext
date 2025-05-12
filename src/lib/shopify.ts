const domain = "dwikytesting.myshopify.com";
const storefrontAccessToken = "0109d1080541dbe29921cdecd93a5a47";
const endpoint = `https://${domain}/api/2023-10/graphql.json`;

type Product = {
  id: string;
  title: string;
  handle: string;
  tags: string;
  productType: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
};

export async function getProducts(): Promise<Product[]> {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            tags
            productType
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("Shopify Storefront API errors:", json.errors);
    throw new Error("Failed to fetch products from Shopify");
  }

  return json.data.products.edges.map((edge: { node: Product }) => edge.node);
}