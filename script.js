document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            const randomGame = games[Math.floor(Math.random() * games.length)];
            let attempts = 0;

            const submitGuessButton = document.getElementById('submitGuess');
            const messageParagraph = document.getElementById('message');
            const hintParagraph = document.getElementById('hint');

            submitGuessButton.addEventListener('click', () => {
                const userGuess = document.getElementById('guess').value.toLowerCase();
                attempts++;

                if (userGuess === randomGame.title.toLowerCase()) {
                    messageParagraph.textContent = 'Félicitations ! Vous avez deviné le bon jeu : ' + randomGame.title;
                } else {
                    let hint = '';
                    if (attempts === 1) {
                        hint = 'Indice 1: Le jeu est sorti en ' + randomGame.release_date;
                    } else if (attempts === 2) {
                        hint = 'Indice 2: Le jeu est disponible sur ' + randomGame.platform;
                    } else if (attempts >= 3) {
                        hint = 'Indice 3: Le score Metacritic est de ' + randomGame.score;
                    }
                    hintParagraph.textContent = hint;
                    messageParagraph.textContent = 'Mauvaise réponse. Essayez encore.';
                }
            });
        });
});
