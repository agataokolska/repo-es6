const promiseFromFetch = fetch('https://isa-live-chat.firebaseio.com/messages.json')  //zwraca object resonse, promise

const promiseFromThen = promiseFromFetch.then(() => { })  //zwraca promise


console.log(promiseFromFetch)


const anotherPromise = promiseFromFetch.then(response => response.json())
anotherPromise
    .then(dataInObject => Object.entries(dataInObject))
//     .then(dataInArray => dataInArray.map(arrWithKeyAndValue => arrWithKeyAndValue[0] + ' | ' + arrWithKeyAndValue[1].text))


// .then(
//     dataInArray => dataInArray
//         .map(arrWithKeyAndVal => {
//             const key = arrWithKeyAndVal[0]
//             const val = arrWithKeyAndVal[1]
//             return key + ' | ' + val.text
//         })
// )

.then(
    dataInArray =>dataInArray
        .map(([key,val]) => key + '|' + val.text)
)