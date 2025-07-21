import React from 'react';
import { CiFlag1 } from "react-icons/ci";

const Player = ({ player }) => {
    const {image,authorImg,name,country,role,battingStyle,biddingPrice} = player;
    return (
        <div className='border border-slate-100 rounded-lg p-5 shadow-2xl space-y-4'>
            <img className='w-full h-48 rounded-lg' src={image} alt="" />
            <div className='flex items-center gap-5'>
                <img className='h-10 w-10 rounded-full object-cover' src={authorImg} alt="" />
                <h3 className='text-xl font-semibold'>{name}</h3>
            </div>
            <div className='flex items-center justify-between border-b py-4'>
                <div className='flex items-center gap-2'>
                    <CiFlag1></CiFlag1>
                    <h1 className='text-gray-400'>{country}</h1>
                </div>
                <button className='btn'>{role}</button>
            </div>
            <h1 className='text-xl font-semibold'>Rating</h1>
            <div className='flex justify-between'>
                <h2 className='font-semibold'>Batting-Style</h2>
                <h2>{battingStyle}</h2>
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='font-semibold'>Price : $ {biddingPrice}</h2>
                <button className='btn hover:bg-[#E7FE29]'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;