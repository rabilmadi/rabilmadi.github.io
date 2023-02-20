let favouriteFilms = [
    {
        name: '1+1',
        director: 'Olivier Nakache, Eric Toledano',
        mainActors: 'Omar See, Fransua Klyuze',
        genre: 'Comedy/Drama',
        duration: 152,
        budget: '€9,500,000'

    },
    {
        name: 'Harry Potter and the Philosophers Stone',
        director: 'Chris Columbus',
        mainActors: 'Daniel Radcliffe, Rupert Grint, Emma Watson',
        genre: 'Fantasy/Adventure',
        duration: 232,
        budget: '$125,000,000'

    },
    {
        name: 'The Internship',
        director: 'Shawn Levy',
        mainActors: 'Vince Vaughn, Owen Wilson',
        genre: 'Comedy',
        duration: 159,
        budget: '$58,000,000'
    }
]
let sum = 0;
for (let i = 0; i < favouriteFilms.length; i++) {
    sum += favouriteFilms[i]['duration']
}
avg_duration = sum / favouriteFilms.length;


for (let i = 0; i < favouriteFilms.length; i++) {
    document.write("<h5>Film: " + favouriteFilms[i]["name"] + "</h5>");
    document.write("<h5>Director: " + favouriteFilms[i]["director"] + "</h5>");
    document.write("<h5>Actors: " + favouriteFilms[i]["mainActors"] + "</h5>");
    document.write("<h5>Genre: " + favouriteFilms[i]["genre"] + "</h5>");
    document.write("<h5>Duration: " + favouriteFilms[i]["duration"] + "</h5>");
    document.write("<h5>Budget: " + favouriteFilms[i]["budget"] + "</h5>");

    document.writeln("")
}


