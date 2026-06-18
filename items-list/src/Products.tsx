import { useMemo, useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { useDebounce } from './hooks/useDebounce';

export default function Products() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500)

  const ITEMS_PER_PAGE = 10;

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (debouncedSearch.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
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
  }, [category, debouncedSearch, products, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  if (loading) {
    return <h2>Loading products...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <>
      <h1>Products Dashboard</h1>
      <input
        type="text"
        value={search}
        placeholder="Search by name..."
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
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
          {paginatedProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCurrentPage((curr) => curr - 1)} disabled={currentPage === 1}>Prev</button>
        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((curr) => curr + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}
