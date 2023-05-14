import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Clothing.css';
const Clothing = (props) => {
    //props will be the id of that obj
    //we will fetch it from db and then display.
    let Obj = props.obj;

    return (
        <div style={{ backgroundColor: "rgba(18,39,61,0.15)" }}>
            <Navbar />

            <div className="my-5">
                <section className="container py-5 bg-white rounded-4">
                    <div className="row pb-5">
                        <div className="col-md-6">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" style={{ width: "100%" }} />
                        </div>

                        <div className="col-md-6">
                            <h4>Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h4>
                            <hr />
                            <h1>8.936,40 TL <span className="fs-5 text-secondary">/adet</span></h1>
                            <div className="d-flex justify-content-start mt-5">
                                <span className="text-secondary">Beden:</span>
                                <div className="mx-2">
                                    <button className="btn border border-1 mx-2">XXS</button>
                                    <button className="btn border border-1 mx-2">XS</button>
                                    <button className="btn border border-1 mx-2">S</button>
                                    <button className="btn border border-1 mx-2">M</button>
                                    <button className="btn border border-1 mx-2">L</button>
                                    <button className="btn border border-1 mx-2">XL</button>
                                </div>
                            </div>

                            <div class="d-flex mt-5">
                                <span className="text-secondary">Renk:</span>
                                <div class="row mx-2">
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#F44336"}}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#E91E63"}}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#9C27B0"}}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#673AB7"}}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#3F51B5"}}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{backgroundColor: "#2196F3"}}></button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 d-flex">
                                <div class="container text-center">
                                    <span className="text-secondary">Miktar:</span >
                                    <div class="input-group mb-3 col-3">
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                        <input type="text" class="form-control text-center" placeholder="0" aria-label="quantity" aria-describedby="button-addon1"/>
                                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                    </div>
                                </div>

                                {/* <span className="text-secondary">Miktar:</span>
                                <div>
                                    <button className=" bg-secondary rounded-circle"> - </button>
                                </div> */}

                            </div>


                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Clothing;