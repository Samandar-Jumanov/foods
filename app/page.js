import Link from "next/link";
import { Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width :"100%",
        height :"100vh"
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom 
       sx={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"  , textAlign : "center"}}>
        Welcome to NextLevelFood
      </Typography>
      <Typography variant="body1" color="primary" gutterBottom  sx={{  textAlign: "center" }}>
        Discover amazing meals and connect with a vibrant community of food enthusiasts.
      </Typography>
      <Link href="/meals" passHref>
        <Button variant="contained" color="primary" sx={{ marginBottom: "1rem" }}>
          Explore Meals
        </Button>
      </Link>
      <Link href="/community" passHref>
        <Button variant="contained" color="secondary">
          Join the Community
        </Button>
      </Link>
    </Box>
  );
}
