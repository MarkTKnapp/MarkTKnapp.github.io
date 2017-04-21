
# A very simple Flask Hello World app for you to get started with...

from flask import Flask
from flask import request
from yahoo_finance import Share
import json

app = Flask(__name__)

@app.route('/requestStocks', methods=['GET'])
def requestStocks():
    if request.method == 'GET':
        startDate = request.args.get('start', '')
        endDate = request.args.get('end', '')
        stock = request.args.get('stock', '')
        stock = "^" + stock
        return getData(startDate, endDate, stock)

def getData(startDate, endDate, stock):
    yahoo = Share(stock)
    yahoo.get_open()
    return json.dumps(yahoo.get_historical(startDate, endDate))

def verifyDateFormat(date):
    return true

def verfiyDateOrder(startDate, endDate):
    return true

def verifyStock(stock):
    return true