let length = +prompt('Введите длину')
let width = +prompt('Введите ширину')
function ghg (length, width){
    let result
    if(length && width ){
        if(length != NaN !=width){
         result  = length*width
        }
        else alert('Введите число');

    }
    else if (length){
        result = length**2
    }
    else{
     result = width**2   
    }
    alert (result)
}
ghg (length, width)



