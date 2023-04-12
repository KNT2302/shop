import DoAction from "@/component/DoAction";

const WhishList = () => {
  const onClick = async () => {};
  return (
    <DoAction onClick={onClick}>
      <div style={{ fontSize: "1.1rem", width:'100%' }}>
        <div
          style={{
            color: "black",
            background: "white",
            borderRadius: "1.7em",
            padding: ".6em 4em",
            cursor: "pointer",
            border: "1px solid",
            width: "100%",
          }}
        >
          WhishList
        </div>
      </div>
    </DoAction>
  );
};

export default WhishList
