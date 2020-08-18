import React from 'react';
import Logo from '../images/logo.svg'

function Nav() {
  return (
    <div class="flex h-20 bg-green-200 lg:h-32">

        <div class="flex w-6/12 ">
            <div class="flex items-center w-1/4 h-full ml-4 md:w-2/12 lg:ml-20 lg:w-1/12">
                <img class="h-11/12 w-11/12" src={Logo} alt="logo-img"></img>
            </div>
            <div class="flex items-center  w-3/4">
                <h1 class="text-xl ml-2 text-purple-600 lg:text-4xl">Flower-Power</h1>
            </div>
        </div>


        <div class="flex w-6/12">
            <div class="flex justify-end w-full h-full items-center">
                <div class="flex justify-center w-1/3 md:w-2/12 lg:w-2/12">
                    <a href="/" className="hvr-underline-from-center text-sm lg:text-2xl ">Log In</a>
                </div>

                <div class="flex justify-center w-1/3 mr-4 md:w-2/12 lg:mr-20 lg:w-2/12">
                    <a href="/" className="hvr-underline-from-center text-sm lg:text-2xl">Sign Up</a>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Nav;
