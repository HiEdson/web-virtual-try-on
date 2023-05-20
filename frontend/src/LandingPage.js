import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LandingImg from './landingwoutbg.png'
import './LandingPage.css'
import Footer from "./Footer";
import Navbar from './Navbar';
import axios from "axios";

const LandingPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then((response) => {
                console.log('got the data')
                console.log(response.data)
                setProducts(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])


    let productsList = products ? products.map((item, key) => {
        return(
            <div className="col-md-3 mb-5" key={item?.id}>
                <div class="card clothCard">
                    <Link to={`/${item?.product_name + "-" + item?.id}`}>
                        {/* https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg */}
                        <img src={`http://localhost:5000/static/cloth/${item.image}`} class="card-img-top" alt={`imagem da roupa - ${item?.product_name}`} />
                        <div class="card-body">
                            <h6 class="card-title">Cerrahpaşa {item?.product_name}</h6>
                            <div className="d-flex flex-column">
                                <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> ({item?.review})</small>
                                <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                <small className="fw-bold fs-4">{item?.price} tl</small>
                            </div>
                            <div className="text-center mt-3">
                                <Link to={'/something'} href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></Link>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }) : <span>edson</span>

    console.log(products)
    return (
        <div style={{ backgroundColor: "rgba(18,39,61,0.15)" }}>
            <Navbar />
            <div className="MainImg container-fluid" style={{ maxHeight: "400px", marginBottom: "10%" }}>
                <div className="row">
                    <div className=" col-md-7 d-flex align-items-center ">
                        <div className="container">
                            <h1 className="fs-2 mx-5">Satın almadan denemek mümkün mü?</h1>
                            <h2 className="mx-5">Tabiki canım...</h2>

                            <a href="#" class="text-decoration-none mx-5">
                                <button class="btn btn-outline-light btn-lg px-5 mt-3" style={{ backgroundColor: "#14243b", color: "#cea949" }}>
                                    Keşfet <i class="bi bi-magic"></i>
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <img src={LandingImg} className="img-fluid" />
                    </div>
                </div>
            </div>

            <section className="container">
                <div className="row">

                    {productsList}


                    {/* <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <Link to={'/something'}>
                                <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                                <div class="card-body">
                                    <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                    <div className="d-flex flex-column">
                                        <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                        <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                        <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>
                                    </div>
                                    <div className="text-center mt-3">
                                        <Link to={'/something'} href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div> */}

                    {/* <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                            <div class="card-body">
                                <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                <div className="d-flex flex-column">
                                    <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                    <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                    <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>

                                </div>
                                <div className="text-center mt-3 seeProd">
                                    <a href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                            <div class="card-body">
                                <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                <div className="d-flex flex-column">
                                    <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                    <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                    <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>

                                </div>
                                <div className="text-center mt-3 seeProd">
                                    <a href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                            <div class="card-body">
                                <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                <div className="d-flex flex-column">
                                    <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                    <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                    <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>

                                </div>
                                <div className="text-center mt-3 seeProd">
                                    <a href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                            <div class="card-body">
                                <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                <div className="d-flex flex-column">
                                    <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                    <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                    <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>

                                </div>
                                <div className="text-center mt-3 seeProd">
                                    <a href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-5">
                        <div class="card clothCard">
                            <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" class="card-img-top" alt="imagem da roupa" />
                            <div class="card-body">
                                <h6 class="card-title">Cerrahpaşa Tıp Fakültesi Model 9 Üç İplik Şardonlu Hoodie</h6>
                                <div className="d-flex flex-column">
                                    <small class="card-text"><span className="text-warning"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-half"></i></span> (200)</small>
                                    <small className="fw-bold" style={{ color: "red" }}><i class="bi bi-graph-down-arrow"></i>Son 30 Günün En Düşük Fiyatı!</small>
                                    <small className="fw-bold fs-4">{Math.round(Math.random() * (300 - 75) + 75)} tl</small>

                                </div>
                                <div className="text-center mt-3 seeProd">
                                    <a href="#" class="btn" style={{ backgroundColor: "#14243b", color: "#cea949" }}>Kıyafeti dene <i class="bi bi-magic"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default LandingPage;



// add to github