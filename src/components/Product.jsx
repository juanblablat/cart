import { useState, useEffect } from "react";
import { ProductList } from "./ProductList";
import { ProductCart } from "./ProdcutCart";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Product() {
  const groceries = [
    {
      id: 1,
      name: "Frutilla",
      unitPrice: 50.3,
    },
    {
      id: 2,
      name: "Uva",
      unitPrice: 23.0,
    },
    {
      id: 3,
      name: "Naranja",
      unitPrice: 76.0,
    },
    {
      id: 4,
      name: "Banana",
      unitPrice: 55.9,
    },
    {
      id: 5,
      name: "Manzana",
      unitPrice: 31.0,
    },
    {
      id: 6,
      name: "Zanahoria",
      unitPrice: 17.6,
    },
    {
      id: 7,
      name: "Puerro",
      unitPrice: 30.0,
    },
    {
      id: 8,
      name: "Champiñon",
      unitPrice: 80.0,
    },
    {
      id: 9,
      name: "Pan",
      unitPrice: 22.5,
    },
    {
      id: 10,
      name: "Huevo",
      unitPrice: 29.0,
    },
    {
      id: 11,
      name: "Queso",
      unitPrice: 130.0,
    },
    {
      id: 12,
      name: "Manteca",
      unitPrice: 90.0,
    },
    {
      id: 13,
      name: "Pollo",
      unitPrice: 115.0,
    },
    {
      id: 14,
      name: "Milanesa",
      unitPrice: 97.0,
    },
    {
      id: 15,
      name: "Helado",
      unitPrice: 88.0,
    },
    {
      id: 16,
      name: "Pescado",
      unitPrice: 150.0,
    },
    {
      id: 17,
      name: "Arroz",
      unitPrice: 36.0,
    },
    {
      id: 18,
      name: "Fideos",
      unitPrice: 56.0,
    },
    {
      id: 19,
      name: "Bizcocho",
      unitPrice: 72.0,
    },
    {
      id: 20,
      name: "Papel Higiénico",
      unitPrice: 45.0,
    },
    {
      id: 21,
      name: "Alcohol en Gel",
      unitPrice: 83.0,
    },
  ];
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setProduct([...groceries]);
  }, []);

  const handleCartAdd = (prod) => {
    const addProdToCart = cart.find((item) => item.id === prod.id);

    if (!addProdToCart) {
      setCart([...cart, { ...prod, quantity: 1 }]);
    } else {
      setCart((cart) =>
        cart.map((item) =>
          item.id === prod.id ? { ...prod, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const handleCartDel = (prod) => {
    if (prod.quantity > 1) {
      setCart((cart) =>
        cart.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart((cart) => cart.filter((item) => item.id !== prod.id));
    }
  };

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.unitPrice * item.quantity,
    0
  );

  return (
    <Container>
      <Row>
        <Col>
          <h4>Productos Disponibles</h4>
          <ProductList productList={product} handleCartAdd={handleCartAdd} />
        </Col>
        <Col>
          <h4>Carrito de Compras</h4>
          <ProductCart
            cartList={cart}
            handleCartDel={handleCartDel}
            totalPrice={totalPrice}
          />
        </Col>
      </Row>
    </Container>
  );
}
