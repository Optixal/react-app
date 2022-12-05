function SearchBar({ searchText, setSearchText, inStockOnly, setInStockOnly }) {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-md shadow-md bg-gray-600 pl-2 mr-5"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => setInStockOnly(e.target.checked)}
        />{' '}
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar
