import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import ProductComponent from "../ProductComponent/ProductComponent";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import women from "../ProductListing/women's-banner.jpg";
import "../ProductListing/Productlisting.css";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")

      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productlisting">
      <div className="container">
        <div class="aem-Grid aem-Grid--12">
          <div class="aem-GridColumn aem-GridColumn--default--4">
            <div className="productlisting__title">
              <h3>Women's</h3>
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--8">
            <div className="productlisting__image">
              <img src={women} alt="women" />
            </div>
          </div>
        </div>
        <div className="breadcrumbslist">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <BreadCrumb />
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9">
              <div className="breadcrumbslist__filter">
                <p>6 Products</p>
                <div>
                  <select className="product__dropdown">
                    <option value="">Sort by Latest</option>
                    <option value="">Men's Clothing</option>
                    <option value="">Women's Clothing</option>
                    <option value="">Jewelery</option>
                    <option value="">Accessories</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3">
              <div className="productfilters">
                <h4>Filters</h4>
                <p>Attribute</p>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <a href="#">Show more</a>
                <p>Attribute</p>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <div>
                  <input type="checkbox" />
                  Option
                </div><br/>
                <p>Color</p>
                <button className="btn-3"></button>
                <button className="btn-5"></button>
                <button className="btn-1"></button>
                <button className="btn-2"></button>
                <button className="btn-4"></button>
                <button className="btn-6"></button>
                <button className="btn-9"></button>
                <button className="btn-7"></button>
                <button className="btn-8"></button>
                <button className="btn-10"></button>
                <p>Attribute</p>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <label>
                  <input type="checkbox" />
                  Option
                </label>
                <hr></hr>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--9">
              <ProductComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
