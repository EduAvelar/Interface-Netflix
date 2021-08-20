/*let num1 =4
let num2 =5

function soma(num1, num2){
    const result = num1+num2
    console.log(result)
}

soma(num1, num2);

let arr = [
    {
        nome:'eduardo',
        idade:27
    },
    {
        nome:'fulano',
        idade:32
    }
]

console.log(arr)*/

/*var arr;

arr = 'dçalskdfasidfsdçlkfasdlfkjsdf'

function string(arr){
    var p='';
    for(var i=0 ; i < arr.length ; i++){
        if(arr[i].length > p.length){
            p = arr[i];
        }
    }
    return p;
}

console.log(string(arr))*/


/*var f = function(c,x){
    if(x-c === 2){
        return [c+1];
    }
    else{
        var w = f(c,x-1);
        w.push(x-1);
        return w;
    }
}

console.log(f(2,9))*/



function Q(ar){
    var p=0;

    for(var i = 0; i < ar.lenght ; i++){
        p += a[i];
    }

    return p;
}
var ar = [9,6,9,7]
console.log(Q(ar));