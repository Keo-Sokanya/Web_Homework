// year = prompt("Enter year:")
// if ((year % 4 ==0) && (year % 100 != 0) || (year % 400 ==0)){
//     alert("This is leap year")
// }else{
//     alert("This is not leap yar.")
// }


// var result= "";
// myColor=["Red","Green","White","Black"];
// for(let i =0; i < myColor.length; i++){
//     result += myColor[i];
//     if(i< myColor.length-1){
//         result += ",";
//     }
// }
// alert("\"" + result + "\"")


// const d  = new Date();
// let hour = d.getHours();
// if((hour>0)&&(hour<12)){
//     alert("Good morning")
// }
// else if ((hour>12)&&(hour<18)){
//     alert("Good Afternoon")
// }
// else{
//     alert("Good Evening")
// }


function encrypt(){
    let inputText = document.getElementById("encrypt_text").value;
    let shift = parseInt(document.getElementById("shift_value1").value);
    let result = "";
    shift = shift % 26;
    for( let i =0; i< inputText.length; i++)
    {
        let char = inputText[i];
        let charcode = inputText.charCodeAt(i);
        if (char >= 'A' && char <= 'Z')
        {
            result += String.fromCharCode(((charcode -65 + shift) % 26) + 65);
        }
        else if (char >= 'a' && char <= 'z')
        {
            result += String.fromCharCode(((charcode - 97 + shift) % 26) + 97);
        }
        else
        {
            result += char;
        }
    }
    document.getElementById("generated_text1").value = result;
    
}
function decrypt(){
    let inputText = document.getElementById("decrypt_text").value;
    let shift = parseInt(document.getElementById("shift_value2").value);
    let result = "";
    shift = shift % 26;
    for( let i =0; i< inputText.length; i++)
    {
        let char = inputText[i];
        let charcode = inputText.charCodeAt(i);
        if (char >= 'A' && char <= 'Z')
        {
            result += String.fromCharCode(((charcode -65 - shift) % 26) + 65);
        }
        else if (char >= 'a' && char <= 'z')
        {
            result += String.fromCharCode(((charcode - 97 - shift) % 26) + 97);
        }
        else
        {
            result += char;
        }
    }
    document.getElementById("generated_text2").value = result;
    
}



