var roster = []

//add
function addNew() {
    var newName = prompt("what name would you like to enter?")
    roster.push(newName);
}

//display
function display() {
    console.log(roster);
}

//remove
function remove() {
    var remName = prompt("what would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index,1);
}


///code
var start = prompt('would you like to start the roster web app?, y/n')
var request = 'empty'

if (start === 'y') {
    while(request !== 'quit') {
        request = prompt("Pleas choose an opton: add,display,remove and quit.")
        if (request === 'add') {
            addNew();
        }else if (request === 'display') {
            display();
        }else if (request === 'remove') {
            remove();
        }else {
            alert("This is not recognised!");
        }

    }
}
alert("Thank you for applying");