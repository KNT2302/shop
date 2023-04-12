/* eslint-disable @next/next/no-img-element */
import BoxList from "@/component/BoxList";
import { data } from "@/data";
import { Product } from "@/ulties/model";
import Link from "next/link";
import { useQuery } from "react-query";

const CardProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={{ padding: "10px 10px", border: "1px solid" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={product.image[0]}
          alt="shoe"
        />
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "18px",
                lineHeight: "1.3rem",
                maxHeight: "2.6rem",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {product.name}
            </h1>
            <p>{product.price}</p>
          </div>
          <div>Discount</div>
        </div>
      </div>
    </Link>
  );
};

const ListRecommendProduct = () => {
  const list = useQuery(["recommendProduct"], getRecommendProduct, {
    staleTime: Infinity,
  });

  const getCardContent = (product: any) => {
    return <CardProduct product={product} />;
  };
  if (list.data) {
    return (
      <div>
        <BoxList getCardContent={getCardContent} list={list.data} />
      </div>
    );
  }
  if (list.error) {
    return <div>Error</div>;
  }

  return <div>Loading...</div>;
};

export default ListRecommendProduct;

const getRecommendProduct = async () => {
  const resData = data;
  if (!resData) {
    return [];
  }
  return resData;
};
