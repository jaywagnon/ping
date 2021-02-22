FROM harbor.octanner.io/base/oct-node:12

ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Generate Github authentication for packaged private dependencies
RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_CREDENTIALS}" >> .npmrc

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available
COPY package*.json ./

# Build for production, using the package-lock.json file for versions.
# RUN npm install
RUN npm ci --only=production

# Copy application files
COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]
