import React from 'react';
import LogoImg from '../components/assets/images/logo.png'

const Logo = () => {
    return (
        <div className="bg-red-200 w-full h-20" style={{ backgroundImage: 'url('+LogoImg+')', backgroundSize:'cover', backgroundPosition: 'center center' }}></div>
    )
}

export default Logo;