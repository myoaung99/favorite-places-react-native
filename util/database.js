import * as SQLite from 'expo-sqlite';

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
            tx.executeSql(`
            INSERT INTO places (title, imageUri, address, latitude, longitude) 
            VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    console.log(err);
                    reject(err);
                }
            )
        })
    })
}