function rollDice() {
    var diceType = parseInt(document.getElementById('dice-type').value);
    var diceCount = parseInt(document.getElementById('dice-count').value);
    var results = [];

    for (var i = 0; i < diceCount; i++) {
        var result = Math.floor(Math.random() * diceType) + 1;
        results.push(result);
    }

    displayResults(results);
}

function displayResults(results) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (var i = 0; i < results.length; i++) {
        var resultParagraph = document.createElement('p');
        resultParagraph.textContent = 'Resultado ' + (i + 1) + ': ' + results[i];
        resultsDiv.appendChild(resultParagraph);
    }
}
