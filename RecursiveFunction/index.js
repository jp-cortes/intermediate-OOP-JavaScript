// function recursive() {
//     if(/*Validation */) {
//         // recursive call
//     } else {
//         //regular calls , without recursivity
//     }
// }

const numberss = [0, 1, 2, 3, 5, 4, 6, 7, 8, 9, 1331, 3435, 67,];

// let emojis = [“😂”,“😝”,“😁”,“😱”,“👉”,“🙌”,“🍻”,“🔥”,
//                 “🌈”,“☀”,“🎈”,“🌹”,“💄”,“🎀”,“⚽”,“🎾”,“🏁”,
//                 “😡”,“👿”,“🐻”,“🐶”,“🐬”,“🐟”,“🍀”,“👀”,“🚗”,
//                 “🍎”,“💝”,“💙”,“👌”,“❤”,“😍”,“😉”,“😓”,“😳”,
//                 “💪”,“💩”,“🍸”,“🔑”,“💖”,“🌟”,“🎉”,“🌺”,“🎶”,
//                 “👠”,“🏈”,“⚾”,“🏆”,“👽”,“💀”,“🐵”,“🐮”,“🐩”,
//                 “🐎”,“💣”,“👃”,“👂”,“🍓”,“💘”,“💜”,“👊”,“💋”,
//                 “😘”,“😜”,“😵”,“🙏”,“👋”,“🚽”,“💃”,“💎”,“🚀”,
//                 “🌙”,“🎁”,“⛄”,“🌊”,“⛵”,“🏀”,“🎱”,“💰”,“👶”,
//                 “👸”,“🐰”,“🐷”,“🐍”,“🐫”,“🔫”,“👄”,“🚲”,“🍉”,“💛”,“💚”];

let number = 0;
for (let index = 0; index < numbers.length; index++) {
    number = numbers[index];
    console.log( index, number)
    
}

const numbers = [0, 1, 2, 3, 5, 4, 6, 7, 8, 9, 1331, 3435, 67,];


//recursive function work the same as  a loop.
function recursivity(array) {
    if(array.length !== 0) {
        const firstItem = array[0];
        console.log(firstItem);

        array.shift();
        recursivity(array);
    }
    
}
recursivity(numbers);