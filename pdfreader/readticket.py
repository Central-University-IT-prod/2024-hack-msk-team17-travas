import requests # type: ignore
import json
from env import api_key_ya as api_key, directory_id_ya as directory_id

def gpt(question):
    auth_headers = {
        'Authorization': f'Api-Key {api_key}',
    }
    url = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion'
    data = {
        "modelUri": 'gpt://{}/yandexgpt-lite'.format(directory_id),
        "completionOptions": {
            "stream": False,
            "temperature": 0.1,
            "maxTokens": "1000"
        },
        "messages": [
            {
                "role": "system",
                "text": """напиши достопримечательности в этом городе(пиши кратко без объяснений, просто цифра точка достопримечательнось):""" + question
            }
        ]
    }
    data = json.dumps(data)
    resp = requests.post(url, headers=auth_headers, data=data)

    if resp.status_code == 200:
        result = json.loads(resp.text).get('result').get('alternatives')[0].get('message').get('text')
        return result
    return "No answer from yandexGPT."


print(gpt("Казань"))