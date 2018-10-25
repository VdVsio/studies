// student2.js #2
// This script manages a student list.

var students = [];
var ocena = 0;

months = ["Sty", "Lut", "Mar", "Kwie", "Maj", "Czerw", "Lip", "Sie", "Wrze", "Paź", "Lis", "Gru"];

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
			+'<td><a href="#">' +students[i].imie + ' ' + students[i].nazw + '</a></td>'
			+'<td>' +students[i].kierun + '</td>'
                        +'<td>' +students[i].grade + '</td>' 
			+'<td><b>' +students[i].dateD.getDate() +'-'
						+students[i].dateD.getMonth() +'-'
						+students[i].dateD.getFullYear() +' ('
						+students[i].dateD.getHours() +':'
						+students[i].dateD.getMinutes() +':'
						+students[i].dateD.getSeconds() 
			+ ')</b></td>'
			+'<tr>';
        }
        
        message += '</tbody></table>'
        +'<div id="calc_tab" style="margin: 10px 20px;width:100px; height:100px; background-color:rgba(246, 245, 244, 1);"> </div>' ;
		output.innerHTML = message;

}//end of IF
    
    // Reference to where the output goes:
    
    
    // For the output:
    	
    
    // Return false to prevent submission:
    return false
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
