# atomic-protogen

Used to build typescript source files from .proto files for cosmos-like blockchains that are used in the Atomic Wallet.

## build
Builds a Docker image, generates TypeScript code within the image, and copies the results to the local `dist` directory.

```bash
./build.sh
```

## check

Outputs hash of a dist directory. Exits with code 1 if not equals to `dist/output_hash.txt`.

```bash
node scripts/checkLatestHash.mjs
```

Script were tested with Node.js v18.
