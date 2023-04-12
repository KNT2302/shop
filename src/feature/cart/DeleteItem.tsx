import { cart } from "@/cart";
import DoAction from "@/component/DoAction";
import { queryClient } from "@/pages/_app";
import { useMutation } from "react-query";

const DeleteItem: React.FC<{ idProduct: number }> = ({ idProduct }) => {
  const deleteCartMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => queryClient.invalidateQueries("cart"),
  });
  const onClick = async (idProduct: any) => {
    deleteCartMutation.mutate({ idProduct });
  };
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <DoAction onClick={() => onClick(idProduct)}>
        <div
          style={{
            background: "red",
            color: "white",
            padding: ".5em 1em",
            fontWeight: "800",
            fontSize: "1em",
            borderRadius: "1.5em",
            cursor: "pointer",
          }}
        >
          Delete
        </div>
      </DoAction>
    </div>
  );
};

export default DeleteItem;

const deleteItem = async ({ idProduct }: { idProduct: number }) => {
  const indexProduct = cart.items.findIndex(
    (item) => item.product.id === idProduct
  );

  const deleteFromCart = () => {
    cart.items = cart.items.filter((item) => item.product.id != idProduct);
  };

  const calcTotal = () => {
    const total =
      cart.total -
      cart.items[indexProduct].quantity *
        cart.items[indexProduct].product.price;
    return total;
  };

  const total = calcTotal();
  deleteFromCart();
  cart.total = total;
};
