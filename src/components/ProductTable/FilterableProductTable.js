import { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable({ products }) {
  const [searchText, setSearchText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        searchText={searchText}
        onSearchText={setSearchText}
        inStockOnly={inStockOnly}
        onInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable
