import { cart } from "@/cart";
import DoAction from "@/component/DoAction";
import { toast } from "@/component/Toast";
import { queryClient } from "@/pages/_app";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { useMutation } from "react-query";
import ProductSize from "./ProductSize";
import PageLink from "@/component/PageLink";
import { CartItem, Product } from "@/ulties/model";

const AddToCard: React.FC<{ item: Product }> = ({ item }) => {
  const [size, setSize] = useState("");

  const addCartmutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
  });

  const toastMutation = useMutation({
    mutationFn: async (message: ReactElement) => {
      toast.message = message;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("toast");
    },
  });

  const onClick = async (size: string) => {
    const validate = () => {
      if (!size) {
        toastMutation.mutate(
          <div style={{ color: "red" }}>Should choose size</div>
        );
        return false;
      }
      return true;
    };
    if (!validate()) return;
    addCartmutation.mutate({
      product: item,
      quantity: 1,
      size,
    });
    toastMutation.mutate(<AddedToast />);
  };
  return (
    <div>
      <ProductSize sizes={item.sizes} setSize={setSize} currentSize={size} />
      <div style={{ height: "2em" }}></div>
      <DoAction onClick={() => onClick(size)}>
        <div style={{ fontSize: "1.1rem", width: "100%" }}>
          <div
            style={{
              color: "white",
              background: "black",
              borderRadius: "1.7em",
              padding: ".6em 4em",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </div>
        </div>
      </DoAction>
    </div>
  );
};

export default AddToCard;

const AddedToast = () => {
  return (
    <PageLink
      name="Add to cart"
      href="/cart"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        textDecoration: "none",
      }}
    />
  );
};

const addToCart = async (newItem: CartItem) => {
  const isInCart = cart.items.findIndex(
    (item) => item.product.id === newItem.product.id
  );
  if (isInCart > -1) {
    cart.items[isInCart].quantity += newItem.quantity;
  } else {
    cart.items.push(newItem);
  }
  cart.total += newItem.quantity * newItem.product.price;
};
