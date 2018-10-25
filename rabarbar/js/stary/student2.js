// student2.js #2
// This script manages a student list.

// Need a global variable:
var imiona = [];
var nazwiska = []; 
var kierunki =[];

var student = {
	
	
}

// Function called when the form is submitted.
// Function adds a task to the global array.
function addStudent() {
    'use strict';

    // Get the task:
    var imie = document.getElementById('imie');
var nazwisko = document.getElementById('nazwisko');
var kierunek = document.getElementById('kierunek');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (imie.value && nazwisko.value) {
    
        // Add the item to the array:
        imiona.push(imie.value);
        nazwiska.push(nazwisko.value);
		kierunki.push(kierunek.value);



        
        // Update the page:
        message = '<h2>Lista studentów:</h2><ol>';
        for (var i = 0, count = imiona.length; i < count; i++) {
	
            message += '<li>' + imiona[i].toUpperCase().charAt(0) + imiona[i].slice(1) + ' ' +
nazwiska[i].toUpperCase().charAt(0) + nazwiska[i].slice(1) + ' '+ kierunki[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of student.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addStudent;
} // End of init() function.
window.onload = init;