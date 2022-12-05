function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" className="py-2 text-center">
        {category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow
