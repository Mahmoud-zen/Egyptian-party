/// <reference types="../types/jquery" />


// -----open sidebar---------------------
$('.openBtn').on('click',function(){
$('.openBtn').css('transform','translateX(250px)') 
$('.side').css('transform','translateX(0px)')
$('.caption').css('transform','translateX(125px)')
})
// ----------------------------------------------
// closing side bar-------------------------
$('.close').on('click',function(){
$('.openBtn').css('transform','translateX(0px)')    
$('.side').css('transform','translateX(-320px)')
$('.caption').css('transform','translateX(0px)')
})
// -------------------------------------------------


//----------------- text area---------------------------------
$('textarea').on('input', function(){

let maxLength=100
let currentLength=$(this).val().length
let remainLength=maxLength-currentLength
console.log(remainLength);

if(remainLength>=0){

  $('.remainLength').text(remainLength)  

}
else{
    $(this).val($(this).val().substring(0, maxLength));
}})

$('form').on('submit',function(e){
e.preventDefault()
})

// ===================================end==============================

// ===================days counter=====================================



let counter= setInterval (()=> {
  let todayDate= new Date ().getTime()
  let targetDate= new Date('1-1-25').getTime()
  let remainTime=targetDate-todayDate
  
  let remainDays=Math.floor(remainTime/(1000*60*60*24))  
  if (remainDays>10){
    $('#days').text(remainDays+' D')
  }
  if (remainDays<10){
    $('#days').text('0'+remainDays+' D')
  }
  
  let remainHours=Math.floor(remainTime%(1000*60*60*24)/(1000*60*60)) 
  if (remainHours>10){
    $('#hours').text(remainHours+' h')
  }
  if (remainHours<10){
    $('#hours').text('0'+remainHours+' h')
  }
  
  
  let remainMins=Math.floor(remainTime%(1000*60*60)/(1000*60)) 
  if (remainMins>10){
    $('#minutes').text(remainMins+' m')
  }
  if (remainMins<10){
    $('#minutes').text('0'+remainMins+' m')
  }
  
  let remainSecs=Math.floor(remainTime%(1000*60)/(1000))   
  if (remainSecs>10){
    $('#seconds').text(remainSecs+' s')
  }
  if (remainSecs<10){
    $('#seconds').text('0'+remainSecs+' s')

  }}, 1000)

// ===========================================

$('.header').on('click',function(){
    $('.body').not($(this).siblings('.body')).slideUp(1000);
    $(this).siblings('.body').slideToggle(1000);
})

