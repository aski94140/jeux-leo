document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(games => {
            const randomGame = games[Math.floor(Math.random() * games.length)];
            let attempts = 0;

            const submitGuessButton = document.getElementById('submitGuess');
            const messageParagraph = document.getElementById('message');
            const hintParagraph = document.getElementById('hint');

            submitGuessButton.addEventListener('click', () => {
                const userGuess = document.getElementById('guess').value.trim().toLowerCase();
                
                if (!userGuess) {
                    messageParagraph.textContent = 'Veuillez entrer un nom de jeu.';
                    return;
                }
                
                attempts++;

                if (userGuess === randomGame.title.toLowerCase()) {
                    messageParagraph.textContent = 'Félicitations ! Vous avez deviné le bon jeu : ' + randomGame.title;
                    hintParagraph.textContent = '';  // Clear hint
                } else {
                    let hint = '';
                    if (attempts === 1) {
                        hint = 'Indice 1: Le jeu est sorti en ' + randomGame.release_date;
                    } else if (attempts === 2) {
                        hint = 'Indice 2: Le jeu est disponible sur ' + randomGame.platform;
                    } else if (attempts >= 3) {
                        hint = 'Indice 3: Le score Metacritic est de ' + randomGame.score;
                    }

                    messageParagraph.textContent = `Mauvaise réponse. Vous avez ${attempts} essai${attempts > 1 ? 's' : ''} incorrect${attempts > 1 ? 's' : ''}. Essayez encore.`;
                    hintParagraph.textContent = hint;
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const messageParagraph = document.getElementById('message');
            messageParagraph.textContent = 'Une erreur est survenue lors du chargement des données. Veuillez réessayer plus tard.';
        });
});
