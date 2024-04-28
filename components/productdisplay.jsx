import React from "react";
import './productdisplay.css'
import star_icon from "../assests/star_icon.png";
import star_dull_icon from "../assests/star_dull_icon.png"
const ProductDisplay = (props) =>{
    const{product} = props;
    return(
        <div className='productdisplay'>
<div className="productdisplay-left">
    <div className="productdisplay-img-list">
<img src={product.img} alt="" />
<img src={product.img} alt="" />
<img src={product.img} alt="" />
<img src={product.img} alt="" />
    </div>
    <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
</div>
</div>
<div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-stars">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
</div>
<div className="productdisplay-right-prices">
<div className="productdisplay-right-price-old">${product.old_price}</div>
<div className="productdisplay-right-price-new">${product.new_price}</div>
</div>
<div className="productdisplay_right_discription">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus optio veniam hic expedita. Excepturi maiores error quaerat, ea iure cum aut sint iste impedit harum, autem alias, adipisci nesciunt veniam.
</div>
<div className="productdisplay-right-size">
    <h1>Select size</h1>
    <div className="productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
</div>
<button>ADD TO CART</button>
<P className="productdisplay-right-category"><span>Category:</span>Women, t-shirt , crop top</P>
<P className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</P>
</div>
        </div>
    )
}
export default ProductDisplay