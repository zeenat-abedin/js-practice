import { useMemo, useState } from 'react';
import { useProducts } from './hooks/useProducts';

export default function Products() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== 'all') {
      result = result.filter((product) => product.category === category);
    }

    return result;
  }, [category, products, search]);

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    [products],
  );

  return (
    <>
      <h1>Products Dashboard</h1>
      <h4>{JSON.stringify(products)}</h4>
      <input
        type="text"
        value={search}
        placeholder="Search by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
