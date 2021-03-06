
function timerFunction (setSeconds) {
    myDate = new Date();
    myDate.setHours(00,00,setSeconds);
 
    console.log(myDate);
    return myDate;
}
timerFunction (0);
timerFunction (59);
timerFunction (60);
timerFunction (3599);