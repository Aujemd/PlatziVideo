import React from 'react';
//import '../assets/styles/components/Player.scss'

const Player = () => {
    return (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="videos/mp4"></source>
            </video>
            <div className="Player-back">
                <button type="button">
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default Player;