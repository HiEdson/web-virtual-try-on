import React from "react";


const Navbar=()=>{

    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#14243b" }}>
            <div class="container-fluid">
                {/* <!-- Image on the left side --> */}
                {/* <a class="navbar-brand" href="#"><img src="path-to-image.png" alt="Logo" />
                </a> */}
                <b className="fs-2" style={{ color:'#cea949'}}>CampStyle</b>

                {/* <!-- Center aligned search bar --> */}
                <form class="d-flex mx-auto my-lg-0">
                    <input class="form-control me-2 rounded-pill px-5" type="search" placeholder="Search your style" aria-label="Search" />
                    <button class="btn btn-outline-light rounded-circle" type="submit"><i class="bi bi-search" style={{ color: '#cea949' }}></i></button>
                </form>

                {/* <!-- Login and Cart on the right side --> */}
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-light mx-2" style={{ color: '#cea949' }}>Login</button>
                    <a href="#" class="text-decoration-none">
                        <button class="btn btn-outline-light">
                            <i class="bi bi-cart" style={{ color: '#cea949' }}></i>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;