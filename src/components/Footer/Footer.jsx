import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black py-20'>
            
            <footer class="flex justify-around p-10">
                <nav>
                    <h6 className='text-white font-semibold'>About Us</h6>
                    <p className='text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className='text-white font-semibold'>Quick Links</h6>
                    <li className='text-gray-400'>Home</li>
                    <li className='text-gray-400'>Services</li>
                    <li className='text-gray-400'>About</li>
                    <li className='text-gray-400'>Contact</li>
                </nav>
                <form>
                    <h6 className='text-white font-semibold'>Subscribe</h6>
                    <p className='text-gray-400'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <fieldset class="w-80">
                    <label>Enter your email address</label>
                    <div className='flex border'>
                        <input className='px-5 py-2 rounded-xl border text-gray-400' type="text" placeholder='Enter your email' />
                        <button class="px-5 py-2 rounded-xl bg-amber-400">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
            <p className='text-gray-400 flex justify-center items-center'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;