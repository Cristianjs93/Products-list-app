import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Contact from "./components/Contact/Contact";
import "./App.scss";

function App() {
   const [viewPage, setViewPage] = useState("products");
   const [viewForm, setViewForm] = useState(false);
   const [products, setProducts] = useState([]);
   const [editProduct, setEditProduct] = useState({});

   const handleViewPage = (newViewPage) => {
      setViewPage(newViewPage);
   };

   const handleViewForm = (newViewForm) => {
      setViewForm(newViewForm);
   };

   const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct]);
   };

   const handleDeleteProduct = (productDeleted) => {
      setProducts(productDeleted);
   };

   const handleEditProduct = (productToEdit) => {
      setEditProduct(productToEdit);
   };

   const handleEditedProducts = (editedProducts) => {
      setProducts(editedProducts);
   };

   if (viewPage == "products") {
      return (
         <div className="container">
            <div className="app-header">
               <Header handleViewPage={handleViewPage} />
            </div>
            <div className="app-form">
               <Table
                  products={products}
                  onDeleteProduct={handleDeleteProduct}
                  viewForm={viewForm}
                  handleViewForm={handleViewForm}
                  handleEditProduct={handleEditProduct}
               />
               <Form
                  products={products}
                  onAddProduct={handleAddProduct}
                  viewForm={viewForm}
                  handleViewForm={handleViewForm}
                  editProduct={editProduct}
                  handleEditedProducts={handleEditedProducts}
               />
            </div>
         </div>
      );
   } else if (viewPage == "contact") {
      return (
         <div className="container">
            <div className="app-header">
               <Header handleViewPage={handleViewPage} />
            </div>

            <Contact />
         </div>
      );
   }
}

export default App;
