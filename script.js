"use strict";



const   numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', ''),

        personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        };

        if (personalMovieDB.count < 10){
            console.log('Переглянуто доволі мало фильмів!');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Ви класичний глядач!');
        } else if (personalMovieDB.count > 30){
            console.log('Ви кіноман!');
        } else {
            console.log('Сталася помилка');
        }

for (let i = 0; i < 2; i++){
    const   a = prompt('Один з останніх переглянутих фільмів', ''),
            b = prompt('На скільки оцініть його?','');
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
};

// let i = 0;
// while (i < 2){
//     const   a = prompt('Один з останніх переглянутих фільмів', ''),
//             b = prompt('На скільки оцініть його?','');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 i++
//             } else {
//                 i--;
//             };
// };

// let i = 0;

// do {
//     const   a = prompt('Один з останніх переглянутих фільмів', ''),
//             b = prompt('На скільки оцініть його?','');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 i++
//             } else {
//                 i--;
//             };
// } while (i < 2);

console.log(personalMovieDB);

