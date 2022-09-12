import * as SQLite from 'expo-sqlite';
import {Place} from "../modal/place-modal";

const database = SQLite.openDatabase('places.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`, [], () => {
                resolve();
            }, (_, err) => {
                reject(err);
            })
        })
    })
}

export const insertPlace = (place) => {
    return new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.lat,
                    place.location.lng,
                ],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    })
}

export const fetchPlaces = ()=>{
    return new Promise((resolve, reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(
                `SELECT * FROM places`,
                [],
                (_,result)=>{
                    const places = [];
                    for (const dp of result.rows._array) {
                        places.push(
                            new Place(dp.id, dp.title, dp.address, {lat: dp.lat, lng: dp.lng}, dp.imageUri)
                        )
                    }
                    resolve(places);
                },
                (_,error)=>{
                    console.log(error);
                    reject(error)
                }
            )
        })
    })
}