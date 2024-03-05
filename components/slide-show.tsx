"use client"

import React , { useState , useEffect } from "react"
import burgerImg from '../assets/burger.png';
import curry from '../assets/curry.png';
import dumplings from '../assets/dumplings.jpg';
import macncheese from '../assets/macncheese.jpg';
import pizza from '../assets/pizza.png';
import tomoto from '../assets/tomoto-salad.jpg'
import schnitzel from '../assets/schnitzel.jpg'
import {  Box } from "@mui/material";
import Image from "next/image";


 const slideImages = [
    { img: burgerImg, alt: "Delicious burger" },
    { img: curry, alt: "Spicy curry" },
    { img: dumplings, alt: "Steamed dumplings" },
    { img: macncheese, alt: "Creamy mac and cheese" },
    { img: pizza, alt: "Cheesy pizza" },
    { img: tomoto, alt: "Fresh tomato salad" },
    { img: schnitzel, alt: "Crispy schnitzel" }
];


export const SlideShow = () => {
    const [currIndex , setCurrIndex  ] = useState(null);
    
    useEffect(() => {
        const interVal = setInterval(() =>{
               setCurrIndex(( prevIdx : number ) =>{
                       prevIdx < slideImages.length -1 ? prevIdx++ : 0 
               })
        } , 5000);

        return ( clearInterval(interVal))
    });

    return (
          <Box>  
                  {slideImages.map((image , index ) =>{
                          return (
                            <Image 
                            key={index}
                            src={image.img}
                             alt={image.alt}
                         />
                          )
                  })}
          </Box>
    )
};


