const button1 = document.getElementById("problem-1-button");
const output1 = document.getElementById("problem-1-output");

button1.addEventListener('click', () => {
    let total = 0;
    for (let i = 1; i< 1000; i++){
        if(i % 3 == 0 || i % 5 == 0){
            total += i;
        }
    }
    output1.textContent = total;

});