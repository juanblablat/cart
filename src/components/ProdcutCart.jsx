import { MdOutlineRemoveCircleOutline } from "react-icons/md";

export function ProductCart({ cartList, handleCartDel, totalPrice }) {
  return cartList.length === 0 ? (
    <span className="fst-italic fs-6">
      Por favor, seleccione uno o más productos para agregar al carrito
    </span>
  ) : (
    <ul className="list-group">
      {cartList.map((product) => (
        <li key={product.id} className="list-group-item">
          <MdOutlineRemoveCircleOutline
            onClick={() => handleCartDel(product)}
          />{" "}
          <span className="fw-medium">{product.name}</span>{" "}
          <span className="fst-italic fs-6">
            (Cant: {product.quantity}) (${product.unitPrice} c/u)
          </span>
        </li>
      ))}
      <li className="mt-2 list-group-item list-group-item-success rounded">
        Precio Total: ${totalPrice.toFixed(1)}
      </li>
    </ul>
  );
}
