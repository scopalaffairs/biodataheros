from app import app
import sys

app.run(host="127.0.0.1", debug=True, port=int(sys.argv[2]))
