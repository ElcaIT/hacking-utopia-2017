from flask import Flask, request
app = Flask(__name__)

import zwei_zi_wohnungen
import json

model = zwei_zi_wohnungen.Indicator()

@app.route('/')
def hello_world():
    return 'Example of request: http://127.0.0.1:5000/predict?area=Knonau&year=2016'

@app.route('/predict', methods=['GET', 'POST'])
def predict_disease_progression():
    # Get the user age
    gebiet_name = request.args.get('gebiet_name')
    year = int(request.args.get('year'))
    
    prediction = model.predict(gebiet_name=gebiet_name, year=year)
    
    return json.dumps(prediction)
