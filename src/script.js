document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            if (value === "AC") {
                currentValue = "";
                display.value = currentValue;
            } else if (value === "=") {
                evaluateResult();
            } else {
                currentValue += value;
                display.value = currentValue;
            }
        });
    }

    function evaluateResult() {
        try {
            // Replace mathematical symbols if needed (e.g., × → *, ÷ → /)
            const sanitized = currentValue.replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/%/g, "*0.01");
            const result = eval(sanitized);
            display.value = result;
            currentValue = result.toString(); // To allow further calculation
        } catch (error) {
            display.value = "Error";
            currentValue = "";
        }
    }
});
