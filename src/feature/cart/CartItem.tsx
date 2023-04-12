/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import DeleteItem from "./DeleteItem";
import { cart } from "@/cart";
import { useMutation } from "react-query";
import { queryClient } from "@/pages/_app";
import { Product } from "@/ulties/model";

interface CartItemI {
  item: {
    product: Product;
    quantity: number;
    size: string;
  };
}
const CartItem: React.FC<CartItemI> = ({ item }) => {
  const quantity = useRef<any>();
  const updateMutation: any = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  useEffect(() => {
    quantity.current.value = item.quantity;
    quantity.current.onchange = () => {
      updateMutation.mutate({
        id: item.product.id,
        quantity: quantity.current.value,
        size: item.size,
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "flex-start",
        paddingRight: "20px",
      }}
    >
      <div style={{ width: "100px" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={item.product.image[0]}
          alt="shoe"
        />
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <div>
          <h3>{item.product.name}</h3>
          <p>{item.product.type}</p>
        </div>
        <div style={{ height: "10px" }}></div>
        <div>
          <p>{item.size}</p>
          <input ref={quantity} type="number" min={1} />
        </div>
      </div>
      <div>
        <p>{item.product.price * item.quantity}</p>
        <DeleteItem idProduct={item.product.id} />
      </div>
    </div>
  );
};

export default CartItem;

const updateItem: any = async ({
  id,
  quantity,
  size,
}: {
  id: any;
  quantity: any;
  size: any;
}) => {
  const itemIndex = cart.items.findIndex((item: any) => item.product.id == id);
  const newQuantity = quantity - cart.items[itemIndex].quantity;
  cart.items[itemIndex] = {
    ...cart.items[itemIndex],
    quantity,
    size,
  };
  cart.total += newQuantity * cart.items[itemIndex].product.price;
};
