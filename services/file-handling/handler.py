import json
import boto3
import base64
import hashlib

from ..utils import EndpointException, success

BUCKET = 'radiogram'

def upload(event, context):
    if 'body' not in event:
        raise EndpointException("No body provided")
    body = json.loads(event['body'])
    
    if 'data' not in body:
        raise EndpointException("No data provided")

    file_name = gen_file_name(body)
    s3 = boto3.resource('s3')
    save_object = s3.Object(BUCKET, file_name)
    save_object.put(Body=base64.b64decode(body['data']))

    url = f"{BUCKET}/{file_name}"

    return success({
        "message": "Successfully uploaded file to S3",
        "url": url
    })

def gen_file_name(body):
    h = hashlib.sha224()
    h.update(body['data'].encode())
    h.hexdigest()

    file_name = f"uploads/{h}.{body['file_type']}"
    return file_name
