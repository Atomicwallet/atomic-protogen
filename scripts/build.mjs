// origin https://github.com/chainapsis/keplr-wallet/blob/master/packages/proto-types/proto-types-gen/scripts/proto-gen.mjs
import "zx/globals";
import fs from "fs";
import FolderHash from "folder-hash";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outDir = path.join(__dirname, "../dist");
const baseDirPath = path.join(__dirname, "..");

const baseProtoPath = path.join(baseDirPath, "proto/base");
const thirdPartyProtoPath = path.join(baseDirPath, "proto/third_party");

const outputHashFilename = "output_hash.txt";
const outputHashLocation = path.join(baseDirPath, outputHashFilename);

async function calculateOutputHash(root) {
    const dirCandidates = fs.readdirSync(root, {
        withFileTypes: true,
    });

    let dirs = [];

    for (const candidate of dirCandidates) {
        if (candidate.isDirectory()) {
            dirs.push(candidate);
        }
    }

    dirs = dirs.sort((dir1, dir2) => {
        if (dir1.name < dir2.name) return -1;
        if (dir1.name > dir2.name) return 1;
        return 0;
    });

    let hash = Buffer.alloc(0);
    for (const dir of dirs) {
        const p = path.join(root, dir.name);
        const buf = Buffer.from((await FolderHash.hashElement(p)).hash, "base64");

        console.log(p, buf.toString("base64"));

        hash = Buffer.concat([hash, buf]);
    }

    return hash.toString("base64");
}

function getOutputHash(filepath) {
    return fs.readFileSync(filepath).toString();
}

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

        let lastOutputHash = undefined;
        if (process.env.CI === "true") {
            console.log("You are ci runner");
            lastOutputHash = getOutputHash(outputHashLocation);
            console.log("Expected output hash is", lastOutputHash);
        }

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

        if (lastOutputHash && lastOutputHash !== outputHash) {
            throw new Error("Output is different");
        }

        setOutputHash(outputHashLocation, outputHash);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();
