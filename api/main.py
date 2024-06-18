from flask import request, jsonify
from config import *
from models import Users

@app.route("/accounts", methods=["GET"])
def get_accounts():
    test = [{
        "username":"userOne",
        "displayname":"PLAYER"
    }]
    users = Users.query.all()
    json_users = list(map(lambda x: x.to_json(), users))

    return jsonify({"users": json_users})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    
    app.run(debug=True)