FROM node:18

WORKDIR /app

RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v21.3/protoc-21.3-linux-x86_64.zip

# Unzip protobuf
RUN unzip protoc-21.3-linux-x86_64.zip

# Make protoc executable
RUN chmod +x /app/bin/protoc

# Check unzipped version
RUN /app/bin/protoc --version

# Move protoc to a suitable location
RUN mv /app/bin/protoc /usr/local/bin/
RUN mv /app/include/* /usr/local/include/

RUN npm install -g zx

# Clone keplr repository
RUN mkdir third_party
RUN cd third_party \
    && git clone https://github.com/chainapsis/keplr-wallet.git \
    && cd keplr-wallet \
    && git checkout 400fa35fef6143154e301ab4bd1aa8a847ab4e7f
RUN cd third_party/keplr-wallet \
    && yarn
RUN cd third_party/keplr-wallet/packages/proto-types \
    && yarn build \
    && ls -la
