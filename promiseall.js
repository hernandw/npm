const promise1 = ()=>{
    return new Promise ((res, err)=>{
        if(err){
            console.log("no se pudo completar");
        }
        res(1)
    })
}

const promise2 = ()=>{
    return new Promise ((res, err)=>{
        if(err){
            console.log("no se pudo completar");
        }
        res(3)
    })
}

Promise.all([promise1(), promise2()]).then((resultado)=>{
console.log('El resultado de la promesas: ', resultado);

let suma = resultado.reduce((total, item) => total + item);
console.log('La suma de las promesas es: ' + suma);

})

