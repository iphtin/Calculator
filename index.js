const keys = document.querySelectorAll(".key");
const innerText = document.querySelectorAll(".key span");
const display_input = document.querySelector(".display .input");
const display_output = document.querySelector(".display .output");

let input = document.createElement("p");
console.log(input.innerHTML);

keys.forEach(num => {
       const spanText = num.querySelector("span").textContent;

        num.addEventListener("click", e => {
          const value = num.dataset.key;
          switch(value) {
            case "clear":
                display_input.innerHTML = "";
                display_output.innerHTML = "";
                input.textContent = "";
            break;
            case "backspace": 
            display_input.innerHTML = display_input.innerHTML.slice(0,-1);
            input.textContent = input.innerHTML.slice(0, -1);
            display_output.innerHTML = "";
            break;
            case "=":
                try {
                    let result = eval(input.textContent);
                    display_output.textContent = result;
                } catch (error) {
                    display_output.innerHTML = "Invalid Syntax";
                    display_input.innerHTML = "";
                }
            break;
            default: 
            if (display_output.innerHTML === "") {
                const lastChar = display_input.innerHTML.slice(-1);
                const lastCharInput = input.innerHTML.slice(-1);

                if(['+', '-', '*', '/'].includes(lastCharInput) && ['+', '-', '*', '/'].includes(value)) {
                    // Replace the last operator with the new one
                     input.innerHTML = input.innerHTML.slice(0, -1) + value;
                    
                 }

                // Check if the last character is an operator and not the same as the new one
                if (['+', '-', 'x', '÷'].includes(lastChar) && ['+', '-', 'x', '÷'].includes(spanText)) {
                    // Replace the last operator with the new one
                    display_input.innerHTML = display_input.innerHTML.slice(0, -1) + spanText;
                } else if (["."].includes(lastChar) && lastChar === value) {
                    // Replace the last . with the new one
                    display_input.innerHTML = display_input.innerHTML.slice(0, -1) + value;
                } else {
                    // Append the new operator
                    display_input.innerHTML += spanText;
                    input.textContent += value;
                }
            } else {
                display_input.innerHTML = display_input.innerHTML;
            }
            break;
        }
        })
})
