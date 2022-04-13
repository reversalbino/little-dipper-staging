import os
import boto3
import requests
import random
import string
from flask import Blueprint, jsonify, request

s3_routes = Blueprint('s3_routes', __name__)

@s3_routes.route('/upload/', methods=['POST'])
def upload_image():

    print('\n\n\nHERE\n\n\n')

    if 'file' not in request.files:
        return jsonify('not working')

    file = request.files['file']

    OBJECT_NAME= ''.join(random.choices(string.ascii_lowercase + string.digits, k=30))

    s3_client = boto3.client('s3')

    response = s3_client.generate_presigned_post(
        os.environ.get('AWS_BUCKET_NAME'),
        OBJECT_NAME,
        Fields=None,
        Conditions=None,
        ExpiresIn=60
    )

    uploadFile = {'file': (OBJECT_NAME, file)}
    print('\n\n\n', uploadFile, '\n\n\n')
    requests.post(response['url'], data=response['fields'], files=uploadFile)
    url  = response['url'] + response['fields']['key']

    print(response)

    return jsonify(url)
