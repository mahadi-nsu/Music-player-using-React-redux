import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';

export default function App() {
    return (
        <div>
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                </div>
            </div>

        </div>
    )
}
