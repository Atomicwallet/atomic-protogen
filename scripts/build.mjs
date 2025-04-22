// origin https://github.com/chainapsis/keplr-wallet/blob/master/packages/proto-types/proto-types-gen/scripts/proto-gen.mjs
import "zx/globals";
import fs from "fs";
import path from "path";
import { calculateOutputHash, outDir, __dirname, baseProtoPath, thirdPartyProtoPath, outputHashLocation } from "./lib.mjs";
import { $ } from "zx";

function setOutputHash(filepath, hash) {
  return fs.writeFileSync(filepath, hash, { mode: 0o600 });
}

(async () => {
  try {
    $.verbose = false;

    if (fs.existsSync(outDir)) {
      fs.rmdirSync(outDir, { recursive: true });
    }

    await $`mkdir -p ${outDir}`;
    $.verbose = true;

    const protoTsBinPath = (() => {
      const binPath = path.join(
        __dirname,
        "../node_modules/.bin/protoc-gen-ts_proto"
      );
      fs.readFileSync(binPath);
      return binPath;
    })();

    const inputs = [
      "babylon/epoching/v1/tx.proto",
      "babylon/incentive/tx.proto",
    ];

    const thirdPartyInputs = ["tendermint/crypto/keys.proto"];

    await $`protoc \
      --plugin=${protoTsBinPath} \
      --ts_proto_opt=forceLong=string \
      --ts_proto_opt=esModuleInterop=true \
      --ts_proto_opt=outputClientImpl=false \
      --proto_path=${baseProtoPath} \
      --proto_path=${thirdPartyProtoPath} \
      --ts_proto_out=${outDir} \
      ${inputs.map((i) => path.join(baseProtoPath, i))} \
      ${thirdPartyInputs.map((i) => path.join(thirdPartyProtoPath, i))}`;

    fs.rmSync(path.join(outDir, "gogoproto"), {
      recursive: true,
    });

    fs.rmSync(path.join(outDir, "cosmos_proto"), {
      recursive: true,
    });

    const outputHash = await calculateOutputHash(outDir);

    console.log("Output hash is", outputHash);

    setOutputHash(outputHashLocation, outputHash);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
