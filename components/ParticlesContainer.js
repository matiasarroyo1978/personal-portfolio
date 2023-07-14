'use client'
import {Particles} from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import React,{useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async(engine) =>{
    await loadFull(engine);
  },[]);
  const particlesLoaded = useCallback(async() =>{

  },[]);
  return(
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      options={
        {
        fullScreen: {enabled: false},
        background: {
          color: {
            value:''
          },
        },
        fps_limit: 120,
        interactivity:{
          events: {
            onClick: {
              enabled: false,
              mode: 'push',
            },
            onHover:{
              enabled: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push:{
              quantity: 90,
            },
            repulse:{
              distance: 200,
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e',
        },
        links:{
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enabled: true,
        },
        move:{
          directions: 'none',
          enabled: true,
          outModes: {
            default: 'bounce'
          },
          ramdom: false,
          speed: 1,
          straight: false
        },
        number:{
          density:{
            enabled: true,
            area: 800
          },
          value: 80
        },
        opacity:{
          value: 0.5,
        },
        shape:{
          type: 'circle'
        },
        size: {
          value:{min:1, max:5}
        },
       },
       detectRetina: true,
      }}
  />);
  
};

export default ParticlesContainer;
