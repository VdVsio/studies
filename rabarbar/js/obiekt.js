// student2.js #2
// This script manages a student list.

var students = [];
var ocena = 0;



function addStudent() {
'use strict';

	//Pbieranie wartości z poszczególnych pól
	var getImie = document.getElementById('imie').value;
	var getNazwisko = document.getElementById('nazwisko').value;
	var getKierunek= document.getElementById('kierunek').value;
	
	
	//zypytania do pola wynikowego
	var output = document.getElementById('output');
	
    
	var message = '';
    // Get the task:


if(getImie&& getNazwisko && getKierunek){
	
	var imier = wielkaLitera(getImie);
	var nazwi = wielkaLitera(getNazwisko);
	var kier = getKierunek;
	

	var student = {
		imie : imier,
		nazw: nazwi,
		kierun: kier,
                grade: ocena,
		dateD: new Date(),
		mies: function(){
			return this.dateD.getMonth()+1;
		}
		
	};
	
	var duplikatDane = false;
	var duplikat = false;
	
	for(var i = 0; i < students.length; i++)
		{
			var imieTab = students[i].imie;
			var nazwiskoTab = students[i].nazw;
			var kierunekTab = students[i].kierun;
			
			if(imieTab == student.imie && nazwiskoTab == student.nazw && kierunekTab == student.kierun)
			{
				duplikat = true;
			}
			else if(imieTab == student.imie && nazwiskoTab == student.nazw)
			{
				duplikatDane = true;
			}
		}
		
		if(duplikat)
		{
			alert("Takie dane Studenta istnieją już w bazie!");
		}
        else if(duplikatDane)
        {
            var value = confirm("W bazie istnieje już student o takim imieniu i nazwisku, czy chcesz dodać mimo to?");
			if(value)
			{
				students.push(student);
			}
        }
        else
        {
            students.push(student);
        }
		
		//update
		message = '<h2>Lista studentów:</h2><table><thead><tr>' 
		+ '<th>Lp.</th><th>Imie i Nazwisko</th><th>Kierunek</th><th>Ocena</th><th>Data dodania</th>' 
		+ '</tr></thead><tbody>';
        
        for (var i = 0, count = students.length; i < count; i++) 
        {
            message += '<tr style="padding: 2px">'
			+'<td>' + (i+1) + '.' + '</td>'
			+'<td id="nam" onclick="show()" value='+i+'>' +students[i].imie + ' ' + students[i].nazw + '</td>'
			+'<td>' +students[i].kierun + '</td>'
                        +'<td>' +students[i].grade + '</td>' 
			+'<td><b>' +students[i].dateD.getDate() +'-'
						+students[i].mies() +'-' 
						
//getMonth() to tablica miesiecy 0-11, i wyswietla  mmiesiac wstecz, metoda+1 nie działa, wiec zdecydowalem sie zrobic funkcje wewn. obiektu
						
						+students[i].dateD.getFullYear() +' ('
						+students[i].dateD.getHours() +':'
						+students[i].dateD.getMinutes() +':'
						+students[i].dateD.getSeconds()
			+ ')</b></td>'
			+'<tr>';
			
        }
        
		
		
        message += '</tbody></table>'
		+'<div id="calc_tab" style="display: none;margin: 10px 20px;min-width:100px; min-height:100px; max-width: 190px; padding: 2px; ">' 
		+'<h4>Edycja oceny studenta: ' + '</h4>'
		+'<table><thead>'
		+ '<tr>'
			+'<th>Typ</th>'
			+'<th>Waga</th>'
			+'<th>Ocena</th>'
		+'</tr></thead><tbody>'
		+ '<tr>'
			+'<td>Zad dom.</td>'
			+'<td>25%</td>'
			+'<td><input type="text" id="homework" size=2 value=""></td>'
		+'</tr>'
		+ '<tr>'
			+'<td>Laborki</td>'
			+'<td>20%</td>'
			+'<td><input type="text" id="homework" size=2 value=""></td>'
		+'</tr>'
		+ '<tr>'
			+'<td>Polrocze</td>'
			+'<td>25%</td>'
			+'<td><input type="text" id="homework" size=2 value=""></td>'
		+'</tr>'
		+ '<tr>'
			+'<td>Egzamin</td>'
			+'<td>30%</td>'
			+'<td><input type="text" id="homework" size=2 value=""></td>'
		+'</tr>'
		+'</tbody></table></div>';
		output.innerHTML = message;

}//end of IF
    
    // Reference to where the output goes:
    
    
    // For the output:
    	
    
    // Return false to prevent submission:
    return false
  } 
function show() {
    var x = document.getElementById("calc_tab");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 
function wielkaLitera(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}  
 // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addStudent;
} // End of init() function.
window.onload = init;
