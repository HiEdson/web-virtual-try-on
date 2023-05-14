import json
from os import path as osp
import os
import numpy as np
from PIL import Image, ImageDraw
import argparse
from tqdm import tqdm
import sys


def get_im_parse_agnostic(im_parse, pose_data, w=768, h=1024):
    parse_array = np.array(im_parse)
    parse_array = parse_array[:, :, 0]

    # print('the shape 1 is ------> ',parse_array.shape, file=sys.stdout)

    parse_upper = ((parse_array == 5).astype(np.float32) +
                    (parse_array == 6).astype(np.float32) +
                    (parse_array == 7).astype(np.float32))
    parse_neck = (parse_array == 10).astype(np.float32)

    r = 10
    agnostic = im_parse.copy()
    # print('the shape 1 is ------> ',im_parse, file=sys.stdout)

    # mask arms
    for parse_id, pose_ids in [(14, [2, 5, 6, 7]), (15, [5, 2, 3, 4])]:
        mask_arm = Image.new('L', (w, h), 'black')
        mask_arm_draw = ImageDraw.Draw(mask_arm)
        i_prev = pose_ids[0]
        for i in pose_ids[1:]:
            if (pose_data[i_prev, 0] == 0.0 and pose_data[i_prev, 1] == 0.0) or (pose_data[i, 0] == 0.0 and pose_data[i, 1] == 0.0):
                continue
            mask_arm_draw.line([tuple(pose_data[j]) for j in [i_prev, i]], 'white', width=r*10)
            pointx, pointy = pose_data[i]
            radius = r*4 if i == pose_ids[-1] else r*15
            mask_arm_draw.ellipse((pointx-radius, pointy-radius, pointx+radius, pointy+radius), 'white', 'white')
            i_prev = i        
        print('the shape 1 is ------> ',parse_array.shape, file=sys.stdout)
        parse_arm = (np.array(mask_arm) / 255) * (parse_array == parse_id).astype(np.float32)
        

        agnostic.paste(0, None, Image.fromarray(np.uint8(parse_arm * 255), 'L'))

    # mask torso & neck
    agnostic.paste(0, None, Image.fromarray(np.uint8(parse_upper * 255), 'L'))
    agnostic.paste(0, None, Image.fromarray(np.uint8(parse_neck * 255), 'L'))

    return agnostic


def saveParseAgnostic(im_name, data_path):  #data_path = base dir
    # load pose image
    pose_name = im_name.replace('.jpg', '_keypoints.json') #from image
    try:
        with open(osp.join(data_path, 'openpose-json', pose_name).replace('\\','/'), 'r') as f:
            pose_label = json.load(f)
            pose_data = pose_label['people'][0]['pose_keypoints_2d']
            pose_data = np.array(pose_data)
            pose_data = pose_data.reshape((-1, 3))[:, :2]
    except IndexError:
        print(pose_name)

    # load parsing image
    parse_name = im_name.replace('.jpg', '.png')
    im_parse = Image.open(
        osp.join(data_path, 'image-parse-v3', parse_name))

    agnostic = get_im_parse_agnostic(im_parse, pose_data)
    
    if not os.path.exists(data_path+'/image-parse-agnostic-v3.2/'):
        os.makedirs(data_path+'/image-parse-agnostic-v3.2/')

    agnostic.save(osp.join(data_path+'/image-parse-agnostic-v3.2', parse_name))

    return True
