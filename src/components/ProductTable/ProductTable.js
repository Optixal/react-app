import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable({ products, searchText, inStockOnly }) {
  const rows = []
  let prevCategory = null

  for (const product of products) {
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1)
      continue
    if (inStockOnly && !product.stocked) continue
    if (product.category !== prevCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    prevCategory = product.category
  }

  return (
    <table className="table-zebra table-compact table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable
