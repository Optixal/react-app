function ProductRow({ product }) {
  return (
    <tr>
      <td>
        <span className={product.stocked ? 'text-white' : 'text-red-300'}>
          {product.name}
        </span>
      </td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow
