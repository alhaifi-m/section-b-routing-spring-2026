export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "TypeScript Handbook",
    category: "books",
    price: 29.99,
    description: "A complete guide to TypeScript for JavaScript developers.",
    inStock: true,
  },
  {
    id: "2",
    name: "React Deep Dive",
    category: "books",
    price: 34.99,
    description: "Master React hooks, patterns and performance optimisation.",
    inStock: true,
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    category: "hardware",
    price: 149.0,
    description: "Clicky keys for maximum developer satisfaction.",
    inStock: false,
  },
  {
    id: "4",
    name: "USB-C Hub 7-in-1",
    category: "hardware",
    price: 59.99,
    description: "Power, data, HDMI, and card reader in one device.",
    inStock: true,
  },
  {
    id: "5",
    name: "Next.js Course",
    category: "courses",
    price: 79.0,
    description: "Build full-stack apps with the App Router from scratch.",
    inStock: true,
  },
  {
    id: "6",
    name: "Dark Mode Theme Pack",
    category: "software",
    price: 9.99,
    description: "Gorgeous VS Code themes for late-night coding sessions.",
    inStock: true,
  },
];

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}
