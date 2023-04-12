import { message } from "@/component/Popup";
import { queryClient } from "@/pages/_app";
import Link from "next/link";
import { useMutation } from "react-query";

const Purchased = () => {
  const closeMutation = useMutation({
    mutationFn: async () => {
      message.message = null;
    },
    onSuccess: () => queryClient.invalidateQueries("popup"),
  });
  return (
    <div
      style={{
        padding: "1em",
        borderRadius: "5px",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "green", fontSize: "2em", fontWeight: "600" }}>
        Thank for your purchased
      </h1>

      <div style={{ height: "1em" }}></div>
      <Link
        onClick={() => closeMutation.mutate()}
        href="/"
        style={{
          display: "inline-block",
          textDecoration: "none",
          color: "black",
          border: "1px solid gray",
          borderRadius: "3px",
          padding: ".5em 1em",
          margin: "0 auto",
        }}
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Purchased
