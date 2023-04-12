import { useState } from "react";
import ImageList from "./ImageList";
import ImageBox from "./ImageBox";

const SlideImage: React.FC<{ images: string[] }> = ({
  images = [
    "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-next-nature-road-running-shoes-NC0P7k.png",
    "https://i.ebayimg.com/images/g/ScIAAOSwp4VjRMor/s-l1600.jpg",
  ],
}) => {
  const [image, setImage] = useState<string>(() => images[0]);
  const handleSetImage = (image: string) => {
    setImage(image);
  };
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ flexBasis: "60px", flexShrink: "0" }}>
        <ImageList images={images} setImage={handleSetImage} />
      </div>
      <div style={{ paddingLeft: "5px" }}>
        {[image].map((image) => {
          return <ImageBox key={image} image={image} />;
        })}
      </div>
    </div>
  );
};

export default SlideImage;
