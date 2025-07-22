import React from 'react';
import Background from '../../assets/bg-shadow.png';

const NewsLetter = () => {
    return (
        <div style={{backgroundImage: `url(${Background})`}} className='max-w-7xl mx-auto my-10 min-h-60 flex justify-center items-center rounded-xl mt-40'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className='text-gray-400'>Get the latest updates and news right in your inbox!</p>
                <div className='text-center'>
                    <input className='border py-2 px-5 mr-2 w-96 rounded-lg' type="text" placeholder='Enter your email' />
                    <button className='border py-2 px-5 bg-amber-400 text-black font-semibold rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;