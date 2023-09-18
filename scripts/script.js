$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 
        // console.log(userName); 
        // console.log($('#userName').val().length); 
        // console.log(getStringLength(userName)); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        // console.log(reverseString(userName)); 

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>");
        
        nameAnimal = spiritAnimal(userName);
        nameMsg = 'Your Spirit Animal is ';
        $('#nameOutput').append(nameMsg + nameAnimal + "<br/>");

        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName); 

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }
    function spiritAnimal(stringVal){
        var stringLength = stringVal.length;
        if (stringLength <= 4) {
            let spiritAnimal = 'a dog'
            return spiritAnimal;
        } else if (stringLength <= 6 && stringLength > 4) {
            let spiritAnimal = 'a rabbit'
            return spiritAnimal;
        } else {
            let spiritAnimal = 'Kanye West'
            return spiritAnimal;
        }
    }

    function thirdLetter(stringVal){
        
       return thirdString;    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }

});