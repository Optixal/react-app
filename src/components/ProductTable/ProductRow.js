import clsx from 'clsx'

function ProductRow({ product }) {
  return (
    <tr>
      <td>
        <span className={clsx(product.stocked || 'text-error')}>
          {product.name}
        </span>
      </td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow
