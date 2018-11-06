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
	
	var persona = null; //zmienna przechowująca indeks edytowanejoceny w rekordzie
	var ocena_id = null; //zmienna ktora otrzymuje wartosc id pola ocena edytowanego rekordu

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
		message = '<h2>Lista studentów:</h2>'
		+'<div id="sort_box"><label for="sortowanie">Sortuj: </label><select name="sortowanie" id="sort">'
		+'<option selected></option>'
		+'<option value="asc">Rosnaco</option>'
		+'<option value="desc">Malejaco</option>'
		+'</select>'
		+'<input type="button" value=">>"></div>'
		+'<table><thead><tr>' 
		+ '<th>Lp.</th><th>Imie i Nazwisko</th><th>Kierunek</th><th>Ocena</th><th>Data dodania</th>' 
		+ '</tr></thead><tbody>';
        
        for (var i = 0, count = students.length; i < count; i++) 
        {
            message += '<tr style="padding: 2px">'
			+'<td>' + (i+1) + '.' + '</td>'
			+'<td id=' + i +' onclick="show(this.id)" value='+i+'>' +students[i].imie + ' ' + students[i].nazw + '</td>'
			+'<td>' +students[i].kierun + '</td>'
                        +'<td id="grade'+ i+'">' +students[i].grade + '</td>' 
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
		+'';
		output.innerHTML = message;

}//end of IF
    
    // Reference to where the output goes:
    
    
    // For the output:
    	
    
    // Return false to prevent submission:
    return false
  } 
//------------------------------- F U N C T I O N S----------------------------
function show(id) {
    var x = document.getElementById("calc_tab");
    if (x.style.display === "none") {
    	persona = id;
        x.style.display = "block";
        wyswImie();
    } else {
        x.style.display = "none";
        persona=null;
    }
}

function calculator(){
            var grade1=parseFloat(document.getElementById('homework').value*0.25);
            var grade2=parseFloat(document.getElementById('labs').value*0.20);
            var grade3=parseFloat(document.getElementById('midterm').value*0.25);
            var grade4=parseFloat(document.getElementById('finals').value*0.30);
            var total=grade1+grade2+grade3+grade4;


			students[persona].grade = total;

            var display=document.getElementById(ocena_id);

            display.innerHTML=total;
}

function wielkaLitera(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} 

function wyswImie(){
	document.getElementById('personal').innerHTML = students[persona].imie 
	+ ' '+ students[persona].nazw + ' (' + students[persona].kierun +')';
	ocena_id = 'grade' + persona;
} 
 // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addStudent;
} // End of init() function.
window.onload = init;
