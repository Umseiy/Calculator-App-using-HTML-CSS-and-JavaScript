<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 300px;
        }

        .display {
            width: 100%;
            height: 50px;
            font-size: 24px;
            text-align: right;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            padding: 20px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            background-color: #0072ff;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #005bb5;
        }

        button.operator {
            background-color: #f0ad4e;
        }

        button.operator:hover {
            background-color: #ec971f;
        }

        button.clear {
            background-color: #d9534f;
        }

        button.clear:hover {
            background-color: #c9302c;
        }

        button.equal {
            background-color: #5cb85c;
        }

        button.equal:hover {
            background-color: #4cae4c;
        }
    </style>
</head>
<body>

    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <div class="buttons">
            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button class="operator" onclick="appendValue('/')">÷</button>

            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button class="operator" onclick="appendValue('*')">×</button>

            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button class="operator" onclick="appendValue('-')">−</button>

            <button onclick="appendValue('0')">0</button>
            <button onclick="appendValue('.')">.</button>
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="operator" onclick="appendValue('+')">+</button>

            <button class="equal" style="grid-column: span 4;" onclick="calculateResult()">=</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');

        function appendValue(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
    </script>

</body>
</html
