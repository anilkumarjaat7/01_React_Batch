function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-content">
        <span className="category">{product.category}</span>

        <h3>{product.title}</h3>

        <p className="description">{product.description.slice(0, 100)}...</p>

        <div className="product-bottom">
          <span className="price">${product.price}</span>

          <span className="rating">⭐ {product.rating.rate}</span>
        </div>

        <button className="cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
