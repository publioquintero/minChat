import React from 'react';
import LogoImg from '../components/assets/images/logo.png'

const Logo = () => {
    return (
        <div className="w-full h-20" style={{ backgroundImage: 'url('+LogoImg+')', backgroundSize:'100%', backgroundPosition: 'center center' }}></div>
    )
}

export default Logo;