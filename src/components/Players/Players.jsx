import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({handlePlayerPrice}) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("fakeDataOfPlayers.json")
            .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='grid grid-cols-3 gap-8'>
                {
                    players.map(player => <Player
                        key={player.playerId}
                        player={player}
                        handlePlayerPrice={handlePlayerPrice}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;