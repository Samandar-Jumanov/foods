import React from 'react';
import { Button, Typography, Toolbar, AppBar } from '@mui/material';
import Link from 'next/link';
import { MainHeaderBackGround } from './main-header-background';
import { usePathname } from "next/navigation";
import { useSession  , signIn } from "next-auth/react";

const MainHeader: React.FC = () => {
    const path = usePathname();
    const { data: session , loading} = useSession();

    const isMealsPage = path.startsWith("/meals");
    const isCommunityPage = path === "/community";

    return (
        <>
            <MainHeaderBackGround />
            <AppBar position="fixed" 
              sx={{ backgroundColor: 'black', boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1 }}
           >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            Foods
                        </Link>
                    </Typography>
                    <div>
                        <Link href="/" passHref>
                            <Button variant="text" color="inherit" sx={{ color: path === '/' ? 'yellow' : 'white' }}>
                                Home
                            </Button>
                        </Link>
                        {session || loading  ? (
                            <>
                                <Link href="/meals" passHref>
                                    <Button variant="text" color="inherit" sx={{ color: isMealsPage ? 'yellow' : 'white' }}>
                                        Meals
                                    </Button>
                                </Link>
                                <Link href="/community" passHref>
                                    <Button variant="text" color="inherit" sx={{ color: isCommunityPage ? 'yellow' : 'white' }}>
                                        Community
                                    </Button>
                                </Link>
                                    <Button variant="text" color="error" >
                                        Log out 
                                    </Button>
                            </>
                        ) : (
                                <Button  onClick={() => signIn()}
                                variant="contained" color="primary">
                                    Sign in
                                </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default MainHeader;
