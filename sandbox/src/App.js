import React from "react"

import SchoolProductData from "./Components/Data/SchoolProductData.js"
import Product from "./Components/Product.js";

const App = () => {

  const mappedData = SchoolProductData.map((productR) => {
    return ( <Product product={productR} /> )
  });

  return (
    <div>
      {mappedData}
    </div>
  )
}

export default App;