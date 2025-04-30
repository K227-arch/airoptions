class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="transparent scroll-light has-topbar" >
            <div id="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex justify-content-between xs-hide">
                                <div class="header-widget d-flex">
                                    <div class="topbar-widget"><a href="#"><i class="icofont-phone"></i>+256 701 430 671</a></div>
                                    <div class="topbar-widget"><a href="#"><i class="icofont-phone"></i>+256 776 430 671</a></div>
                                    <div class="topbar-widget"><a href="#"><i class="icofont-envelope"></i>info@airoptionsuganda.com</a></div>
                                    <div class="topbar-widget"><a href="#"><i class="icofont-wall-clock"></i>Mon - Fri 08.00am - 17.00pm</a></div>
                                </div>

                                <div class="social-icons">
                                    <a href="#"><i class="fa-brands fa-facebook fa-lg"></i></a>
                                    <a href="https://x.com/options_air"><i class="fa-brands fa-x-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa-brands fa-youtube fa-lg"></i></a>
                                    <a href="#"><i class="fa-brands fa-pinterest fa-lg"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            
            <div class="container" >
                <div class="row" >
                    <div class="col-md-12">
                        <div class="de-flex sm-pt10">
                            <div class="de-flex-col">
                                <!-- logo begin -->
                                <div id="logo">
                                    <a href="index.html">
                                        <img class="logo-main" src="images/AOU_LOGO.png" style="width:200px; height:60px;" alt="">
                                        <img class="logo-scroll" src="images/AOU_LOGO.png" style="width:200px; height:60px;" alt="">
                                         <img class="logo-mobile" src="images/AOU_LOGO.png" style="width:200px; height:60px;" alt=""> 
                                        
                                    </a>
                                </div>
                                <!-- logo close -->
                            </div>
                            <div class="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><a class="menu-item" href="index.html">Home</a>
                                        
                                    </li>
                                    <li><a class="menu-item" href="#">Air Conditioning<br>&  Refrigeration</a>
                                        <ul>
                                            <li><a class="menu-item" href="sitesurvey.html">Site surveys, consultations and planning</a></li>
                                            <li><a class="menu-item" href="installation.html">Supply and Installation</a></li>
                                            <li><a class="menu-item" href="repair.html">Equipment repair</a></li>
                                            <li><a class="menu-item" href="maintenance.html">System maintenance</a></li>
                                            <li><a class="menu-item" href="pricing-plans.html">Pricing Plans</a></li>
                                            
                                        </ul>
                                    </li>
                                    <li><a class="menu-item" href="about.html">About Us</a></li>
                                    <li><a class="menu-item" href="projects.html">Clientele</a></li>
                                    <li><a class="menu-item" href="blog.html">Blog</a></li>
                                    <li><a class="menu-item" href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="de-flex-col">
                                <div class="menu_side_area">          
                                    <a href="contact.html" class="btn-main bg-color-2">Schedule Now</a>
                                    <span id="menu-btn" style="color:white;"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>`;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="section-dark">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-4 col-sm-6">
                        <img class="logo-main" src="images/AOU_LOGO.png" alt="" >
                        <div class="spacer-20"></div>
                        <p>We specialize in providing top-quality heating, ventilation, and air conditioning services tailored to your unique requirements. Our skilled technicians are dedicated to delivering reliable solutions that ensure your comfort and satisfaction.</p>

                        <div class="social-icons mb-sm-30">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://x.com/options_air"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6">
                                <div class="widget">
                                    <h5>Company</h5>
                                    <ul>                                        
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="product-details.html">Products</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <div class="widget">
                                    <h5>Our Services</h5>
                                    <ul>
                                            <li><a class="menu-item" href="sitesurvey.html">Site surveys, consultations and planning</a></li>
                                            <li><a class="menu-item" href="installation.html">Supply and Installation</a></li>
                                            <li><a class="menu-item" href="repair.html">Equipment repair</a></li>
                                            <li><a class="menu-item" href="maintenance.html">System maintenance</a></li>
                                            <li><a class="menu-item" href="pricing-plans.html">Pricing Plans</a></li>
                                            
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
                        <div class="widget">
                            <h5 class="id-color-2">24 Hours &amp; Emergencies</h5>
                            <h2 class="jarallax mb0 wow fadeInUp" data-wow-delay=".2s"><i class="icofont-phone-circle id-color-2"></i>+256 776 430 671</h2>

                            <div class="spacer-20"></div>

                            <div class="fw-bold text-white"><i class="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                            Bishop Campling Road, <br> 
                            Bugolobi - Nakawa Division <br>
                            P.O Box 118887, <br> Kampala - Uganda
                            

                            <div class="spacer-20"></div>

                            <div class="fw-bold text-white"><i class="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                            info@airoptionsuganda.com                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="subfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="de-flex">
                                <div class="de-flex-col">
                                    Copyright 2025 - AirOptions
                                </div>
                                <ul class="menu-simple">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
    }
}


customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
