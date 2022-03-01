
import Navbar from '../components/Navbar/Navbar';
import './Projects.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Projects() {
    AOS.init({duration: 2000});
  return (     
     <div className = "projects"> 
  
        <Navbar />

        <div class ="inner">
            <p class="project-header"data-aos="fade-up" data-aos-delay="100">Project Portfolio</p>
            
            
            <div class="container" data-aos="fade-up" data-aos-delay="500">
                
                <div class = "outline-card" >
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <div class ="underline-card">
                            <img src={require("./Images/stepforwardwebsite.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                        </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Step Forward Website</p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Website created for a school club. Made using HTML, CSS, and Javascript.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/StepForward-Website"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                
                <div class = "outline-card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/habittrackerapp.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Habit Tracker App</p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Basic habit tracker app. Made using Java and Android Studios. 
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/Habit-Tracker-App"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                <div class = "outline-card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/poker2.PNG")}alt ="" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Poker Game</p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Texas Hold 'em Poker game mading using Java.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/Poker-Game"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                <div class = "outline-card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/inventorytracker.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>PS5 Inventory Bot </p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Tracks PS5 inventory and automatically purchases when in stock. 
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/PS5-Bot"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                <div class = "outline-card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/personalwebsite3.png")}alt =""  class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title-adjust-2">
                        <p>Personal Website</p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Personal website made using React and CSS.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/PersonalWebsite"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                
                <div class = "outline-card">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/databasewebsite.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Restaurant Database </p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        A custom made database connected to a website. Made using HTML, CSS, and PHP.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/Restaurant-Database-Website"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                
                <div class = "outline-card incomplete">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/Resume.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Basic Inventory Tracker </p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Very basic inventory tracker made using Python.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/Very-Basic-Inventory-Tracker"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                
                <div class = "outline-card incomplete">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                    <div class ="underline-card">
                        <img src={require("./Images/Resume.png")}alt ="" width="300" height="300" class ="image-outline"></img>
                    </div>
                    <CardContent>
                    <div class = "card-title">
                        <p>Basic Inventory Tracker </p>
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        Very basic inventory tracker made using Python.
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank" href = {"//github.com/JordanTTran/Very-Basic-Inventory-Tracker"} rel="noopener noreferrer">
                        Go To Project
                        </Button>
                    </CardActions>
                    </Card>
                </div>
           
            </div>

        </div>

    </div>
  );
}

export default Projects;
