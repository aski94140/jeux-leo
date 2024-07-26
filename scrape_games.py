import requests
from bs4 import BeautifulSoup
import json

url = "https://www.metacritic.com/browse/game/score/metascore/all/all/filtered"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

games = []

for game in soup.find_all('td', class_='clamp-summary-wrap'):
    title = game.find('a', class_='title').text.strip()
    platform = game.find('span', class_='data').text.strip()
    release_date = game.find('span', class_='release_date').find('span', class_='data').text.strip()
    score = game.find('div', class_='metascore_w').text.strip()

    games.append({
        'title': title,
        'platform': platform,
        'release_date': release_date,
        'score': score
    })

with open('games.json', 'w') as f:
    json.dump(games, f, indent=4)
