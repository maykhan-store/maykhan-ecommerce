import { useEffect, useState } from "react";

function ProductGallery({ images = [] }) {

  const [selected, setSelected] = useState("");

  useEffect(() => {

    if (images.length > 0) {
      setSelected(images[0]);
    }

  }, [images]);

  if (images.length === 0) {

    return (
      <div className="gallery">
        <h3>No Image Available</h3>
      </div>
    );

  }

  return (

    <div className="gallery">

      <img
        className="main-image"
        src={selected}
        alt="Product"
      />

      <div className="thumbnail">

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelected(img)}
            className={
              selected === img
                ? "active-thumb"
                : ""
            }
          />

        ))}

      </div>

    </div>

  );

}

export default ProductGallery;