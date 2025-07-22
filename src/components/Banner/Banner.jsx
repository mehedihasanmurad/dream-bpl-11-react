import React from 'react';
import BannerLogo from '../../assets/banner-main.png'
const Banner = ({handleCoins}) => {
    // console.log(handleCoins)
    return (
        <div className='min-h-96 max-w-7xl mx-auto bg-gradient-to-r from-black  to-pink-300 rounded-lg'>
            <div className='text-center py-20 space-y-4'>
                <img className='w-48 mx-auto' src={BannerLogo} alt="" />
                <h2 className='text-white text-4xl font-semibold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-400 font-semibold'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleCoins} className='border px-5 py-2 outline-4 mt-2 outline-white rounded-xl bg-[#E7FE29] font-semibold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;