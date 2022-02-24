import Navbar from '../components/Navbar/Navbar';
import './Home.css';
import React from 'react'
import Particles from "react-tsparticles";





function Home() {
  const particlesInit = (main) => {
    console.log(main);

  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
      
     <div className = "home"> 
      
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{

            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 0,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#017c81",
              },
              links: {
                color: "#017c81",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <Navbar />
        
        
        <div class ="home">  
          <style>{'body { background-color: #abe4ea; }'}</style>
          
          <p class="header-title"> I am <span class = "header">Jordan Tran</span></p>
          
          <p class = "head-text-two"> Welcome to My Website</p>

          <div class="row">
            <div class ="column">
              <a target="_blank" href = {"//github.com/JordanTTran"} rel="noopener noreferrer" class="button"><img src={require("./Images/GitHub-Mark-120px-plus.png")} alt ="" class="github"/></a>
            </div>
            
            <div class = "column"> 
              <a target="_blank" href = {"//linkedin.com/in/jordantran-111/"} rel="noopener noreferrer"><img src={require("./Images/LI-In-Bug.png")} alt ="" class="linkedin"/></a>
            </div>

          </div>
         
        </div>
    </div>
  );
}

export default Home;
