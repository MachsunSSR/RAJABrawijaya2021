import React from 'react';
// import Footer from '../components/Footer';

import Jumbotron from '../components/Jumbotron';
import Logo from '../components/Logo';
import Ragam from '../components/Ragam';
import Rangkaian from '../components/Rangkaian';
import Sekilas from '../components/Sekilas';
const Landing = () => {
   return (
      <div>
         <Jumbotron/>
         <Sekilas/>
         <Rangkaian/>
         <Logo/>
         <Ragam/>
      </div>
   );
}
 
export default Landing;