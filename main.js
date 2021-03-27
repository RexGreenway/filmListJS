/**
 FilmListJS  |  by Rex Greenway
 
 This program takes user input strings (films) and alphabetises them in a list
 with SEEN films in bold.

*/

// Establish DOM Trackers
const submit = document.getElementById('submit');
const statusValue = document.getElementById('status');
const filmName = document.getElementById('film-name');
const container = document.getElementById('container');

// Event Listener
submit.addEventListener('click', addFilm);

// JS Film List Array
const filmList = [];

// Add Film Function upon SUBMIT
function addFilm(e){
    /**
     Creates new list item and inserts it into correct place in the list.
    */

    e.preventDefault();
    
    // Create a new variable from input film with id = length of list (i.e incements each item).
    const newFilm = {};
    newFilm.id = filmList.length;
    // Giving each entry an id so that you can grab them later to add more in.
    newFilm.name = filmName.value;
    newFilm.status = statusValue.value;
    filmList.push(newFilm);

    // Sort the array to alphabetical order.
    const sortedFilmList= filmList.sort(compare_name);

    // Create new HTML list object with id = newFilm id value
    const newFilmItem = document.createElement('li');
    newFilmItem.setAttribute('id', newFilm.id);

    // Make bold if seen
    if(statusValue.value == 'seen'){
        newFilmItem.className = 'list-item seen';
        newFilmItem.innerHTML = '<b>'+filmName.value;
    } else {
        newFilmItem.className = 'list-item unseen';
        newFilmItem.innerHTML = filmName.value;
    }

    // Insert list object in correct index position.
    // New films index is its position in array.
    let filmIndex = sortedFilmList.indexOf(newFilm);
    if (filmIndex != sortedFilmList.length - 1) {
        // reference is the HTML id of the film ahead of the new film in the sorted list
        let reference = document.getElementById(sortedFilmList[filmIndex + 1].id);
        container.insertBefore(newFilmItem, reference);
    } else {
        container.append(newFilmItem);
    }

    // Reset film name to an empty string.
    filmName.value = '';
}

// Sort Function
function compare_name(a, b){
    /**
     Sorts two input parameters.
    */
    if(a.name < b.name){return -1;} else if(a.name > b.name){return 1;} else {return 0;}
}
