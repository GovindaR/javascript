

var numberString = ['1','2','3','4','20', '23', '22'];
function getSumOfEvenDigits(data){
    return data
    .map(function(item,index){

        console.log(+item * 5);

        return +item * 5;
    })

    .filter(function(item,index){
        return item % 2 ===0;
    })
    .reduce(function(total,item){
        return total + item;
    })
    
}
function getColorText(){
    let para = document.getElementById('paragraph');
    para.style.color='blue';
    para.innerHTML='js';
    document.getElementById('result').innerHTML='Result:'+ getSumOfEvenDigits(numberString);
}
// result value
// p tag ma text change