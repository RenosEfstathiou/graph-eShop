import { Button, Card } from "react-daisyui";
import { useDispatch } from "../../../app/store";
import { addProduct } from "../../../entities/cart";
import { Product } from "../../../model/Product";
import Ratings from "../../../Components/Procucts/Ratings";

export interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();
  const handleAddToCart = (id: number, price: number) => {
    dispatch(addProduct({ id, price }));
  };

  return (
    <Card>
      <Card.Image
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-fill"
      />

      <Card.Body>
        <Card.Title tag="h2">{product.name}</Card.Title>

        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {`${product.price}€`}
        </span>

        <p>{product.description}</p>

        <Ratings />

        <Card.Actions className="justify-end">
          <Button
            color="primary"
            onClick={() => handleAddToCart(product.id, product.price)}
            className="w-24 sm:w-28 md:w-32"
          >
            Add to Cart
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
