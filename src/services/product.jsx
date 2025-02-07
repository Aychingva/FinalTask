import { api } from "../api"

export const getallproducts=async()=>{
    try {
        const response=await api.get("/categories")
        console.log(response.data)
        return response.data
    }catch{
        throw new Error("error")
    }

}
// salesProductService.js; // Assuming you have a configured `api` instance
export const getSalesProducts = async () => {
    try {
      const response = await api.get("/categories");
  
      if (response.data) {
        const salesCategory = response.data.find(
          (category) => category.name === "Sales"
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
  