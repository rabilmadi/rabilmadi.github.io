let myhobbies = [
    {
        name: 'Watching films'


    },
    {
        name: 'Playing computer games'

    },
    {
        name: 'Playing table tennis'
    }
]




for (let i = 0; i < myhobbies.length; i++) {
    document.write("<h5>" + myhobbies[i]["name"] + "</h5>");
    document.writeln("")
}


function element(width, height) {
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}

console.log(element(10, 4));

console.log(element(-5, 6));

