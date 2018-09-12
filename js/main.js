
// array Map,Filter & Sum

let numberString = ['1','2','3','4','20', '23', '22'];

function getSumOfEvenDigits(data){

    return data

    .map(function(item){

        return +item * 5;
    })

    .filter(function(item){

        return item % 2 === 0;
    })
    .reduce(function(total,item){

        return total + item;
    })
    
}


// Sum of array

function getColorText(){
    let para = document.getElementById('myhtml-para');

    para.style.color='blue';
    para.innerHTML='paragraph';
    document.getElementById('result').innerHTML='Result :'+' '+ getSumOfEvenDigits(numberString);
}
