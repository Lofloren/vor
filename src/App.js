import React from 'react';
import Particles from 'react-particles-js';
import posed from 'react-pose';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';



function Index() {

return ( <div style={{color: 'white', textAlign : 'center', padding: '5%'}}>
  Coming soon...
  </div>)
  
  
}

function Privacy() {
  return (
  <div style={{color: 'white', textAlign : 'center', padding: '5%'}}>
  <h2>Privacy Policy</h2>
  
  <p>Your privacy is important to me. It is my policy to respect your privacy regarding any information I may collect from you through my games.</p>
  <p>I will only ask for personal information when I truly need it to provide a service to you. I collect it by fair and lawful means, with your knowledge and consent. I will also let you know why I'm collecting it and how it will be used.</p>
  <p>I only retain collected information for as long as necessary to provide you with your requested service. What data I store, I’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
  <p>I don’t share any personally identifying information publicly or with any third-parties, except when required to by law.</p>
  <p>My games link to external services that are not operated by me. Please be aware that I have no control over the content and practices of these services, and cannot accept responsibility or liability for their respective privacy policies.</p>
  <p> </p>
  <p style={{textDecoration: 'underline'}}> Unity Ads</p>
  <p/>
  <p>This service provides users the option of viewing advertisements from a third-party in exchange for in-game rewards. I don't share any collected information with these third-party advertisers but they may collect and store their own information. The privacy policies of the Advertisements services used are linked below</p>
  <p/>

  <p/>
  <p style={{textDecoration: 'underline'}}> Unity Analytics</p>
  <p/>
  <p>This application collects general usage data using Third-party Analytics services. For example, this allows me to know things like the amount of players I have and what types of hardware they use. The privacy policies of the Analytics services used are linked below.</p>
  <p/>
  <p><a href='https://unity3d.com/legal/privacy-policy' style={{textDecoration: 'none'}}> Unity Privacy Policy </a> </p>
  <p/>
  <p>You are free to refuse my request for your personal information, or to examine or have destroyed any information collected on you, with the understanding that I may be unable to provide you with some of your desired services.</p>
  <p>Your continued use of my games will be regarded as acceptance of my practices around privacy and personal information. If you have any questions about how I handle user data and personal information, feel free to contact me, Alexander Motch, at: </p>
  <p> alexandermotch@gmail.com </p>

  <p>This policy is effective as of 14 July 2019.</p>
  <p/>


  </div>);
}



function App() {

  return (
   
    <Router>
       
                
      <div id="particles">
      <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },

                                    "number": {
                                      "value": 10,
                                      "density": {
                                        "enable": false,
                                        "value_area": 800
                                      }
                                    },
                        "size": {
                            "value": 1
                        },
                        "move": {
                          "enable": true,
                          "speed": 12,
                          "direction": "none",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": true,
                          "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                          }
                        },
                        "polygon": {
                          "nb_sides": 2
                        },
                    },
                    
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": ["repulse", "bubble"]
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 800,
                          "line_linked": {
                            "opacity": 0
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 5,
                          "duration": 5,
                          "opacity": 0.5,
                          "speed": 3,
                          "line_linked": {
                            "opacity": 0
                          }
                        },
                        "repulse": {
                          "distance": 10,
                          "duration": 0.2,
                          "line_linked": {
                            "opacity": 0
                          }
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    }
                }}
                style={{
                        width: '100%',
                       
                 }}
                >

                  </Particles> 
               
        <nav>
                 <div  className="spacing">
              <Link to="/" className="MenuLink">Home</Link>
              </div>
              <div  className="spacing">
              <Link to="/Privacy/" className="MenuLink">Privacy</Link>
              </div>
         
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/Privacy" component={Privacy} />
        
      

      </div>
      
    </Router>
  );
}


export default App;



