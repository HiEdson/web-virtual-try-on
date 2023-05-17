import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Clothing.css';
import modelImg from './03615_00.jpg'


const Clothing = (props) => {
    const [targetModel, setTargetModel] = useState(null)
    //props will be the id of that obj
    //we will fetch it from db and then display.
    let Obj = props.obj;


    let tryOnModal = <div class="modal fade" id="tryOnModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class=" modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <div className="text-center">
                        <h1 class="modal-title fs-3" id="exampleModalToggleLabel">size en uygun modeli seçin</h1>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-md-2" style={{ maxHeight: "60vh", overflowY: "scroll" }}>
                            {/* Should be mapped */}
                            <button className="mb-2 border-0" onClick={(e)=>{setTargetModel(modelImg)}}>
                                <img src={modelImg} style={{ width: "100%", height: "200px", objectFit: "fill" }} />
                            </button>
                            <button className="mb-2 border-0" onClick={(e)=>{setTargetModel(modelImg)}}>
                                <img src={modelImg} style={{ width: "100%", height: "200px", objectFit: "fill" }} />
                            </button>
                            <button className="mb-2 border-0" onClick={(e) => { setTargetModel("https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80")}}>
                                <img src="https://images.unsplash.com/photo-1613005798967-632017e477c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" style={{ width: "100%", height: "200px", objectFit: "fill" }} />
                            </button>

                        </div>

                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-5">
                                    {
                                        !targetModel ?
                                            <span></span> :
                                            <img src={targetModel} style={{ width: "100%", height: "350px" }} />
                                    }
                                    {/* <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" style={{ width: "100%", height: "350px" }} />  */}
                                </div>
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <i class="bi bi-plus-circle fs-1 align-middle"></i>
                                </div>
                                <div className="col-md-5">
                                    <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" style={{ width: "100%", height: "350px" }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <div class="text-center my-2">
                    <button class="btn btn-primary btn-lg" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Try On <i class="bi bi-magic"></i></button>
                </div>
            </div>
        </div>
    </div>


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
                            <hr/>
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
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#F44336" }}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#E91E63" }}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#9C27B0" }}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#673AB7" }}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#3F51B5" }}></button>
                                    </div>
                                    <div class="col-2">
                                        <button type="button" class="btn btn-color color-block" style={{ backgroundColor: "#2196F3" }}></button>
                                    </div>
                                </div>
                            </div>

                            <div class="container mt-5 d-flex justify-content-start">
                                <span className="text-secondary">Miktar:</span >
                                <div class="input-group mb-3 col-3 text-start mx-5" style={{ maxWidth: "200px", margin: "0" }}>
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                                    <input type="number" min={1} class="form-control text-center" width={12} placeholder="1" aria-label="quantity" aria-describedby="button-addon1" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
                                </div>
                            </div>
>>>> Connectar com backend, ver como pegar as imagens do back para o front and display it. Start with tests.(tomorow)

                            <div className="d-flex justify-content-start">
                                <span className="text-secondary">Toplam fiyat:</span >
                                <h4 className="mx-3">8.936,40 TL</h4>
                            </div>
                            <div className="mt-3 d-flex justify-content-around">
                                <button data-bs-toggle="modal" data-bs-target="#tryOnModal" className="btn btn-lg m-0" style={{ backgroundColor: "#14243b", color: '#cea949' }}>Bu Kıyafeti dene <i class="bi bi-magic"></i></button>
                                <button className="btn btn-lg" style={{ backgroundColor: "#14243b", color: '#cea949' }}>Sepete ekle <i class="bi bi-cart"></i></button>
                            </div>
                            {tryOnModal}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Clothing;