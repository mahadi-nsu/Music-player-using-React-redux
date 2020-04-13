import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';

export default function App() {
    return (
        <div>
            <SongList />
        </div>
    )
}
