import os
import shutil
import random

def get_image_names(directory):
    image_names = []
    for filename in os.listdir(directory):
        if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):
            image_name = os.path.splitext(filename)[0]
            image_names.append(image_name)
    return image_names

imagesNames = get_image_names('./cloth')

# print(imagesNames)


def get_files_with_prefix(directory, prefixes):
    file_list = []
    for filename in os.listdir(directory):
        for prefix in prefixes:
            if filename.startswith(prefix):
                file_list.append(filename)
                break  # Break the inner loop once a match is found
    return file_list

def move_files(source_directory, destination_directory, filenames):
    os.makedirs(destination_directory, exist_ok=True)
    for filename in filenames:
        source_path = os.path.join(source_directory, filename)
        destination_path = os.path.join(destination_directory, filename)
        shutil.copy(source_path, destination_path)


# Example usage:
source_directory = './test/cloth-mask'
destination_directory = './cloth-mask'
# prefixes = ['00071_00', '00259_00', '00278_00', '00373_00', '00828_00', '01123_00', '01163_00', '01341_00', '01713_00', '03178_00', '03445_00', '04783_00', '07694_00', '07913_00', '08217_00', '09940_00', '13198_00', '14675_00']
files = get_files_with_prefix(source_directory, imagesNames[0:100])
move_files(source_directory, destination_directory, files)
