FROM ubuntu:16.04

RUN apt-get update \
    && apt-get install -yq --no-install-recommends \
    python3 \
    python3-pip \
    python3-tk
RUN pip3 install --upgrade pip==9.0.3 \
    && pip3 install setuptools

EXPOSE 8080

ADD . /app
WORKDIR /app

RUN pip3 install -r ./blockchain/requirements.txt
RUN nohup python3 ./blockchain/node_server.py &
RUN nohup python3 ./blockchain/run_app.py &
CMD /bin/bash
