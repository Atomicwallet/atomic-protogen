import "zx/globals";
import fs from "fs";
import FolderHash from "folder-hash";
import path from "path";
import { fileURLToPath } from "url";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const baseDirPath = path.join(__dirname, "..");

export const baseProtoPath = path.join(baseDirPath, "proto/base");
export const thirdPartyProtoPath = path.join(baseDirPath, "proto/third_party");

export const outDir = path.join(__dirname, "../dist");

export const outputHashFilename = "output_hash.txt";
export const outputHashLocation = path.join(outDir, outputHashFilename);

export function getOutputHash(filepath) {
    return fs.readFileSync(filepath).toString();
}

export async function calculateOutputHash(root) {
    if (!fs.existsSync(root)) {
        throw new Error(`Directory ${root} does not exist`);
    }
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
