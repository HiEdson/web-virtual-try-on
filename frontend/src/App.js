import {react, useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import tagImg from './03615_00.jpg'
import * as bodySegmentation from '@tensorflow-models/body-segmentation';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
// Register WebGL backend.
import '@tensorflow/tfjs-backend-webgl';
import LandingPage from './LandingPage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from './Footer';
import Clothing from './Clothing';


function App(){
  const [img, setImg] = useState(null)
  const [imgName, setImgName] = useState(null)
  // const [argImg, setArgImg] = useState('')
  const [imageData, setImageData] = useState(null);

  const loadModel = async()=>{
    const model = bodySegmentation.SupportedModels.BodyPix;
    const segmenterConfig = {
      architecture: 'MobileNetV1',
      outputStride: 8,
      multiplier : 0.75,
      quantBytes: 2
    };
    let segmenter
    console.log('loaded the mdel')
    try{
      segmenter = await bodySegmentation.createSegmenter(model, segmenterConfig);
      console.log('segmenter successfully loaded')
    } catch (err){
      console.log('error loading segmenter...')
      if (err instanceof Error){
         console.log('an error accured')
      }
    }
    //inference
    const segmentationConfig = { multiSegmentation: false, segmentBodyParts: true };
    try {
      // const base64Img = img.split(",")[1];
      const onePerson = await segmenter.segmentPeople(img, segmentationConfig);
      // console.log(onePerson[0])

      //draw it
      //essa é a imagem que quero!
      const coloredPartImage = await bodySegmentation.toColoredMask(onePerson[0], bodySegmentation.bodyPixMaskValueToRainbowColor, { r: 0, g: 0, b: 0, a: 1 });
      setImageData(coloredPartImage)
      console.log('done')
      // const opacity = 1;
      // const flipHorizontal = false;
      // const maskBlurAmount = 0;
      // const pixelCellWidth = 1.0;
      // const canvas = document.getElementById('canvas');

      // await bodySegmentation.drawMask(
      //   canvas, img, coloredPartImage,
      //   opacity,
      //    maskBlurAmount,
      //   flipHorizontal,
      //   //  pixelCellWidth
      //   );
    } catch (err) {
      console.log('error during inference...')
      if (err instanceof Error) {
        console.log('an error accured -->', err)
      }
    }
  }

  useEffect(() => {
    // loadModel();
    if(img!==null){
      loadModel();
    }
  }, [img])

  const handleFileInputChange = (event) => {
    setImgName(event.target.files[0].name)
    // console.log(event.target.files[0].name)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imgElement = new Image();
      imgElement.src = reader.result;
      setImg(imgElement);
    };
    reader.readAsDataURL(file);
  };

  useEffect(()=>{
    // console.log(coloredPartImage)

    if(imageData!==null){
      const formData = new FormData();
      // console.log('entrou no envio1 ')
      const canvas = document.createElement('canvas');
      canvas.width = imageData?.width;
      canvas.height = imageData?.height;
      const ctx = canvas.getContext('2d');
      ctx.putImageData(imageData, 0, 0);
      const dataURL = canvas.toDataURL();

      formData.append('originalImage', img.src);
      formData.append('parseImg', dataURL);
      formData.append('imageName', imgName)
      
      axios.post('http://localhost:5000/preprocess',formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });
      setImageData(null)
    }
  }, [imageData])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path='/:ClothName' element={<Clothing/>}/>
        </Routes>
      </BrowserRouter>


     

      {/* <body style={{ marginTop: "100px", marginBottom:"100px" }}>
        <div className='m-5 text-center'>
          <input type="file" accept="image/*" onChange={(event) => {
            handleFileInputChange(event)
          }} />
          {/ <input type="file" onChange={(e) => { handleFileInputChange(e)}} /> /}
       </div>
        <div className='row container'>
          <div className='col-md-6'>
            <img src={img && <img src={img} alt="Selected image" />} style={{width:"100%", height:"500px"}}/>
          </div>
          <canvas id="canvas" width="500" height="500"></canvas>
          {/* <div id='canvas'>

          </div> /}
        </div>
      </body> */}
    </div>
  );
}

export default App;
