"use strict";



const   numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', ''),

        personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        };


for (let i = 0; i < 2; i++){
    const   a = prompt('Один з останніх переглянутих фільмів', ''),
            b = prompt('На скільки оцініть його?','');

    personalMovieDB.movies[a] = b;
};

console.log(personalMovieDB);