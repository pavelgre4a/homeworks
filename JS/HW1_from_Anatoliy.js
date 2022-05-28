// #1
// let num = 2
// let result = num
// let exp = 9

// First variant
// for (exp=9; exp>0; exp=exp-1) {
//     result = result * num
//     console.log(result)
// }

// Second variant
// while (exp > 0) {

//     exp--
//     console.log(result = result * num)

// }


// #1*
// const Exponentation = function(exp) {

//     let num = 2
//     let result = num
//     exp = exp - 1

//         while (exp > 0) {

//             exp--
//             console.log(result = result * num)

//         }
// }
// Exponentation(20)


// #2
// let howManyStrings = 5
// let limit = howManyStrings + 1
// let num = 1
// let whatString = ':)'

// while (num < limit && howManyStrings > 0) {

//     console.log(whatString.repeat(num))
//     howManyStrings--
//     num++

// }


// #2*
// const superStrings = function(whatString, howManyStrings) {

//     let limit = howManyStrings + 1
//     let num = 1

//     while (num < limit && howManyStrings > 0) {

//         console.log(whatString.repeat(num))
//         howManyStrings--
//         num++

//     }
// }

// superStrings('Kymis ', 10)


// #3**
// const checkSymbols = function(myString) {

    
//     let lengthResult = myString.length
//     let ordinalNumber = 0
//     let howManyVowels = 0
//     let howManyConstonants = 0


//     let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let constonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

//         while (ordinalNumber <= lengthResult - 1 && ordinalNumber >= 0){
            
//             let newSymbol = myString.charAt(ordinalNumber).toLowerCase()
//             ordinalNumber++
            
//                 if (vowels.includes(newSymbol)) {
//                     howManyVowels++

//                 }
//                 else if (constonant.includes(newSymbol)) {
//                     howManyConstonants++

//                 }
            
//         }

//     console.log('Гласных - ' + howManyVowels)
//     console.log('Соглсаных - ' + howManyConstonants)

// }

// checkSymbols('case')
// checkSymbols('Case')
// checkSymbols('Check-list')

// #4
function isPalindrome(word){
    let newWord = '';
    
    for (i = word.length; i >= 0; i--){
        newWord += word.charAt(i);
    }
    
    if (newWord.toLowerCase() == word.toLowerCase()) {
        console.log(word,'- is palindrome');
        return;
    }

    console.log(word, "- isn't a palindrome");
}

isPalindrome('PaZL-111-2ZLaP');
isPalindrome('widra');
isPalindrome('madam');
isPalindrome('RAceCar');
isPalindrome('qwertY');
isPalindrome('abba');
isPalindrome('Abba');