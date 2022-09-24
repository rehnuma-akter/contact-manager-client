import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../firebase.init";

const Welcome = () => {
    const [user] = useAuthState(auth);
    return (
        <div style={{  
            backgroundImage: `url(https://i.ibb.co/pKnmrvD/Two-Tone-Album-CD-Cover.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} className="h-screen">
            {/* <img src="https://i.ibb.co/pKnmrvD/Two-Tone-Album-CD-Cover.png" alt="" /> */}
            <h1 className='text-center text-4xl pt-44 font-semibold'>Welcome, <br /> <span className='text-warning text-7xl'>{user.displayName}!</span></h1>
        </div>
    );
};

export default Welcome;