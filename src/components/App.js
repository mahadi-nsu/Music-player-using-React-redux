import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetails from './SongDetails';

export default function App() {
    return (
        <div style = {{}}>
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div className="column eight wide">
                        <SongDetails />
                    </div>
                </div>
            </div>

        </div>
    )
}
