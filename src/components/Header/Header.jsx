import React from 'react';
import Logo from '../../assets/logo.png'
import { TbCoin } from "react-icons/tb";
const Header = () => {
    return (
        <nav className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center my-10'>
                <div>
                    <img className='w-14' src={Logo} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <a className='mr-10' href="#Home">Home</a>
                        <a className='mr-10' href="#Home">Fixtures</a>
                        <a className='mr-10' href="#Home">Team</a>
                        <a className='mr-10' href="#Home">Schedules</a>
                    </div>
                    <div className='flex justify-center items-center gap-2 border px-5 py-2 rounded-lg'>
                        <button className='font-semibold'>Coin</button>
                        <TbCoin className='text-[rgb(247,206,22)] font-bold'></TbCoin>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;