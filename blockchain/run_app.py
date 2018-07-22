from app import app
import sys

app.run(host="0.0.0.0", debug=True, port=int(sys.argv[2]))
