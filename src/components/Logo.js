import React from 'react';

const Logo = () => {
    return (
        <div className='logo'> 
        {/* Les iamges importées depuis la blaise img sont accessbles dans public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;