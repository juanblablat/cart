import { MdAddCircleOutline } from "react-icons/md";

export function ProductList({ productList, handleCartAdd }) {
  return (
    <ul className="list-group">
      {productList.map((product) => (
        <li key={product.id} className="list-group-item">
          <MdAddCircleOutline onClick={() => handleCartAdd(product)} />{" "}
          <span className="fw-medium">{product.name}</span>{" "}
          <span className="fst-italic fs-6">(${product.unitPrice} c/u)</span>
        </li>
      ))}
    </ul>
  );
}
