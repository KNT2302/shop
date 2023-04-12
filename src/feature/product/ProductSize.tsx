import BoxList from "@/component/BoxList";

interface ProductSizeI {
  sizes: string[] | undefined;
  setSize: (size: string) => void;
  currentSize: string;
}

const ProductSize: React.FC<ProductSizeI> = ({
  sizes = ["1", "2", "3"],
  setSize,
  currentSize,
}) => {
  const onClick = (size: string) => {
    setSize(size);
  };
  const getCardContent = (size: string) => {
    return (
      <div
        onClick={() => onClick(size)}
        style={{
          border: "1px solid gray",
          borderRadius: "3px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5em",
          cursor: "pointer",
          borderColor: `${currentSize === size ? "red" : "gray"}`,
        }}
      >
        {size}
      </div>
    );
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontSize: "1.2rem" }}>Select Size</h2>
        <h2 style={{ fontSize: "1.2rem", fontWeight: "500", color: "gray" }}>
          Select Guide
        </h2>
      </div>
      <BoxList
        list={sizes}
        space={5}
        padding={5}
        getCardContent={getCardContent}
      />
    </div>
  );
};

export default ProductSize;
