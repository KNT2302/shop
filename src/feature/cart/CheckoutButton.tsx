import { cart } from "@/cart";
import DoAction from "@/component/DoAction";
import { message } from "@/component/Popup";
import { queryClient } from "@/pages/_app";
import { wait } from "@/ulties/common";
import { ReactElement, useEffect, useRef } from "react";
import { useMutation } from "react-query";
import Purchased from "./Purchased";

const CheckoutButton = () => {
  const timer = useRef();
  const popupMutation = useMutation({
    mutationFn: openPopup,
    onSuccess: () => queryClient.invalidateQueries("popup"),
  });

  const cartMutation = useMutation({
    mutationFn: async () => {
      cart.items = [];
      cart.total = 0;
    },
    onSuccess: () => queryClient.invalidateQueries("cart"),
  });

  const onClick = async () => {
    await wait(250, timer).then(() => {
      cartMutation.mutate();
      popupMutation.mutate({ infoMessage: <Purchased /> });
    });
  };

  useEffect(() => {
    const timeOut = timer.current;
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <DoAction onClick={onClick}>
      <div
        style={{
          fontSize: "1.1rem",
          color: "white",
          background: "black",
          borderRadius: "1.7em",
          padding: ".6em 4em",
          cursor: "pointer",
        }}
      >
        Checkout
      </div>
    </DoAction>
  );
};

export default CheckoutButton;

const openPopup = async ({ infoMessage }: { infoMessage: ReactElement }) => {
  message.message = infoMessage;
};
