import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router"; // For routing
import { routers } from "./router"; // Define your routes properly
import { getSalesProducts } from "./services/product"; // API call function/ Redux action
import { ProductsAction } from "./store/actions/product.action";
import { getWomenProducts } from "./services/women";
import { womenAction } from "./store/actions/women.action";
import { getMenProducts } from "./services/men";
import { menAction } from "./store/actions/men.action";
import { getGirlsProducts } from "./services/girls";
import { getBoysProducts } from "./services/boys";
import { GirlsAction } from "./store/actions/girls.action";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
       
  //       const salesProducts = await getSalesProducts();
  //       dispatch(ProductsAction(salesProducts));

  //       const womenSalesProducts = await getWomenProducts();
  //       dispatch(womenAction(womenSalesProducts)); 
  //       const menSalesProducts = await getMenProducts();
  //       dispatch(menAction(menSalesProducts)); 
  //       const girlsSalesProducts = await getGirlsProducts();
  //       dispatch(GirlsAction(girlsSalesProducts)); 
  //       const boysSalesProducts = await getBoysProducts();
  //       dispatch(boysAction(boysSalesProducts)); 


  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }

  //   fetchProducts();
  // }, []); 

  return (
    <RouterProvider router={routers} />
  );
}

export default App;

