
// Firstly install react-tsparticles and tsparticles-slim packages. Then this code can be taken from react-tsparticles website's documentation and can be customized according to our need. e.g I changed size, distance of repulse, shape etc. of particles as I wanted... 

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <div style={{
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%', // Full viewport width
            height: '100%', // Full viewport height
            zIndex: -1 // Ensures it stays behind other content
        }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0d1b2a", 
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#e0e0e0", // White particles for the web
                        },
                        links: {
                            color: "#e0e0e0",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 0.5,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1, // Slow movement 
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
                            value: 0.3, 
                        },
                        shape: {
                            type: "polygon",
                            polygon: {
                                sides: 6, // Hexagon shape 
                            },
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Small particles
                        },
                        stroke: {
                            width: 1,
                            color: "#ffffff",
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
