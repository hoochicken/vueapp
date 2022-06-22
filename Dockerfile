FROM node:lts-alpine
# base image
# FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /package.json
# RUN npm install
# RUN npm install @vue/cli@3.7.0 -g

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# ADD . .
COPY . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

# start app
CMD ["npm", "run", "serve"]




# CMD ["npm", "run", "dev"]