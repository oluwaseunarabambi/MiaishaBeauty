import React from "react";
import '../Styles/Checkout.css';

const Checkout = ({ cart, total }) => {
    return (
        <div className="checkout-container">
            <h3>Cart </h3>
            {cart.length === 0 ? (
                <p className="empty-cart-message">Your cart is currently empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.description} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <p>{item.description}</p>
                                    <p>Price: N{item.price}</p>
                                </div>
                            </li>

                        ))}
                    </ul>
                    <div className="total-amount">
                        <h4>Total: N{total}</h4>
                    </div>
                </>
            )}
            <h5>NOTE:</h5>
            <br /> <br />

            <ul className="checkout-notes">
                <li>To Place an Order Kindly take a screenshot of your checkout page and send it as a DM on Instagram @Miaishabeauty</li>
                <li>Kindly send a DM on Instagram @Miaishabeauty for International Shipping rates.</li>
                <li>Deliveries within Lagos take 3-4 working days after dispatch.</li>
                <li>Deliveries outside Lagos take 3-5 working days after dispatch.</li>
                <li>For international shipping, we have added the cost only for 0-2kg.
                    <br />If your order weighs more at the shipping office, please understand that you would have to pay more.
                    <br /> Additionally, prices are subject to change at any time.</li>
            </ul>

            <hr />
        </div>

    )
};

export default Checkout;