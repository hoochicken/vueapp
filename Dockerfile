FROM node:lts-alpine
# base image
# FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# COPY entrypoint.sh entrypoint.sh
# COPY entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh
# RUN chmod +x entrypoint.sh


# install and cache app dependencies
# COPY package.json package.json
COPY . .

RUN npm install

# ENTRYPOINT ["/entrypoint.sh"]

# start app
CMD ["npm", "run", "serve"]
