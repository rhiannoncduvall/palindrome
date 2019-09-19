const isPalindrome = function() {
    // store input as a variable
    let userInput = document.getElementById("submitted-text").value;
    let input = userInput.toLowerCase();

    // convert numbers to a string
    input += "";

    //replacing special characters and spaces -- this returns an empty value as the input for some reason

    // input = input.replace(/\s/g, "");
    // input = input.replace(/./g, "");
    // input = input.replace(/'/g, "");
    // input = input.replace(/!/g, "");
    // input = input.replace(/,/g, "");

    // create li to add the input to one of the lists
    let node = document.createElement("LI");
    node.innerHTML = userInput;

    // initialize variable for reverse input
    let reverseInput = "";

    // iterate through each letter of the input starting from the last character
    for (let i = input.length - 1; i >= 0; i--) {
        reverseInput += input[i];
    }

    // compare the variables (input vs new)
    if (input == reverseInput) {
        // return true and append to true list
        document.getElementById("palindrome-list").appendChild(node);
        return true;
    } else {
        // return false and append to false list
        document.getElementById("not-palindrome-list").appendChild(node);
        return false;
    }
}