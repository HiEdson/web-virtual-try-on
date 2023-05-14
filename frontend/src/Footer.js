import React from "react";
import './Footer.css';
const Footer=()=>{


    return(
        <footer class="bg-dark text-light py-3 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <h4 class="mb-3">About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <h4 class="mb-3">Links</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4 class="mb-3">Contact Us</h4>
                        <p>123 Main Street</p>
                        <p>Anytown, USA 12345</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: (555) 555-1234</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-primary mt-3 py-2">
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <p class="m-0">&copy; 2023 My Site. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;