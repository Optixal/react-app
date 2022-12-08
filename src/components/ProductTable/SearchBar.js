function SearchBar({ searchText, onSearchText, inStockOnly, onInStockOnly }) {
  return (
    <form action="">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="input-bordered input w-full"
          // className="rounded-md shadow-md bg-gray-600 pl-2 mr-5"
          value={searchText}
          onChange={e => onSearchText(e.target.value)}
        />
        <label className="label mt-3 cursor-pointer">
          <span className="label-text">Only show products in stock</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={e => onInStockOnly(e.target.checked)}
            className="checkbox-success checkbox"
          />
        </label>
      </div>
    </form>
  )
}

export default SearchBar
