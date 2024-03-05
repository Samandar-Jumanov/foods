import React from 'react';
import { Button , Typography , Toolbar , AppBar } from '@mui/material';
import Link from 'next/link'
import { MainHeaderBackGround } from './main-header-background';

// import Image from 'next/image';
// import ImageLogo from "./logo.png";


const MainHeader: React.FC = () => {
   return (
      <>
      <MainHeaderBackGround />
      <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
         <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Header 
            </Typography>
            <div> 
               <Link href="/" passHref>
                  <Button  variant="text" color="inherit" sx={{ color: 'white' }}>
                     Home
                  </Button>
               </Link>
               <Link href="/meals" passHref>
                  <Button  variant="text" color="inherit" sx={{ color: 'white' }}>
                     Meals 
                  </Button>
               </Link>
               <Link href="/community" passHref>
                  <Button  variant="text" color="inherit" sx={{ color: 'white' }}>
                      Community 
                  </Button>
               </Link>
            </div> 
         </Toolbar>
      </AppBar> 
       </>
   );
};

export default MainHeader;