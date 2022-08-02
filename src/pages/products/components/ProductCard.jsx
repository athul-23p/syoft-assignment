
function ProductCard({product}){
    const{name,price,description} = product;
    return <div className="product-card">
        <h3>{name}</h3>
        <p>Rs{price}</p>
        <p>{description}</p>
        <div>
            <button>Edit</button>
        </div>
    </div>
}

export default ProductCard;