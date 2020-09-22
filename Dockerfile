# pull official base image
FROM node:14-slim

WORKDIR /app

# install app dependencies
COPY package.json ./
RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]