
var svar = document.getElementById("svar");
var svar2 = [], antal = 0;
var btn = document.getElementById("btn").addEventListener("click", rakna);
var svarLista = document.getElementById("svar-lista");

// funktion som skriver ut en lista på talen man räknat
function sparaLista(array){

    for(i = antal; i < array.length; i++){
        var li1 = document.createElement("li");
        var txt = document.createTextNode(array[i]);
        li1.appendChild(txt);
        svarLista.insertBefore(li1, svarLista.childNodes[0]);
    }
	return array;
}

function rakna() {

	var tal1 = document.getElementById("tal-1").value;
	var tal2 = document.getElementById("tal-2").value;
	var vad = document.getElementById("vad").selectedIndex;			// hämtar värdet från select taggen
	var rakna = document.getElementsByTagName("option")[vad].value; 
	var sum = 0, result = 0;

	var slista = document.getElementById("svar-lista");
	slista.style.display = "block";

	if (isNaN(tal1) || isNaN(tal2)) {								// kollar om det var ett nummer som skrevs in 
		slista.innerHTML = "Skriv ett nummer istället !!!";
	}else {

		switch (rakna)												// här använder den värdet som kommer från
		{															// select, och beroende på vad som valdes
			case "plus":											// så kommer någon av casearna köras
				sum = Number(tal1) + Number(tal2);
				result = tal1 + " + " + tal2 + " = " + sum;
				svar2.push(result);
				sparaLista(svar2);
				antal++;
				break;

			case "minus":
				sum = Number(tal1) - Number(tal2);
				result = tal1 + " - " + tal2 + " = " + sum;
				svar2.push(result);
				sparaLista(svar2);
				antal++;
				break;

			case "ganger":
				sum = Number(tal1) * Number(tal2);
				result = tal1 + " * " + tal2 + " = " + sum;
				svar2.push(result);
				sparaLista(svar2);
				antal++;
				break;

			case "delat":
				sum = Number(tal1) / Number(tal2);
				result = tal1 + " / " + tal2 + " = " + sum;
				svar2.push(result);
				sparaLista(svar2);
				antal++;
				break;
		}
	}																
}
/*
eftersom det inte kan bli något annat än de case som finns
så har jag ingen default	
*/