import {Mongo} from 'meteor/mongo'; 
import numeral from 'numeral'; 

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1; 

    return players.map((player, index) => {
        if (index !== 0 && players[index -1].score > player.score) {
            rank++; 
        }

        return {
            ...player, 
            // this is just the rank variable above, the ES6 operators means no need to have rank: rank
            rank,
            position: numeral(rank).format('0o')
        };
    });
};