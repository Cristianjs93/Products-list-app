import React, { useState, useEffect } from "react";
import Toast from "../../../utils/Toast";
import "./productform.scss";

const ProductForm = ({ title, onAddProduct, isEdit, productToEdit, onEditProduct, children }) => {
   const [product, setProduct] = useState({
      product_name: "",
      color: "",
      category: "Home",
      price: "",
      ...productToEdit,
   });

   useEffect(() => {
      setProduct({ ...product, ...productToEdit });
   }, [productToEdit]);

   const handleChange = (event) => {
      const { name, value } = event.target;

      const valueCapitalLetter = value.charAt(0).toUpperCase() + value.slice(1);

      const valueWithoutNumber = value.replace(/[^a-zA-Z]/g, "");

      name == "product_name" &&
         setProduct({
            ...product,
            [name]: valueCapitalLetter,
         });

      name == "color" &&
         setProduct({
            ...product,
            [name]: valueWithoutNumber,
         });

      (name == "price" || name == "category") &&
         setProduct({
            ...product,
            [name]: value,
         });
   };

   const handleAdd = (event) => {
      event.preventDefault();

      if (product.product_name && product.color && product.price) {
         const newProduct = {
            ...product,
         };

         if (isEdit) {
            onEditProduct(newProduct);
            Toast.fire({
               icon: "success",
               title: "Product successfully upgraded!",
            });
         } else {
            onAddProduct(newProduct);
            Toast.fire({
               icon: "success",
               title: "New product added!",
            });
         }
         isEdit && newProduct ? onAddProduct(newProduct) : null;

         setProduct({
            product_name: "",
            color: "",
            category: "Home",
            price: "",
         });
      } else {
         Toast.fire({
            icon: "error",
            title: "All fields must be filled in",
         });
      }
   };

   return (
      <aside className="form-container">
         <h1 className="form__title">{title}</h1>

         <form className="form" onSubmit={handleAdd}>
            <label htmlFor="product_name">PRODUCT NAME</label>
            <input
               type="text"
               name="product_name"
               className="form__product-name"
               onChange={handleChange}
               placeholder="your product name"
               value={product.product_name}
               autoComplete="off"
            />

            <label htmlFor="color">COLOR</label>
            <input
               type="text"
               name="color"
               className="form__product-color"
               onChange={handleChange}
               placeholder="silver, black, white, etc"
               value={product.color}
               title="Letters only"
               autoComplete="off"
            />

            <label htmlFor="category">CATEGORY</label>
            <select
               name="category"
               className="form__product-category"
               onChange={handleChange}
               value={product.category}>
               <option value="Home">Home</option>
               <option value="Music">Music</option>
               <option value="Baby">Baby</option>
               <option value="Books">Books</option>
            </select>

            <label htmlFor="price">PRICE</label>
            <input
               type="number"
               name="price"
               className="form__product-price"
               onChange={handleChange}
               placeholder="$1999.99"
               value={product.price}
            />

            {children}
         </form>
      </aside>
   );
};

export default ProductForm;
