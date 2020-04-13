import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                      </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        // console.log(this.props);
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}
//providing data to the component
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        songs: state.songs
    }
}
//connecting component to store data
//mapstateToprops is a function which resturn the state from store
//selectsong is an object which is action creator
export default connect(mapStateToProps, { selectSong })(SongList);
