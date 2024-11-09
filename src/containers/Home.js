import React, {Component} from 'react';

class Home extends React.Component{
     render(){
         return(
     <div>
                            
           

        <a href="javascript:;" class="nav_toggle" data-toggle="offcanvas">
            <span></span>
        </a>



    <div class="side_nav">
    	<div class="navbar-collapse offcanvas-collapse">
    		<a href="javascript:;" class="nav_toggle" data-toggle="offcanvas">
	            <span></span>
	        </a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="">Deals & News <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Showroom & Service Centres</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Concept Cars</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Sell Your Car</a>
                </li>



                <li class="nav-item active">
                    <a class="nav-link" href="">Insurance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Ownership</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Career</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Blog</a>
                </li>
            </ul>
        </div>
    </div>


    <div class="hero">
        <div class="wrapper">
            <div class="hero_slide">
               {/*  <!-- ==================================  SLIDE 1 ================================== --> */}
                <div class="hero_slide_single hero_slide_single_in section">
                    <div class="slide" data-anchor="slide1">
                        <img src="assets/image/hero_1.jpg" alt="" class="hero_slide_single_img" />
                        <div class="hero_slide_single_dtls">
                            <h1 class="text-white mb-30">
                                Captur
                            </h1>

                            <a href="" class="button btn_white_border btn_rounded">
                                Discover 
                            </a>

                            <a href="" class="button btn_white_border btn_rounded">
                                Subscribe 
                            </a>
                        </div>
                    </div>
                    <div class="slide" data-anchor="slide2">
                        <img src="assets/image/hero_2.jpg" alt="" class="hero_slide_single_img"/>
                        <div class="hero_slide_single_dtls">
                            <h1 class="text-white mb-30">
                                Koleos
                            </h1>

                            <a href="" class="button btn_white_border btn_rounded">
                                Discover 
                            </a>

                            <a href="" class="button btn_white_border btn_rounded">
                                Subscribe 
                            </a>
                        </div>
                    </div>
                    <div class="slide" data-anchor="slide2">
                        <img src="assets/image/hero_3.png" alt="" class="hero_slide_single_img" />
                        <div class="hero_slide_single_dtls">
                            <h1 class="text-white mb-30">
                                Megane R.S
                            </h1>

                            <a href="" class="button btn_white_border btn_rounded">
                                Discover 
                            </a>

                            <a href="" class="button btn_white_border btn_rounded">
                                Subscribe 
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- ==================================  SLIDE 1 END ================================== --> */}

                {/* <!-- ==================================  SLIDE 2 ================================== --> */}
                <div class="hero_slide_single section">
                    <img src="assets/image/hero_2.jpg" alt="" class="hero_slide_single_img" />
                    <div class="hero_slide_single_dtls">
                        <h1 class="text-white">
                            Subscribe to freedom
                        </h1>

                        <p class="mb-30 text-white">
                            Subscribe to a Renault from RM1,299/month
                        </p>

                        <a href="" class="button btn_white_border btn_rounded">
                            Discover freedom
                        </a>
                    </div>
                </div>
                {/* <!-- ==================================  SLIDE 2 END ================================== --> */}

               {/*  <!-- ==================================  SLIDE 3 ================================== --> */}
                <div class="hero_slide_single section">
                    <img src="assets/image/hero_3.png" alt="" class="hero_slide_single_img" />
                    <div class="hero_slide_single_dtls">
                        <h1 class="text-white">
                            Discover Passion
                        </h1>

                        <p class="mb-30 text-white">
                            Renault and motorsports, over 120 years in the making
                        </p>

                        <a href="" class="button btn_white_border btn_rounded">
                            Discover more
                        </a>
                    </div>
                </div>
               {/*  <!-- ==================================  SLIDE 3 END ================================== -->
 */}
               {/*  <!-- ==================================  SLIDE 4 ================================== --> */}
                <div class="hero_slide_single section">
                    <img src="assets/image/hero_4.jpg" alt="" class="hero_slide_single_img" />
                    <div class="hero_slide_single_dtls">
                        <h1 class="text-white">
                            Test drive on your terms
                        </h1>

                        <p class="mb-30 text-white">
                            Enjoy 3-hour pressure test drive
                        </p>

                        <a href="" class="button btn_white_border btn_rounded">
                            Discover more
                        </a>
                    </div>
                </div>
                {/* <!-- ==================================  SLIDE 4 END ================================== --> */}
            </div>
        </div>
    </div>

    

    <a href="javascript:;" class="sticky_chat">
        <img src="assets/image/chat.png" alt="" />
    </a>
</div>      
                            
     );

    }
}
export default Home