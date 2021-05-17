FROM docker.cernerrepos.net/ion/ion-node:3

WORKDIR /app
COPY package.json /app
RUN npm run clean:install

# run the server
CMD ["npm", "run", "start-static"]
