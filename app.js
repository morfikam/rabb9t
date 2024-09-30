particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 2.25,
            "density": {
                "enable": true,
                "value_area": 25
            }
        },
        "color": {
            "value": "#5c9597"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#5c9597"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 45,
                "height": 24
            }
        },
        "opacity": {
            "value": 0.4,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.5,
                "opacity_min": 0.2,
                "sync": true
            }
        },
        "size": {
            "value": 1.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 7.6,
                "size_min": 0.6,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 6.8,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 4.5,
                "rotateY": 6.5
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
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
                "distance": 15.2,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 21.2,
                "size": 3.35,
                "duration": 2.5,
                "opacity": 4.5,
                "speed": 2.7
            },
            "repulse": {
                "distance": 28.1,
                "duration": 0.7
            },
            "push": {
                "particles_nb": 5.12
            },
            "remove": {
                "particles_nb": 5.8
            }
        }
    },
    "retina_detect": true
});
