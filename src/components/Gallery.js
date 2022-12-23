import React, { useState } from "react";
import { Images } from "react-bootstrap-icons";
import { BsCloudDownload } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CloseButton from "react-bootstrap/CloseButton";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineStar,
} from "react-icons/ai";
const images = [
  "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
  "https://storage.newspark.ca/storage/35042924/2351",
  "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
  "https://wtop.com/wp-content/uploads/2022/12/Film_Review_-_Avatar__The_Way_of_Water_33752-scaled-e1671401944702.jpg",
  "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
  "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
];
export default function Gallery() {
  const [data, setData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };
  return (
    <div>
      {data.img ? (
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 64px)",
            position: "relative",

            display: "flex",

            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "black",
          }}
        >
          <div className="tw-flex tw-justify-between tw-w-64 tw-absolute tw-mx-auto tw-top-10 ">
            <BsCloudDownload size={32} color={"white"} />
            <AiOutlineDelete size={32} color={"white"} />
            <AiOutlineStar size={32} color={"white"} />
          </div>
          <AiOutlineClose
            size={32}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "white",
            }}
            onClick={() => imgAction(false)}
          />
          <AiFillCaretLeft
            size={40}
            onClick={() => imgAction("prev-img")}
            style={{ position: "absolute", left: "100px", color: "white" }}
          />
          <img
            alt=""
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "70%",
              maxHeight: "70%",
            }}
          />
          <AiFillCaretRight
            style={{ position: "absolute", right: "100px", color: "white" }}
            size={40}
            onClick={() => imgAction("next-img")}
          />
        </div>
      ) : (
        <ResponsiveMasonry
          className=" tw-px-2 mt-2"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="8px">
            {images.map((image, i) => (
              <img
                className=" hover:tw-scale-90 tw-ease-in tw-duration-500"
                alt=""
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
}
