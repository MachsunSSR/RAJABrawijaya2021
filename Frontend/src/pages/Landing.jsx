import React from 'react';
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
         {/* <h1>Ini landing page</h1> */}
         {/* <p>lorem</p> */}
      </div>
   );
}
 
export default Landing;