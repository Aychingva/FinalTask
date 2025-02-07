import { api } from "../api";

export const getBoysProducts = async () => {
    try {
      const response = await api.get("/categories");
  
      if (response.data) {
        const salesCategory = response.data.find(
          (category) => category.name === "Boys"
        );
  
        if (salesCategory && Array.isArray(salesCategory.subcategories)) {
          return salesCategory.subcategories.flatMap((subcategory) => {
            
            return Array.isArray(subcategory.products) ? subcategory.products : [];
          });
        }
      }
  
      return [];  
    } catch (error) {
      console.error("Error fetching sales products:", error.message || error);
       
    }
  };