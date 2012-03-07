$(function(){
	
	var questions = jQuery.parseJSON('[{"ques":"1. How many languages and dialects are spoken by people all over the world ?","opt1":"6000","opt2":"9000","opt3":"4000","opt4":"1000"},{"ques":"2. Approximately, how many people speak Chinese language ?","opt1":"1 million","opt2":"1 billion","opt3":"1 lakh","opt4":"1 thousand"},{"ques":"3. The language with the richest vocabulary is:","opt1":"Hindi","opt2":"French","opt3":"English","opt4":"German"},{"ques":"4. English Language have more than ?? words","opt1":"4,50,000","opt2":"45,000","opt3":"4,500","opt4":"450"},{"ques":"5. The oldest Indian language is:","opt1":"Telgu","opt2":"Hindi","opt3":"Tamil","opt4":"Punjabi"},{"ques":"6. Which book has been printed in the maximum number of languages and these scripts?","opt1":"The Bible","opt2":"Hiraka Sutra","opt3":"The Super Book","opt4":"None of these"},{"ques":"7. The only religious book ever printed in a shorthand scripts is:","opt1":"The Ramayana","opt2":"The Mahabharata","opt3":"The Bible","opt4":"Guru Granth Sahib"},{"ques":"8. The oldest printed work in the world, which dates back to AD 868 is:","opt1":"The Bible","opt2":"The Hiraka Sutra","opt3":"The Ramayana","opt4":"The Mahabharata"},{"ques":"9. Euclid was:","opt1":"Greek Mathematician","opt2":"Contributor to the use of deductive principles of logic as the basis of geometry","opt3":"Propounded the geometrical theosems","opt4":"All the statements are correct"},{"ques":"10. Who developed the small pox vaccination?","opt1":"Eduard Jenner","opt2":"Alexander Flemming","opt3":"Albert Einstein","opt4":"None of these"}]');

	var answers = jQuery.parseJSON('[{"ans":"9000"},{"ans":"1 billion"},{"ans":"English"},{"ans":"4,50,000"},{"ans":"Tamil"},{"ans":"The Bible"},{"ans":"The Ramayana"},{"ans":"The Hiraka Sutra"},{"ans":"All the statements are correct"},{"ans":"Eduard Jenner"}]');
	
	
	
	
	var i = 0;
	
	var initState = function(){
		$('.contentWrapper').append('<div class=header><div class=headerText><h1>Questionnaire</h1></div></div><div class=questionDiv><table class=questionTable></table></div><div class="forward"><button>Forward</button></div>');

		$('.questionTable').append('<tr class=fstRow><td colspan=2></td></tr><tr class=scndRow><td id=fstCol><input type=radio name=options></td><td id=scndCol><input type=radio name=options></td></tr><tr class=thrdRow><td id=fstCol><input type=radio name=options></td><td id=scndCol><input type=radio name=options></td></tr>');
		
		$('tr.fstRow td').append(questions[i].ques);
		$('tr.scndRow td#fstCol').append(questions[i].opt1);
		$('tr.scndRow td#scndCol').append(questions[i].opt2);
		$('tr.thrdRow td#fstCol').append(questions[i].opt3);
		$('tr.thrdRow td#scndCol').append(questions[i].opt4);
	}
	
	initState();

	var answerArr = [];
	$('button').click(function(){
		
		if(!($('input:checked').length))
		{
			alert('Please select an answer!');
		}
		else
		{
			if($('input:checked').parent().text()===answers[i].ans)
			{
				answerArr.push('right');
			}
			else
			{
				answerArr.push('wrong');
			}
			
			i++;
			
			if(i<10)
			{
				$('tr.fstRow td').html(questions[i].ques);
				$('tr.scndRow td#fstCol').html('<input type=radio name=options />'+questions[i].opt1);
				$('tr.scndRow td#scndCol').html('<input type=radio name=options />'+questions[i].opt2);
				$('tr.thrdRow td#fstCol').html('<input type=radio name=options />'+questions[i].opt3);
				$('tr.thrdRow td#scndCol').html('<input type=radio name=options />'+questions[i].opt4);
			}
			else
			{
				result();
			}
		}
	});
	
	
	
	var result = function(){
		var right = 0;
		var wrong = 0;
		
		$('table, button').remove();
		$('.contentWrapper').append('<div class=result></div><div class=wrong><table class=wrongList></table></div>');
		for(i=0;i<answers.length;i++)
		{
			if(answerArr[i]==='right')
			{
				right++;
			}
			else
			{
				wrong++;
			}
		}
		
		$('.result').html('Right : '+right+'<br/><br/>'+'Wrong : '+wrong);
		
		for(i=0;i<answers.length;i++)
		{
			if(answerArr[i]==='wrong')
			{
				$('.wrongList').append('<tr><td>'+questions[i].ques+'</td><td>'+answers[i].ans+'</td></tr>');
			}
		}
		

	}
});
