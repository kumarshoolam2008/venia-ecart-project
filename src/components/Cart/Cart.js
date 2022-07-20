import React, { useState } from 'react';
import '../Cart/Cart.css';
import {Link} from 'react-router-dom';
import paypal from '../../components/Cart/PP_BTN.png';
import trash from '../../components/Cart/trash.png';
import edit from '../../components/Cart/edit.png';
import heart from '../../components/Cart/heart.png';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    const [qty, setQty] = useState(1);

    function onChange(e) {
        const v = e.target.value;
        if (v <= 0) setQty(0);
        else if (v >= 6) setQty(6);
        else setQty(v);
      }
      function decreaseQty() {
        if (qty <= 0) {
          setQty(0);
        } else {
          setQty(qty - 1);
        }
      }
    
      function increaseQty() {
        if (qty >= 6) {
          setQty(6);
        } else {
          setQty(qty + 1);
        }
      }

    return (
        <section className="cart">
            <div className='container'>
                <h1>Your Shopping Bag</h1>
                <div className='cart__content'>
                {cartItems.length === 0 && <h2 className='emptybasket'>Bag is empty {":("} </h2>}
                    <div class="aem-Grid aem-Grid--12">
                    
                        <div class="aem-GridColumn aem-GridColumn--default--9">
                            
                            {cartItems.map((item) => (
                                <div className='cart__productlayout'>
                                    <div class="aem-Grid aem-Grid--12" key={item.id}>
                                        <div class="aem-GridColumn aem-GridColumn--default--2">
                                            <div className="cart__image">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--4">
                                            <span className='cart__details'>
                                                <h5>{item.title}</h5>
                                                <p>Size: Medium</p>
                                                <p>Color: Storm</p>
                                                <p>Price: ${item.price}</p>
                                            </span>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--3">
                                            <div className='cart__btn'>
                                            {/* <p><b>Qty:</b>{item.qty} * ${item.price.toFixed(2)}</p>  */}
                                            <button className='btn-1' onClick={() => decreaseQty()}>-</button>
                                            <input value={qty} onChange={(e) => onChange(e)} type="number" min="1" />
                                            <button className='btn-2' onClick={() => increaseQty()}>+</button>
                                            </div>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--3">
                                            <ul>
                                                <li><Link to='#'><img src={edit} /> Edit</Link></li>
                                                <li><Link to='#' onClick={() => onRemove(item)}><img src={trash} /> Remove</Link></li>
                                                <li><Link to='#'><img src={heart} /> Save for later</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3">
                            <div className='cart__right'>
                                <h4>Pricing Summary</h4>
                                {cartItems.length !== 0 && (
                                    <>
                                        <div className="cart__right-subtotal">
                                            <p>Price</p>
                                            <p>${itemsPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="cart__right-coupon">
                                            <p>Coupon</p>
                                            <p>-$0</p>
                                        </div>
                                        <div className="cart__right-giftcard">
                                            <p>Giftcard</p>
                                            <p>-$0</p>
                                        </div>
                                        <div className="cart__right-tax">
                                            <p>Estimated tax</p>
                                            <p>${taxPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="cart__right-ship">
                                            <p>Estimated shipping</p>
                                            <p>${shippingPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="cart__right-total">
                                            <p><b>Estimated Total</b></p>
                                            <p><b>${totalPrice.toFixed(2)}</b></p>
                                        </div>
                                        <button onClick={() => alert('Under maintanance')} className="button-primary checkbtn"><i className="fa fa-lock"></i>Checkout</button>
                                        <Link to='#'><img src={paypal} alt="paypal" /></Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
