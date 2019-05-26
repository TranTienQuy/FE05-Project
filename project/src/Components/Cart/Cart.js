import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';
import '../../styles/Cart.css';

class Cart extends Component {
    render() {
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <div className="container mt-4">
                                    <h4 className="text-capitalize font-weight text-center mb-4">your cart</h4>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </div>
                            );
                        }
                        else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart;