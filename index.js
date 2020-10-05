function data_Entered(){
  return document.querySelector(".datavalue").innerText;
}
function pdata_Entered(num){
  document.querySelector(".datavalue").innerText=num;
}

function Output(){
return document.querySelector(".value").innerText;
}
function pOutput(num){
document.querySelector(".value").innerText=num;
}



var operator=document.getElementsByClassName("operator");
  for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
     if(this.id=="clear"){
      pdata_Entered("");
      pOutput("0");
    }
   else if(this.id=="backspace"){
      var output= Output();
        if(output){
      output= output.substr(0, output.length-1);
      pOutput(output);
    }
    }
    else{
    var output= Output();
    var dataenter= data_Entered();
    if(output=="" && dataenter!=""){
      if(isNaN(dataenter[dataenter.length-1])){
        dataenter=dataenter.substr(0,dataenter.length-1);
      }
    }
      if(output!="" || dataenter!=""){
      output= output==""?output:Output();
        dataenter= dataenter+output;
        if(this.id=="="){
      var result = eval(dataenter);
          if(result == "Infinity"){
          result="Cannot divide by 0";
        }
        pOutput(result);
        pdata_Entered("");

        }
        else{
          dataenter= dataenter+this.id;
          pdata_Entered(dataenter);
          pOutput("");
        }
      }
    }
    })
  }
  var number=document.querySelectorAll(".number");
    for(var i=0;i<number.length;i++){
      number[i].addEventListener('click',function(){
        var output= Output();
      if(output!= NaN){
          output+= this.id;
       pOutput(output);
      }
      })
    }
