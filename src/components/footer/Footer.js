import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src="" className="logo"/>
            <h4>Contact</h4>
            <p><strong>Address: </strong>  123 NE Fake St. Seattle, WA</p>
            <p><strong>Phone: </strong> +01 222 3333 / (+91) 123 456 7890</p>
            <p><strong>Hours: </strong>  10:00am - 6:00pm, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlish</a>
            <a href="#">Track My Order</a>
            <a href="#">help</a>
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={require("./images/app.jpg")}/>
                <img src={require("./images/play.jpg")}/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={require("./images/pay.png")}/>
        </div>
        <div className="copyright">
            <p>&copy 2022, HaydenT Designs - Frontend Web Development</p>
        </div>
    </footer>
  )
}

export default Footer;