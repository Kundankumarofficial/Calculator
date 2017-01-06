
$(document).ready(function () {
    
    $("#robot").addClass("move");
    function showBubble() {
        $('.bubble').toggle();
    }
    setTimeout(showBubble, 3000);
     
    var current = 0;
    var numArray = [];
    var firstNum = 0;
    var result = 0;
    var operation = "";

  
  function addDisplay(x) {
    numArray.push(x);
    current=numArray.join("");
    $("#showNum").text(current);
  }
  
  function storeOperation(o) {
    /*if (firstNum === 0) {
    firstNum=current;
    }*/
    if (operation!=="") {
      performOperation(operation);
    } else
      {firstNum=current}
    operation = o;
    current = 0;
    numArray = [];
    $("#display").html("<p>"+firstNum+"</p><span>"+o+"</span><span display=inline id='showNum'></span>");
  }
  
  function displayResult(r) {
    $("#display").html("<p>"+r+"</p><p id='showNum'></p>");
    firstNum=r;
    current=r;
    numArray=[];
  }
  
  function performOperation(o) {
    switch(o) {
      case "+":
        result = Number(firstNum) + Number(current);
        displayResult(result);
        break;
      case "-":
        result = Number(firstNum) - Number(current);
        displayResult(result);
        break;
      case "&times":
        result = Number(firstNum) * Number(current);
        displayResult(result);
        break;
      case "&divide":
        result = Number(firstNum) / Number(current);
        displayResult(result);
        break;
            }
  }
     
  $("#period").click(function(){
    if (numArray.indexOf(".") == -1) {  
    addDisplay(".");
    } else {
        $(".bubble").text("Only one period per number, please!")
    }
        
  });
  $("#zero").click(function() {
    addDisplay(0);
  });
  $("#one").click(function() {
    addDisplay(1);
  });
  $("#two").click(function() {
    addDisplay(2);
  });
  $("#three").click(function() {
    addDisplay(3);
  });
  $("#four").click(function() {
    addDisplay(4);
  });
  $("#five").click(function() {
    addDisplay(5);
  });
  $("#six").click(function() {
    addDisplay(6);
  });
  $("#seven").click(function() {
    addDisplay(7);
  });
  $("#eight").click(function() {
    addDisplay(8);
  });
  $("#nine").click(function() {
    addDisplay(9);
  });
  $("#clearEntry").click(function() {
    current=0;
    numArray=[];
  $("#showNum").text(current);
  });//end of #clear event handler
  
  $("#clear").click(function(){
    current=0;
    firstNum=0;
    numArray=[];
    operation="";
    $("#display").html("<p id='showNum'></p>");
  });
  $("#divide").click(function() {
    storeOperation("&divide");
  });
  $("#multiply").click(function() {
    storeOperation("&times");
  });
  $("#subtract").click(function() {
    storeOperation("-");
  });
  $("#add").click(function() {
    storeOperation("+");
  });
  $("#equals").click(function() {
    performOperation(operation);
    operation = "";
  });

});