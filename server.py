from flask import Flask, request, jsonify, render_template
import server.util as newutil  # replace this by import util for running locally
# import newutil

app = Flask(__name__, static_url_path="/client", static_folder='../client', template_folder="../client")


@app.route('/hello')
def hello():
    return "Hi Checking!!"


@app.route('/', methods=['GET'])
def index():
    if request.method == "GET":
        return render_template("app.html")


@app.route('/predict_loan_status', methods=['POST'])
def predict_loan_status():
    # applicant_income = int(request.form['applicant_income'])
    applicant_income = int(request.form['applicant_income'])
    co_income = float(request.form['co_income'])
    loan_amount = float(request.form['loan_amount'])
    gender = request.form['gender']
    married = request.form['married']
    dependents = request.form['dependents']
    edu = request.form['edu']
    emp = request.form['emp']
    loan_term = request.form['loan_term']
    credit_hist = request.form['credit_hist']
    property_area = request.form['property_area']

    response = jsonify({
        'loan_status': newutil.predict_loan_status_func(applicant_income, co_income, loan_amount, gender, married,
                                                        dependents, edu, emp, loan_term, credit_hist, property_area)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    print("Starting Python Flask Server For Loan Status Prediction...")
    newutil.load_saved_artifacts()
    app.run()
