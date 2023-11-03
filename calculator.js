    $(document).ready(function() {
        
        function getParameterByName(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

    
        const username = getParameterByName('username');

        
        if (username) {
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.textContent = 'Welcome, ' + decodeURIComponent(username) + '!';

        }

        
        function updateResult(resultText) {
            $("#result").text(resultText);
        }

        
        function performOperation(operation) {
            const number1 = parseFloat($("#number1").val());
            const number2 = parseFloat($("#number2").val());

            if (isNaN(number1) || isNaN(number2)) {
                updateResult("Invalid input. Please enter valid numbers.");
                return;
            }

            switch (operation) {
                case "add":
                    updateResult(`Result: ${number1 + number2}`);
                    break;
                case "subtract":
                    updateResult(`Result: ${number1 - number2}`);
                    break;
                case "multiply":
                    updateResult(`Result: ${number1 * number2}`);
                    break;
                case "divide":
                    if (number2 === 0) {
                        updateResult("Result: Cannot divide by zero.");
                    } else {
                        updateResult(`Result: ${number1 / number2}`);
                    }
                    break;
                default:
                    updateResult("Invalid operation.");
            }
        }

        
        $("#add-btn").click(function() {
            performOperation("add");
        });

        $("#subtract-btn").click(function() {
            performOperation("subtract");
        });

        $("#multiply-btn").click(function() {
            performOperation("multiply");
        });

        $("#divide-btn").click(function() {
            performOperation("divide");
        });

    
        $("#calculator-form").submit(function(e) {
            e.preventDefault();
        });
    });
