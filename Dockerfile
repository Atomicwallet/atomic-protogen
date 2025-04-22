FROM node:18

WORKDIR /app

RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v21.3/protoc-21.3-linux-x86_64.zip

# Unzip protobuf
RUN unzip protoc-21.3-linux-x86_64.zip

# Move protoc to a suitable location
RUN chmod +x /app/bin/protoc
RUN /app/bin/protoc --version
RUN mv /app/bin/protoc /usr/local/bin/
RUN mv /app/include/* /usr/local/include/

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY proto/ proto/
COPY scripts/ scripts/

# Run the build script
RUN npm run build

RUN cat /app/dist/output_hash.txt
