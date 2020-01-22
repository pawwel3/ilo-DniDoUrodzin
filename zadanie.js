function selectFun() {
    var day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    const m=[31,28,31,30,31,30,31,31,30,31,30,31]
    //ile dni do końca miesiąca
    const now = new Date();
    const dayAk = now.getDate();
    const monthAk= now.getMonth();
    const i = m[monthAk]-dayAk;
    const j = (month-1)-monthAk;
    var k = 0;
    for(l=monthAk+1;l<month-1;l++){
       k= k+ m[l];
    }
    var g =parseInt(day);
   var h =i+k+g;
   document.querySelector(".example").innerHTML="Pozostało Ci "+h+" dni do urodzin!!!" 
    


    
}