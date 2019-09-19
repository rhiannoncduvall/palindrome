const isPalindrome = function() {
    // store input as a variable
    let input = document.getElementById("submitted-text").value;
    // console.log(input);

    // initialize variable for reverse input
    let reverseInput = "";

    // iterate through each letter of the input starting from the last character
    for (let i = input.length - 1; i >= 0; i--) {
        reverseInput += input[i];
    }

    // compare the variables (input vs new)
    if (input === reverseInput) {
        // return true and edit HTML so it is on the true list
        let item1 = document.createElement("LI");
        item1.innerHTML = input;
        document.getElementById("palindrome-list").appendChild(item1);
        return true;
    } else {
        // return false and edit HTML so it is on the false list
        let item2 = document.createElement("LI");
        item2.innerHTML = input;
        document.getElementById("not-palindrome-list").appendChild(item2);
    }
}