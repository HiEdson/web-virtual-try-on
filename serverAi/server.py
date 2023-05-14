from flask import Flask, jsonify, request, make_response
import numpy as np
import os
import cv2
import base64
from io import BytesIO
from PIL import Image
import matplotlib.pyplot as plt
import sys
from flask_cors import CORS
from preprocessing.openpose.body import Body
from preprocessing.openpose.util import draw_bodypose
from get_parse_agnostic import saveParseAgnostic
from test_generator import main


app = Flask(__name__)
CORS(app)
import requests

imageSaveDirBase = './images/'

def processOpenPose(img, filename):
    body_estimation = Body(
        './preprocessing/openpose/model/body_pose_model.pth')
    test_image = img  # this will come as parameter. The person image
    oriImg = cv2.imread(test_image)  # B,G,R order
    candidate, subset = body_estimation(oriImg) 
    tempimg = np.zeros((oriImg.shape[0], oriImg.shape[1], 3), dtype=np.uint8)
    blackCanvasTest = draw_bodypose(tempimg, candidate, subset, filename)
    try:
        if not os.path.exists(imageSaveDirBase+"openpose/"):
            os.makedirs(imageSaveDirBase+"openpose/")
        plt.imsave(imageSaveDirBase+"openpose/"+filename+"_rendered.png", blackCanvasTest)
        return True
    except:
        return False

def humanParse(data_url, filename):
    image_data = base64.b64decode(data_url.split(',')[1])
    image = Image.open(BytesIO(image_data))
    np_image = np.array(image)
    try:
        if not os.path.exists(imageSaveDirBase+'image-parse-v3'):
            os.makedirs(imageSaveDirBase+'image-parse-v3')
        plt.imsave(imageSaveDirBase+"image-parse-v3/"+filename +".png",
                    np_image)
        return True
    except Exception as e:
        print('something went wrong ',e, file=sys.stdout)
        return False



@app.route('/preprocess', methods=['POST'])
    #Add a flag to represent heither or not the person is already preprocessed.
    #before any process, check if that image is already available in our image folder
    #if the image is from user, first reshape it
    #pay attention on images formats
def preprocess():
usar imagens default

    # img1 = cv2.imread('./test/image-parse-v3/00100_00.png')
    # img2 = cv2.imread('./test/image-parse-v3/00100_00.png')

    image_file = request.form['originalImage']
    parsedImg = request.form['parseImg']
    imageName = request.form['imageName']
    image_data = base64.b64decode(image_file.split(',')[1])
    image = Image.open(BytesIO(image_data))
    np_image = np.array(image)
    
    if not os.path.exists(imageSaveDirBase+'image/'):
        os.makedirs(imageSaveDirBase+'image/')
    plt.imsave(imageSaveDirBase+'image/'+imageName.split('.')[0]+'.jpg', np_image)
    
    #openpose
    isOpenPoseDone = processOpenPose(
        imageSaveDirBase+'image/'+imageName.split('.')[0]+'.jpg', imageName.split('.')[0])  # for image and keypoints.json

    # human parse
    # data_url = request.json['parseImg']
    isHumanParseDone = humanParse(parsedImg, imageName.split('.')[0])
    
    # Densepose
    #For now we will use the same model as human parse
    tempImg = cv2.imread(imageSaveDirBase+"image-parse-v3/"+imageName.split('.')[0]+".png")
    if not os.path.exists(imageSaveDirBase+"image-densepose"):
        os.makedirs(imageSaveDirBase+"image-densepose")
    plt.imsave(imageSaveDirBase+"image-densepose/"+imageName.split('.')[0]+".jpg", tempImg)
    
    #cloth mask
        #get it from folder, it will be already there


    #Parse agnostic
    isAgnosticDone = saveParseAgnostic(imageName.split('.')[0]+'.jpg', './images')
    # print('agnostic ====> ', isAgnosticDone, file=sys.stdout)

    return 'cool'

@app.route('/generate_img', methods=['POST'])
def generateImg():
    #here will go the viton generator code
    # main
    pass










if __name__ == '__main__':
    # img1 = cv2.imread('./test/image-parse-v3/00100_00.png')
    # img1[np.where(img1 == [255, 255, 255])] = [0, 0, 0]
    # # save the modified image
    # modified_image = Image.fromarray(img1)
    # modified_image.save("modified_image.png")

    # img2 = cv2.imread('./test/image-parse-v3/00100_00.png')
    # print(img1.shape,img2.shape, file=sys.stdout)

    app.run(debug=True)
