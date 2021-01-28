import json

def success(body):
  return {
    "statusCode": 200,
    "body": json.dumps(body)
  }