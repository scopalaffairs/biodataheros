from app import app
import sys

app.run(debug=True, port=int(sys.argv[2]))
