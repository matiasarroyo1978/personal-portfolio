// 'use client';
// import ServiceSlider from '../../components/ServiceSlider';
// import Bulb from '../../components/Bulb';
// import Circles from '../../components/Circles';

// import {motion} from 'framer-motion';
// import {fadeIn} from '../../variants';

// const Services = () => {
//   return (
//     <div className='h-full bg-primary/30 py-36 flex items-center'>
//       <Circles />
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:flex-row gap-x-8'>
//           <div className='text-center flex xl:w-[30vm] flex-col lg:text-left mb-4 xl:mb-0'>
//             <motion.h2 
//               variants={fadeIn('up', 0.2)} 
//               initial='hidden' 
//               animate='show' 
//               exit='hidden' 
//               className='h2 xl:mt-8'>
//               My Services 
//               <span className='text-accent'>
//                 .
//               </span> 
//             </motion.h2>
//             <motion.p 
//                variants={fadeIn('up', 0.4)} 
//                initial='hidden' 
//                animate='show' 
//                exit='hidden' 
//               className='mb-4 max-w-[450px] mx-auto lg:mx-0 text-md'>
//                 I specialize in building responsive and user-friendly websites using the latest technologies such as HTML5, CSS3, React, Next.js, and JavaScript. Whether you need a simple static website or a complex web application.
//                 With expertise in Node.js and Express, I can develop server-side applications and RESTful APIs.
//                 I have hands-on experience in Python, which allows me to create powerful and versatile web applications. Whether it's using Django or Flask, I can develop feature-rich applications and leverage Python's extensive libraries and frameworks.
//                 I can integrate various databases into your web applications, including MySQL, PostgreSQL, MongoDB, or SQLite. Proper database design and implementation ensure data integrity and optimal performance for your applications.
//                 As a developer, I believe effective communication and collaboration are vital for successful project outcomes. I am always open to feedback, and I strive to understand your specific requirements to deliver the best results.
//             </motion.p>
//           </div>
//           <motion.div 
//              variants={fadeIn('down', 0.6)} 
//              initial='hidden' 
//              animate='show' 
//              exit='hidden' 
//             className='w-full xl:max-w-[65%] '>
//             <ServiceSlider />
//           </motion.div>
//         </div>
//       </div>
//       <Bulb />
//     </div>
//     );
// };

// export default Services;
'use client';
import React from 'react';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex flex-col items-center'>
      <Circles />
      <div className='container mx-auto flex-grow'>
        <div className='flex flex-col-reverse lg:flex-row gap-x-8'>
          <div className='text-center lg:text-left xl:w-[30vm] flex flex-col gap-y-4 mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My Services{' '}
              <span className='text-accent'>.</span>
            </motion.h2>
            <div
              className='max-w-[450px] mx-auto lg:mx-0 text-md overflow-auto border border-gray-300 p-4'
              style={{ height: 'auto', maxHeight: '400px' }}
            >
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-[450px] mx-auto lg:mx-0 text-md overflow-y-auto max-h-[350px]'
            >
              I specialize in building responsive and user-friendly websites using the latest technologies such as HTML5,
              CSS3, React, Next.js, and JavaScript. Whether you need a simple static website or a complex web application.
              With expertise in Node.js and Express, I can develop server-side applications and RESTful APIs. I have
              hands-on experience in Python, which allows me to create powerful and versatile web applications. Whether
              it's using Django or Flask, I can develop feature-rich applications and leverage Python's extensive
              libraries and frameworks. I can integrate various databases into your web applications, including MySQL,
              PostgreSQL, MongoDB, or SQLite. Proper database design and implementation ensure data integrity and optimal
              performance for your applications. As a developer, I believe effective communication and collaboration are
              vital for successful project outcomes. I am always open to feedback, and I strive to understand your
              specific requirements to deliver the best results.
            </motion.p>
            </div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb className='mt-auto'/>
    </div>
  );
};

export default Services;
