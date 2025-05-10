const plus = document.getElementById("plus");
const output = document.getElementById("output");
const minus = document.getElementById("minus");
const bye = document.getElementById("bye");


let count = 0;

function  handleclick(){
    count += 1;
    output.innerHTML = count;
}
function handleclick2(){

    if  (count == 0) {
            alert("Нельзя купить 0 дисков");
        }    
    if (count > 0){
        count -= 1;
        output.innerHTML = count;
    }   
}

function handleclick3(){

    if  (count > 12) {
        alert("В наличии только 3 комплекта");
    }    

    if (count < 13){
        alert("Успешно!");
    }   
}

plus.addEventListener("click", handleclick)
minus.addEventListener("click", handleclick2)
bye.addEventListener("click", handleclick3)