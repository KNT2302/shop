import CheckoutButton from "./CheckoutButton";

const Checkout: React.FC<{total:number}> = ({ total }) => {
  return (
    <div style={{ width: "100%" }}>
      <h2>Summary</h2>
      <div style={{ height: "10px" }}></div>
      <div
        style={{ borderRadius: "3px", background: "#e5efec", padding: "20px" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>SUBTOTAL</h3>
          <p>{total}</p>
        </div>
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "black",
            margin: "10px 0",
          }}
        ></div>
        <p>
          The subtotal reflects the total price of your order, including duties
          and taxes, before any applicable discounts. It does not include
          delivery costs and international tran saction fees.
        </p>
      </div>
      <div style={{ height: "10px" }}></div>
      <CheckoutButton />
    </div>
  );
};

export default Checkout
