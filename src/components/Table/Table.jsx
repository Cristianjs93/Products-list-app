import React, { useState } from "react";
import "./table.scss";

const Table = ({ products = [], viewForm, onDeleteProduct, handleViewForm, handleEditProduct }) => {
   const handleForm = (event) => {
      handleViewForm(!viewForm ? true : viewForm == "edit" ? true : false);
   };

   const handleDelete = (event) => {
      const id = event.target.id;
      const productDeleted = products.filter((product) => product.id != id);
      onDeleteProduct(productDeleted);
   };

   const handleEdit = (event) => {
      const productToEditId = event.target.id;
      const productToEdit = products.filter((product) => product.id == productToEditId);
      handleViewForm("edit");
      handleEditProduct(productToEdit);
      console.log(productToEdit);
   };

   return (
      <div className="table-container">
         <div className="presentation">
            <h1 className="presentation__title">Products List</h1>
            <button className="presentation__add-button" onClick={handleForm}>
               {!viewForm ? "Add" : viewForm == "edit" ? "Add" : "Hide"}
            </button>
         </div>
         {products.length == 0 ? (
            <h1 className="table__empty-products">
               There are no products to show. Please click Add button to start.
            </h1>
         ) : (
            <div className="table">
               <table className="products-table">
                  <thead>
                     <tr key="table-head">
                        <th>PRODUCT NAME</th>

                        <th>COLOR</th>

                        <th>CATEGORY</th>

                        <th>PRICE</th>

                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {products.map((product) => (
                        <tr key={product.id}>
                           <td>{product.product_name}</td>

                           <td>{product.color}</td>

                           <td>{product.category}</td>

                           <td>{`$${product.price}`}</td>

                           <td className="products-table__buttons-td">
                              <button
                                 id={product.id}
                                 className="products-table__edit-button"
                                 onClick={handleEdit}>
                                 Edit
                              </button>
                              <span>|</span>
                              <button
                                 id={product.id}
                                 className="products-table__delete-button"
                                 onClick={handleDelete}>
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}
      </div>
   );
};

export default Table;
