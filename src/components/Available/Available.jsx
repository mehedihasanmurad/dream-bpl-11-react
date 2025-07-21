import { useState } from "react";

const Available = () => {
    const [avail, setAvail] = useState('A');
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-2xl font-semibold'>Available Players</h1>
            <div className='relative'>
                <div className='absolute top-0 right-0'>
                    <button className='btn' onClick={() => setAvail('A')} style={{backgroundColor: avail === "A" ? "yellow" : "white"}}>Available</button>
                    <button className='btn' onClick={() => setAvail('B')} style={{backgroundColor: avail === "B" ? "yellow" : "white"}}>Selected</button>
                </div>
            </div> 
            <h1>Hello world</h1>
        </div>
    );
};

export default Available;