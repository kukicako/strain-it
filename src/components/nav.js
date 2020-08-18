import React from 'react';
import Logo from '../images/logo.svg'

function Nav() {
  return (
    <div class="flex h-20 bg-green-200">
        <div class="flex w-6/12 ">
            <div class="flex items-center w-1/4 h-full ">
                <img class="h-full w-11/12 ml-2" src={Logo} alt="logo-img"></img>
            </div>
            <div class="flex items-center  w-3/4">
                <h1 class="text-xl font-verdana ml-2 text-purple-600">Power-Flower</h1>
            </div>

        </div>

        <div class="flex w-6/12">
            <div class="flex justify-end w-full h-full items-center">
                <div class="flex justify-center w-1/3 ">
                    <a className="hvr-underline-from-center">Log In</a>
                </div>
                <div class="flex justify-center w-1/3 mr-4 ">
                    <a className="hvr-underline-from-center">Sign Up</a>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Nav;
