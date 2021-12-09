FROM node:17

RUN apt-get update && apt-get install python3 python3-pip git make automake gcc g++ python3-dev -y

RUN mkdir /home/hestia

RUN git clone https://github.com/FreyjaWildes/hestia-utils-test.git /home/hestia/

WORKDIR /home/hestia

RUN npm install
RUN pip install -r requirements.txt

EXPOSE 8080
CMD node index.js
