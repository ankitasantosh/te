var score=0;//set score to 0
var total=10;//total number of question
var point=1;//points if u get one correct answer
var highest=total*point;

//initialize
function init()
{
  // setting of all answers
  sessionStorage.setItem('a1','b');
  sessionStorage.setItem('a2','a');
  sessionStorage.setItem('a3','d');
  sessionStorage.setItem('a4','c');
  sessionStorage.setItem('a5','d');
  sessionStorage.setItem('a6','a');
  sessionStorage.setItem('a7','b');
  sessionStorage.setItem('a8','d');
  sessionStorage.setItem('a9','c');
  sessionStorage.setItem('a10','a');
}

$(document).ready(function(){
$('.QUESTIONFORM').hide();

$('#q1').show();

$('#q1 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q1');
  $('#q2').fadeIn(300);
  return false;
});
$('#q2 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q2');
  $('#q3').fadeIn(300);
  return false;
});
$('#q3 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q3');
  $('#q4').fadeIn(300);
  return false;
});
$('#q4 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q4');
  $('#q5').fadeIn(300);
  return false;
});
$('#q5 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q5');
  $('#q6').fadeIn(300);
  return false;
});
$('#q6 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q6');
  $('#q7').fadeIn(300);
  return false;
});
$('#q7 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q7');
  $('#q8').fadeIn(300);
  return false;
});
$('#q8 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q8');
  $('#q9').fadeIn(300);
  return false;
});
$('#q9 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q9');
  $('#q10').fadeIn(300);
  return false;
});
$('#q10 #submit').click(function(){
  $('.QUESTIONFORM').hide();
  process('q10');
  $('#results').fadeIn(300);
  return false;
});
});

//process the answers
function process(q)
{
  if(q=="q1")
  {
    var submitted=$('input[name=q1]:checked').val();
    if (submitted==sessionStorage.a1)
     {
     score++;
     }
  }
  if(q=="q2")
  {
    var submitted=$('input[name=q2]:checked').val();
    if (submitted==sessionStorage.a2)
     {
     score++;
     }
  }
  if(q=="q3")
  {
    var submitted=$('input[name=q3]:checked').val();
    if (submitted==sessionStorage.a3)
     {
     score++;
     }
  }
  if(q=="q4")
  {
    var submitted=$('input[name=q4]:checked').val();
    if (submitted==sessionStorage.a4)
     {
     score++;
     }
  }
  if(q=="q5")
  {
    var submitted=$('input[name=q5]:checked').val();
    if (submitted==sessionStorage.a5)
     {
     score++;
     }
  }
  if(q=="q6")
  {
    var submitted=$('input[name=q6]:checked').val();
    if (submitted==sessionStorage.a6)
     {
     score++;
     }
  }
  if(q=="q7")
  {
    var submitted=$('input[name=q7]:checked').val();
    if (submitted==sessionStorage.a7)
     {
     score++;
     }
  }
  if(q=="q8")
  {
    var submitted=$('input[name=q8]:checked').val();
    if (submitted==sessionStorage.a8)
     {
     score++;
     }
  }
  if(q=="q9")
  {
    var submitted=$('input[name=q9]:checked').val();
    if (submitted==sessionStorage.a9)
     {
     score++;
     }
  }
  if(q=="q10")
  {
    var submitted=$('input[name=q10]:checked').val();
    if (submitted==sessionStorage.a10)
     {
     score++;
     }
      $('#results').html('<h3>YOUR FINAL SCORE IS:'+score+' OUT OF 10</h3><a href="BRAIN_GAME.html">TAKE QUIZ AGAIN</a>');
  }
  return false;
}


//add event listener
window.addEventListener('load',init,false);
