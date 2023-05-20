import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Clothing.css';
// import modelImg from './03615_00.jpg'
import axios from 'axios';


const Clothing = (props) => {
    const [productId, setProductId] = useState(null)
    const [targetModel, setTargetModel] = useState(null)
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [product, setproduct] = useState(null)
    const [cloth, setCloth] = useState(null)
    const [notValidmodelSms, setNotValidmodelSms] = useState(false)
    //props will be the id of that obj
    //we will fetch it from db and then display.
    let Obj = props.obj;

    useEffect(() => {
        window.scrollTo(0, 0)
        const currentURL = window.location.href;
        const stringAfterDash = currentURL.substring(currentURL.lastIndexOf("-") + 1);
        setProductId(stringAfterDash)
        // console.log(stringAfterDash)
        if (productId) {
            axios.get(`http://localhost:5000/product/${productId}`)
                .then((response) => {
                    // console.log('target obj------------>', response.data[0])
                    setproduct(response.data[0])
                    setPrice(response.data[0].price)
                    setCloth(response.data[0].image)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }, [productId])

    const generateTryOn = (e) => {
        e.preventDefault()
        if (!targetModel) {
            setNotValidmodelSms(true)
            return
        }

        axios.get(`http://localhost:5000/product/generate_try_on`, {
            params: {
            targetModel: targetModel,
            cloth: cloth
        }})
            .then((response) => {
            })
            .catch((e) => {
                console.log(e)
            })
    }



let models = ['00071_00.jpg', '00259_00.jpg', '00278_00.jpg', '00373_00.jpg', '00828_00.jpg',
    '01123_00.jpg', '01163_00.jpg', '01341_00.jpg', '01713_00.jpg', '03178_00.jpg', '03445_00.jpg',
    '04783_00.jpg', '07694_00.jpg', '07913_00.jpg', '08217_00.jpg', '09940_00.jpg', '13198_00.jpg', '14675_00.jpg']

let modelList = models.map((img, key) => {
    return (
        <button className="mb-2 border-0" onClick={(e) => { setTargetModel(img); setNotValidmodelSms(false) }}>
            <img src={`http://localhost:5000/static/image/${img}`} style={{ width: "100%", height: "200px", objectFit: "fill" }} />
        </button>
    )
})

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
                        {modelList}
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-5">
                                {
                                    !targetModel ?
                                        <span></span> :
                                        <img src={`http://localhost:5000/static/image/${targetModel}`} style={{ width: "100%", height: "350px" }} />
                                }
                                {/* <img src="https://productimages.hepsiburada.net/s/70/1000/110000011538476.jpg" style={{ width: "100%", height: "350px" }} />  */}
                            </div>
                            <div className="col-md-2 d-flex justify-content-center align-items-center">
                                <i class="bi bi-plus-circle fs-1 align-middle"></i>
                            </div>
                            <div className="col-md-5">
                                <img src={`http://localhost:5000/static/cloth/${product?.image}`} style={{ width: "100%", height: "350px" }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div className="text-center my-2">
                {notValidmodelSms ?
                    <div className="alert alert-danger mt-2" role="alert">
                        Bir model seçmelisiniz!
                    </div> : <span></span>
                }
                <button className="btn btn-primary btn-lg"
                    onClick={(e) => { generateTryOn(e) }}>Try On <i className="bi bi-magic"></i></button>
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
                        <img src={`http://localhost:5000/static/cloth/${product?.image}`} style={{ width: "100%" }} />
                    </div>

                    <div className="col-md-6">
                        <h4>Cerrahpaşa {product?.product_name}</h4>
                        <hr />
                        <h1>{product?.price} TL <span className="fs-5 text-secondary">/adet</span></h1>
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
                        {/* <img src='http://localhost:5000/static/image/00071_00.jpg'/> */}
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
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1"
                                    onClick={(e) => {
                                        if (amount >= 1) {
                                            setAmount(amount - 1)
                                        }
                                    }}>
                                    -
                                </button>
                                <input type="number" min={1} onChange={(e) => {
                                    const value = parseInt(e.target.value, 10); // Parse the value as an integer
                                    if (!isNaN(value) && value > 0) {
                                        setAmount(value);
                                    }
                                }} value={amount}
                                    class="form-control text-center" width={12} placeholder="1" aria-label="quantity" aria-describedby="button-addon1" />
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                                    onClick={() => { setAmount(amount + 1) }}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-start">
                            <span className="text-secondary">Toplam fiyat:</span >
                            <h4 className="mx-3">{(price * amount).toFixed(2)} TL</h4>
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