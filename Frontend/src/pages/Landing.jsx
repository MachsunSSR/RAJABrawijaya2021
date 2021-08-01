import React from 'react';
// import Footer from '../components/Footer';

import Jumbotron from '../components/Jumbotron';
import Logo from '../components/Logo';
import Rangkaian from '../components/Rangkaian';
import Sekilas from '../components/Sekilas';
const Landing = () => {
   return (
      <div>
         <Jumbotron/>
         <Sekilas/>
         <Rangkaian/>
         <Logo/>
         {/* <Footer/> */}
         {/* <Modal/> */}
         {/* <h1>Ini landing page</h1> */}
         {/* <p>lorem</p> */}
      </div>
   );
}
 
export default Landing;