function check(){
	var c =0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
	var q5 = document.quiz.question5.value;

var result=document.getElementById('result');
var quiz=document.getElementById("quiz");

	if(q1=="Berkerumun"){}
		if(q2=="True"){}
			if(q3=="Semua Benar"){}
				if(q4=="False"){}
					if(q5=="True"){}
		quiz.style.display="none";
	if(c<=3){
		result.textContent='salah';
	}else{
		result.textContent='benar';
	}
	}
