import React, { useState, useEffect } from "react";
import Backgroundimage from "./images/hero.png";
import "./ContentSection.css";

function Package() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainpagevalue, setmainpagevalue] = useState([])

  const formatdateTime = (item) => {
    const date = new Date(item);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString(); 
    return { formattedDate, formattedTime };
  };


  useEffect(() => {
    fetch("https://cimauae.avmdevs.com/wp-json/dokan/v1/stores/2/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        // console.log(data)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setmainpagevalue(product);
  };

  return (
    <div className="content-section">
      <div className="product-itemsss">
      <img className="icon-images" src={Backgroundimage} alt="Image Not Found" />
        <div className="product-values">
          <h3 className="product-price">AED {mainpagevalue?.price} <span className="product-regularprice">AED {mainpagevalue?.regular_price}</span></h3>
          <h2 className="product-name">{mainpagevalue?.name}</h2>
          <p className="product-para">{mainpagevalue?.description}</p>
        </div>
      </div>
      <div className="product-cart">
        <div className="product-list">
          <h2>please Select Your Package</h2>
          <div className="newlist">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-item"
                onClick={() => handleProductClick(product)}
              >
                  <h4>{product.name}</h4>
                  <h4 className="price">AED {product.price} <span className="regular-price">{product.regular_price}</span></h4>
                  {product.short_description}
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
          {selectedProduct ? (
            <div>
              <p className="product-total">Total:<span className="adeclass"> AED {selectedProduct.price}</span><span> AED {selectedProduct.regular_price}</span></p> 
              <p  className="product-total product-totals ">OFFER CLAIMED<span>You save AED {selectedProduct.regular_price - selectedProduct.price}</span></p>
              <table className="product-pricing">
                <tbody>
                <tr>
                  <td>
                    <label>Product</label>
                  </td>
                  <td>
                    <p>{selectedProduct.name}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Date</label>
                  </td>
                  <td>
                    <p>{formatdateTime(selectedProduct.date_created).formattedDate}</p>
                  </td>
                  </tr>
                <tr>
                  <td>
                    <label>Time</label>
                  </td>
                  <td>
                    <p>{formatdateTime(selectedProduct.date_created).formattedTime}</p>
                  </td>
                  </tr>
                <tr>
                  <td>
                    <label>SubTotal</label>
                  </td>
                  <td>
                    <p>AED {selectedProduct.regular_price}</p>
                  </td>
                  </tr>
                <tr>
                  <td>
                    <label>Discount</label>
                  </td>
                  <td>
                    <p>AED {selectedProduct.price}</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <hr/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="labell">Amount to Pay</label>
                  </td>
                  <td>
                    <p className="labell">AED {selectedProduct.regular_price - selectedProduct.price}</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button className="btn">Pay {selectedProduct.price} AED</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>Select a product to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Package;
