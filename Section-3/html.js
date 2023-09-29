let user_input = parseInt(prompt("enter a number, please."))
let output = [];
for (let i=2 ; i<user_input.length ; i++) {
    for (let j=1 ; j<=user_input ; j++) {
        if (user_input % j == 0) {
         output.push(j)

        }
        console.log(j)
    }
console.log(j)
}