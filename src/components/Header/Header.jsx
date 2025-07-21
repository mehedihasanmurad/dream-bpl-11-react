import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import { TbCoin } from "react-icons/tb";
import Banner from '../Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';
const Header = () => {
    const [coins, setCoins] = useState(0);
    const handleCoin = () => {
        toast.success("Coins ar added", {
            position: "top-center"
        })  
        
        setCoins(coins + 600000000);
    }
    return (
        <nav className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center my-10 sticky top-0 z-10 bg-slate-50'>
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
                        <button className='font-semibold'>{coins} Coin</button>
                        <TbCoin className='text-[rgb(247,206,22)] font-bold'></TbCoin>
                    </div>
                </div>
            </div>
            <Banner handleCoin={handleCoin}></Banner>
            <ToastContainer></ToastContainer>
        </nav>
    );
};

export default Header;