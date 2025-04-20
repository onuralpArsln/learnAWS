# i run this on py3.11
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/second')
def second_page():
    return render_template('second.html')

@app.route('/name')
def name_page():
    return "Ata"

@app.route('/double/<sayi>')
def double(sayi):
    return sayi*2

@app.route('/doublesayi/<sayi>')
def doublesayi(sayi):
    return str(int(sayi)*2)

if __name__ == "__main__":
    app.run(debug=True)

