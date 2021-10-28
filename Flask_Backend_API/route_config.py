from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/processjson', methods=['POST'])
def processjson():
    
    return jsonify({'result' : 'Success!'})


@app.after_request
def after_request(response):
    return response


app.run()