import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => (
  <div className="text-center hero my-5">
    
    <h1 className="mb-4">
      <Link to="/Shop" className="effect-underline">Shop</Link>{" "}
      and 
      {" "}<Link to="/Forum" className="effect-underline">Talk</Link>{" "}
        Coffee
    </h1>
    <p>
    Consistent, quality offerings that take the guesswork out of 
    your morning routine.
    </p>
  </div>
);

export default Hero;
