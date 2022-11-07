from time import sleep
import requests
import json
import os
from dotenv import load_dotenv

path = 'src/data/apuracao.json'

def requestAPI():
  load_dotenv()
  url = os.getenv('ENDPOINT')
  res = requests.get(url)
  with open(path, 'w') as file:
    json.dump(json.loads(res.text), file)
  print(res.status_code)

while True:
  requestAPI()
  sleep(30)