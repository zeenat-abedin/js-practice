import { useMemo, useState } from 'react';
import { useProducts } from './hooks/useProducts';

export default function Products() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    [products],
  );

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

    switch (sortBy) {
      case 'name.asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name.desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'price.asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price.desc':
        result.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    return result;
  }, [category, products, search, sortBy]);

  return (
    <>
      <h1>Products Dashboard</h1>
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
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort By</option>
        <option value="name.asc">Sort By Name (A-Z)</option>
        <option value="name.desc">Sort By Name (Z-A)</option>
        <option value="price.asc">Sort By Price (Lower to Higher)</option>
        <option value="price.desc">Sort By Price (Higher to Lower)</option>
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
