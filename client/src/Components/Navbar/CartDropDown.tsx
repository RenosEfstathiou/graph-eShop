import React from "react";
import { Badge, Button, Card, Dropdown, Indicator } from "react-daisyui";
import { useSelector } from "react-redux";
import { selectCartProductIds, selectCartProducts } from "../../entities/cart";
import { useNavigate } from "react-router-dom";

type Props = {};

const CartDropDown = (props: Props) => {
  const cartItems = useSelector(selectCartProducts);

  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const navigate = useNavigate();

  return (
    <Dropdown vertical={"bottom"}>
      <Button tabIndex={0} color="ghost" shape="circle">
        <Indicator item={<Badge size="sm">{cartItems.length}</Badge>}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Indicator>
      </Button>
      <Dropdown.Menu
        tabIndex={0}
        className="mt-3 card card-compact w-52 bg-base-100 !p-0 right-0 top-0"
      >
        <Card.Body className="card-body">
          <span className="font-bold text-lg">{cartItems.length} Items</span>
          <span className="text-info">Subtotal: ${totalPrice}</span>
          <Card.Actions>
            <Button color="primary" fullWidth onClick={() => navigate("/cart")}>
              View cart
            </Button>
          </Card.Actions>
        </Card.Body>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropDown;
