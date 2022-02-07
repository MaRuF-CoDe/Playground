// setTimeout(() => {
//     console.log('2 sec delaid');
// }, 2000);

// const names = ['andrew','tahmid','naeem'];
// const shortNames = names.filter((name)=>{
// return name.length <= 4;
// });

//Synchronous

// const geocode = (address , callback)=>{
//     const data = {
//         latitude : 0,
//         longitude : 0
//     }
//     return data
// }

// const data = geocode('Bd')
// console.log(data);

//Asynchronous

// const geocode = (address , callback)=>{
//     setTimeout(() => {
//         const data = {
//             latitude : 0,
//             longitude : 0
//         }
//         callback(data);

//     }, 2000);

// }

// geocode('Bd',(datas)=>{
// console.log(datas);
// })

//Challenge

// const add = (a,b,callback)=>{
// setTimeout(() => {
//     callback (a+b)
// }, 2000);
// }
// add(1,4,(sum)=>{
//     console.log(sum);
// })



//For understanding Promises

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})