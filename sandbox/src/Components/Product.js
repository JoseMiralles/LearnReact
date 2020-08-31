import React from "react"

const Product = (p) => {
    return (
        <span>
            <h3>{p.product.name}</h3>
            <label>id#: {p.product.id}</label>
            <p>{p.product.description}</p>
            <p>{p.product.price.toLocaleString("en-US", {style:"currency", currency: "USD"})}</p>
            <hr />
        </span>
    )
}

export default Product;