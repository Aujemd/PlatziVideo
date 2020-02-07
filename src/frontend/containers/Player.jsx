import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import '../assets/styles/components/Player.scss'
import {getVideosSource} from '../actions';
import NotFound from './NotFound';

const Player = props => {

    const {id} = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(()=>{
        props.getVideosSource(id);
    }, []);

    return hasPlaying ? (
        
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="videos/mp4"></source>
            </video>
            <div className="Player-back">
                <button type="button" onClick = {() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound></NotFound>;
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideosSource,
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);