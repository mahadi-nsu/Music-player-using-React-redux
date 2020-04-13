import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
    console.log(props.song);
    if (!props.song) {
        return <div>Select a song!</div>
    }
    return (
        <div>
            <h2>Details For :</h2>
            <p>
                Title : {props.song.title}
                <br />
                Duration : {props.song.duration}
            </p>

        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);