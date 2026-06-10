// Dashboard in React using the following API:
// API:
// https://fakestoreapi.com/products
// Requirements
// Fetch products from the API and display them in a table or list.
// For each product, display:
// Product Name
// Category
// Price

import { useEffect, useState } from 'react';

// Product Image
// Functionality
// Implement the following features:
// Search
// Search products by product name.
// Filter
// Filter products by category.
// Sort
// Sort products by:
// Name (A–Z / Z–A)
// Price (Low to High / High to Low)
// State Handling
// Manage application state using React Hooks.
// Ensure search, filter, and sorting work together correctly.
// Loading & Error States
// Show a loading state while fetching data.
// Show an error message if the API request fails.
// Bonus (If Time Permits)
// Implement pagination (10 products per page).
// Display:
// Total visible products
// Average price of visible products
// Most expensive visible product
// Guidelines
// Focus on functionality and code quality.
// You may use either Fetch API or Axios.
// Feel free to structure components as you see fit.

interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch data')  
        }
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : '')
      } finally {
        setLoading(false)
      }
    };

    fetchProductsData();
  }, []);

  return { products, loading, error };
};
