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
    <Card className="hover:shadow-md hover:shadow-primary">
      <Card.Image
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-fill"
      />

      <Card.Body className="gap-2 md:gap-4">
        <Card.Title tag="h2">{product.name}</Card.Title>
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {`${product.price}€`}
        </span>
        <p>{product.description}</p>
        <p className="font-semibold">Rate this product:</p>

        <Ratings />
        <Card.Actions className="flex-1">
          <Button
            color="primary"
            onClick={() => handleAddToCart(product.id, product.price)}
            className="w-full"
          >
            Add to Cart
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}
