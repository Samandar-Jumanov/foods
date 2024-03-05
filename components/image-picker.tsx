"use client"

import React, { useRef, useState } from "react";
import { Box, Button } from "@mui/material";

interface ImagePickerProps {
  name: string;
  labelVal: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ name, labelVal }) => {
  const [pickedImg, setPickedImg] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImagePick = () => {
    imageInput.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImg(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Box>
      <input
        type="file"
        id={name}
        name={name}
        accept="image/jpeg, image/png"
        ref={imageInput}
        style={{ display: 'none' }}
        onChange={handleFileChange} 
      />
      {pickedImg ?  <Box component="img" src={pickedImg} alt="Picked image" sx={{ maxWidth: '20%', height: 'auto', mt: 2 }} />  :
          <Button variant="contained" color="primary" onClick={handleImagePick}>
          Upload an image
        </Button>
    }
      <label htmlFor={name}>{labelVal}</label>
      
    </Box>
  );
};

export default ImagePicker;
