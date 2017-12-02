$(document).ready(function(){
getUrlVars();
    function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
//            console.log(vars);

        var que = vars['que'];
       	if(que == "1"){
       		$("#q1").addClass("display-block");
       		$("#q2").addClass("display-none");
       		$("#q3").addClass("display-none");
       		$("#q4").addClass("display-none");
       		$("#q5").addClass("display-none");
          $("#q6").addClass("display-none");
       		$("#nextbtn").attr("href", "conceptb.html?que=2");
       	} else if(que == "2"){
       		$("#q1").addClass("display-none");
       		$("#q2").addClass("display-block");
       		$("#q3").addClass("display-none");
       		$("#q4").addClass("display-none");
       		$("#q5").addClass("display-none");
          $("#q6").addClass("display-none");
       		$("#nextbtn").attr("href", "conceptb.html?que=3");
       	} else if(que == "3"){
       		$("#q1").addClass("display-none");
       		$("#q2").addClass("display-none");
       		$("#q3").addClass("display-block");
       		$("#q4").addClass("display-none");
       		$("#q5").addClass("display-none");
          $("#q6").addClass("display-none");
       		$("#nextbtn").attr("href", "conceptb.html?que=4");
       	} else if(que == "4"){
       		$("#q1").addClass("display-none");
       		$("#q2").addClass("display-none");
       		$("#q3").addClass("display-none");
       		$("#q4").addClass("display-block");
       		$("#q5").addClass("display-none");
          $("#q6").addClass("display-none");
       		$("#nextbtn").attr("href", "conceptb.html?que=5");
       	} else if(que == "5"){
       		$("#q1").addClass("display-none");
       		$("#q2").addClass("display-none");
       		$("#q3").addClass("display-none");
       		$("#q4").addClass("display-none");
       		$("#q5").addClass("display-block");
          $("#q6").addClass("display-none");
       		$("#nextbtn").html("Submit");
          $("#nextbtn").attr("href", "conceptb.html?que=6");
       	}
        else if(que == "6"){
          $("#q1").addClass("display-none");
          $("#q2").addClass("display-none");
          $("#q3").addClass("display-none");
          $("#q4").addClass("display-none");
          $("#q5").addClass("display-none");
          $("#q6").addClass("display-block");
          $("#nextbtn").hide();
            $("#i1").hide();
             $("#i2").hide();
        }
        }
});

$(document).ready(function(){
	$(document).on("click", ".ques1", function(){
		var q1 = $(this).val();
		if(q1 == "JavaScript's syntax is loosely based on Java's"){
			$(this).css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}else{
			$(this).css({'background-color':'#FF0000','border-color':'#FF0000','color':'#fff'});
			$("#right1").css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}
	});
	$(document).on("click", ".ques2", function(){
		var q2 = $(this).val();
		if(q2 == "The User's machine running a Web browser"){
			$(this).css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}else{
			$(this).css({'background-color':'#FF0000','border-color':'#FF0000','color':'#fff'});
			$("#right2").css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}
	});
	$(document).on("click", ".ques3", function(){
		var q3 = $(this).val();
		if(q3 == "Navigator"){
			$(this).css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}else{
			$(this).css({'background-color':'#FF0000','border-color':'#FF0000','color':'#fff'});
			$("#right3").css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}
	});
	$(document).on("click", ".ques4", function(){
		var q4 = $(this).val();
		if(q4 == "LiveWire"){
			$(this).css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}else{
			$(this).css({'background-color':'#FF0000','border-color':'#FF0000','color':'#fff'});
			$("#right4").css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}
	});
	$(document).on("click", ".ques5", function(){
		var q5 = $(this).val();
		if(q5 == "Storing numbers dates or other values"){
			$(this).css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}else{
			$(this).css({'background-color':'#FF0000','border-color':'#FF0000','color':'#fff'});
			$("#right5").css({'background-color':'#4CAF50','border-color':'#4CAF50','color':'#fff'});
		}
	});
});