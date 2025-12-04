import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../Models/ShopModel";
import { ShopService } from "../Service/ShopService";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../../redux/slices/productSlice";

const ShopDetails = () => {
  const { productId } = useParams();
  const a = useParams();
  console.log(a, "aa");
  const cart = useAppSelector((state) => state.productSlice.cart);
  console.log("cart Ad", cart);
  const dispach = useAppDispatch();
  const [details, setDetails] = useState<IProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getDetails = async () => {
    console.log(productId, "productId");

    try {
      if (productId) {
        const res = await ShopService.shopDetails(productId);
        setDetails(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, [productId]);

  const totalCount = useAppSelector((state) => state.productSlice.cartCount);

  return (
    <section className="shopDetails">
      <div className="container">
        <div className="row">
          {details && (
            <div className="productBox">
              <div className="leftSide">
                <img
                  src={details.productImage}
                  alt={details.name}
                  onClick={openModal}
                />
              </div>

              <div className="rightSide">
                <h2>{details.name}</h2>
                <p>{details.details}</p>
                <p className="price">
                  <strong>Price:</strong> {details.price} $
                </p>

                <div className="actions">
                  <div className="counter">
                    <button
                      onClick={() => dispach(decrementQuantity({}))}
                    ></button>
                    <span>{totalCount}</span>
                    <button onClick={() => dispach(incrementQuantity({}))}>
                      +
                    </button>
                  </div>
                  <button
                    className="addBtn"
                    onClick={() => dispach(addToCart(details))}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="imageModal" onClick={closeModal}>
                  <img
                    src={details.productImage}
                    alt="Zoomed"
                    className="modalImg"
                  />
                </div>
              )}

              {/* {details.productImage && (
                <div className="images">
                  {details.productImage.map((img, index) => (
                    <img key={index} src={img} alt={details.name} />
                  ))}
                </div>
              )} */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
