function manaFunction()
{
    let nameObj = document.getElementById("input_name");
    let surnameObj = document.getElementById("input_surname");
    let ageObj = document.getElementById("input_age");
    //alert(nameObj.value);
    let headder = document.getElementById("hello");



    if(ageObj.value <= 0 || ageObj.value == "" || ageObj.value.match(/[^0-9]/))
    {
        alert("vecuyms nav pareizi, tu NEESI tik jauns.. vai nu kkadu simbolu. tu neesi % gadus vecs!!!");
        return;
    }

    headder.innerText = "Hello, " + nameObj.value + " " + surnameObj.value + "!" + " " + ageObj.value + "years old! wow!";
 
}