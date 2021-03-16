
FROM ianwalter/puppeteer:latest
WORKDIR /app

ADD . /app


RUN npm install


CMD npx wdio run wdio.conf.js 

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null 
