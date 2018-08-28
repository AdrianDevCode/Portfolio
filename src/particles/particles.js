import React, {Component} from 'react';
import Particles from 'react-particles-js';

class CustomParticles extends Component{
  
    render(){
        return (
            <Particles 
              params={{
                particles: {
                    "nb": 50,
                    "number": {
                        "value": 50,
                        "density": {
                            "enable": true,
                            "value_area": 700
                        }
                    },
                    "color": {
                        "value": "#66fcf1"
                    },
                    "shape": {
                        "type": "polygon",
                        "stroke": {
                            "width": 0,
                            "color": "white"
                        },
                        "polygon": {
                            "nb_sides": 7
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 200,
                        "color": "#ffffff",
                        "opacity": 0.6,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                interactivity: {
                    "detect_on": "window",
                    "events": {
                        "onresize": {
                            "enable": true,
                            "density_auto": true,
                            "density_area": 400,
                        },
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "onclick": {
                        "enable": false,
                        "mode": "push"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 200,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 10,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 100
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  retina_detect: true,
              }}
              style={{
                width: '100%',
                position: 'fixed',
                height: '100%',
                backgroundColor: '#0b0c10',
              }}
            />
        );
    };
 
}
export default CustomParticles;