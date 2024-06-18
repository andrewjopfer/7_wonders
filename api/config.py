from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from dotenv import load_dotenv
import os

load_dotenv()
SQL_DATABASE = os.getenv('SQL_DATABASE')
SQL_USERNAME = os.getenv('SQL_USERNAME')
SQL_PASSWORD = os.getenv('SQL_PASSWORD')

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = f"mssql://localhost\\SQLEXPRESS/{SQL_DATABASE}?driver=ODBC+Driver+17+for+SQL+Server" 
#f"mssql+pyodbc://{SQL_USERNAME}:{SQL_PASSWORD}@localhost/SevenWonders?driver=ODBC+Driver+17+for+SQL+Server"    #connStr = "mssql+pyodbc://myUsername:myPassword@Research"

db = SQLAlchemy(app)