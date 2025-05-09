import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: string;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: string;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    timeIotaMs: string;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: string;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: Duration | undefined;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: string;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    appVersion: string;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: string;
    blockMaxGas: string;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            maxBytes?: string | undefined;
            maxGas?: string | undefined;
            timeIotaMs?: string | undefined;
        } | undefined;
        evidence?: {
            maxAgeNumBlocks?: string | undefined;
            maxAgeDuration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxBytes?: string | undefined;
        } | undefined;
        validator?: {
            pubKeyTypes?: string[] | undefined;
        } | undefined;
        version?: {
            appVersion?: string | undefined;
        } | undefined;
    } & {
        block?: ({
            maxBytes?: string | undefined;
            maxGas?: string | undefined;
            timeIotaMs?: string | undefined;
        } & {
            maxBytes?: string | undefined;
            maxGas?: string | undefined;
            timeIotaMs?: string | undefined;
        } & Record<Exclude<keyof I["block"], keyof BlockParams>, never>) | undefined;
        evidence?: ({
            maxAgeNumBlocks?: string | undefined;
            maxAgeDuration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxBytes?: string | undefined;
        } & {
            maxAgeNumBlocks?: string | undefined;
            maxAgeDuration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["evidence"]["maxAgeDuration"], keyof Duration>, never>) | undefined;
            maxBytes?: string | undefined;
        } & Record<Exclude<keyof I["evidence"], keyof EvidenceParams>, never>) | undefined;
        validator?: ({
            pubKeyTypes?: string[] | undefined;
        } & {
            pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["validator"], "pubKeyTypes">, never>) | undefined;
        version?: ({
            appVersion?: string | undefined;
        } & {
            appVersion?: string | undefined;
        } & Record<Exclude<keyof I["version"], "appVersion">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusParams>, never>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends {
        maxBytes?: string | undefined;
        maxGas?: string | undefined;
        timeIotaMs?: string | undefined;
    } & {
        maxBytes?: string | undefined;
        maxGas?: string | undefined;
        timeIotaMs?: string | undefined;
    } & Record<Exclude<keyof I, keyof BlockParams>, never>>(object: I): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    fromPartial<I extends {
        maxAgeNumBlocks?: string | undefined;
        maxAgeDuration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        maxBytes?: string | undefined;
    } & {
        maxAgeNumBlocks?: string | undefined;
        maxAgeDuration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["maxAgeDuration"], keyof Duration>, never>) | undefined;
        maxBytes?: string | undefined;
    } & Record<Exclude<keyof I, keyof EvidenceParams>, never>>(object: I): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial<I extends {
        pubKeyTypes?: string[] | undefined;
    } & {
        pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["pubKeyTypes"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pubKeyTypes">, never>>(object: I): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    fromPartial<I extends {
        appVersion?: string | undefined;
    } & {
        appVersion?: string | undefined;
    } & Record<Exclude<keyof I, "appVersion">, never>>(object: I): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    fromPartial<I extends {
        blockMaxBytes?: string | undefined;
        blockMaxGas?: string | undefined;
    } & {
        blockMaxBytes?: string | undefined;
        blockMaxGas?: string | undefined;
    } & Record<Exclude<keyof I, keyof HashedParams>, never>>(object: I): HashedParams;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
