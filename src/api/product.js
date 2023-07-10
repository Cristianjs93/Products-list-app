export const getProduct = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("An error has occurred");
};

export const postProduct = async (body) => {
   const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/createProduct`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
         "Content-Type": "application/json",
      },
   });

   if (response.ok) {
      return await response.json();
   }

   throw new Error("An error has occurred");
};

export const editProduct = async (id, body) => {
   const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/products/updateProduct/${id}`,
      {
         method: "PUT",
         body: JSON.stringify(body),
         headers: {
            "Content-Type": "application/json",
         },
      }
   );

   if (response.ok) {
      return await response.json();
   }

   throw new Error("An error has occurred");
};

export const deleteProduct = async (id) => {
   const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/products/deleteProduct/${id}`,
      {
         method: "DELETE",
      }
   );

   if (response.ok) {
      return await response.json();
   }

   throw new Error("An error has occurred");
};
