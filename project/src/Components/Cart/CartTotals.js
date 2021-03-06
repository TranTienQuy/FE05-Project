import React from 'react';
import {Link} from 'react-router-dom';
import {formatMoney} from "../../format/priceFormatter";
import StripeCheckout from 'react-stripe-checkout';

function CartTotals ({value}) {
    const {cartTotal, clearCart} = value;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-2 ml-1">
                        <Link to="/products">
                            <button className="btn btn-danger text-uppercase mt-3 mb-3 px-5 mr-4" 
                            type="button" onClick={() => clearCart()} >
                                clear
                            </button>
                        </Link>
                    </div>
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/checkout">
                            <button className="btn btn-primary text-uppercase mt-3 mb-3 mr-1 px-5">
                                checkout
                            </button>
                        </Link> <br/>
                        <StripeCheckout 
                            className="text-uppercase mt-1 mb-3 mr-4" 
                            label="Pay with card"
                        />
                        <br/>
                        <h5 className="mr-3">
                            <span className="text-title">total: </span>
                            <strong> <font color="red">{formatMoney(cartTotal)} đ</font></strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTotals;