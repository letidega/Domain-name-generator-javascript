function miFrase() {
    var result = []
    var pronoun = ['the', 'our'];
    var adj = ['great', 'big'];
    var noun = ['jogger', 'racoon'];
    var domain = [".com", ".net", ".us", ".io"];

    pronoun.forEach(function (element1) { 
        adj.forEach(function (element2) {
            noun.forEach(function (element3) {
                domain.forEach(function (element4) {
                    result.push(element1 + element2 + element3 + element4 +"<br/>")
                })
            })
        })
    })
    

    return result;
}

document.querySelector("#frase").innerHTML = miFrase()

// for (let i = 0; i < pronoun.length; i++) {

//     for (let j = 0; j < adj.length; j++) {

//         for (let n = 0; n < noun.length; n++) {
//             console.log(pronoun[i] + " " + adj[j] + " " + noun[n])
//     }
//     }
// }
