import _m0 from "protobufjs/minimal";
import { Header } from "../../tendermint/types/types";
import { ProofOps } from "../../tendermint/crypto/proof";
import { EvidenceParams, ValidatorParams, VersionParams } from "../../tendermint/types/params";
import { PublicKey } from "../../tendermint/crypto/keys";
export declare const protobufPackage = "tendermint.abci";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum EvidenceType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function evidenceTypeFromJSON(object: any): EvidenceType;
export declare function evidenceTypeToJSON(object: EvidenceType): string;
export interface Request {
    echo: RequestEcho | undefined;
    flush: RequestFlush | undefined;
    info: RequestInfo | undefined;
    setOption: RequestSetOption | undefined;
    initChain: RequestInitChain | undefined;
    query: RequestQuery | undefined;
    beginBlock: RequestBeginBlock | undefined;
    checkTx: RequestCheckTx | undefined;
    deliverTx: RequestDeliverTx | undefined;
    endBlock: RequestEndBlock | undefined;
    commit: RequestCommit | undefined;
    listSnapshots: RequestListSnapshots | undefined;
    offerSnapshot: RequestOfferSnapshot | undefined;
    loadSnapshotChunk: RequestLoadSnapshotChunk | undefined;
    applySnapshotChunk: RequestApplySnapshotChunk | undefined;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    blockVersion: string;
    p2pVersion: string;
}
/** nondeterministic */
export interface RequestSetOption {
    key: string;
    value: string;
}
export interface RequestInitChain {
    time: Date | undefined;
    chainId: string;
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: string;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: string;
    prove: boolean;
}
export interface RequestBeginBlock {
    hash: Uint8Array;
    header: Header | undefined;
    lastCommitInfo: LastCommitInfo | undefined;
    byzantineValidators: Evidence[];
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestDeliverTx {
    tx: Uint8Array;
}
export interface RequestEndBlock {
    height: string;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot: Snapshot | undefined;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: string;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface Response {
    exception: ResponseException | undefined;
    echo: ResponseEcho | undefined;
    flush: ResponseFlush | undefined;
    info: ResponseInfo | undefined;
    setOption: ResponseSetOption | undefined;
    initChain: ResponseInitChain | undefined;
    query: ResponseQuery | undefined;
    beginBlock: ResponseBeginBlock | undefined;
    checkTx: ResponseCheckTx | undefined;
    deliverTx: ResponseDeliverTx | undefined;
    endBlock: ResponseEndBlock | undefined;
    commit: ResponseCommit | undefined;
    listSnapshots: ResponseListSnapshots | undefined;
    offerSnapshot: ResponseOfferSnapshot | undefined;
    loadSnapshotChunk: ResponseLoadSnapshotChunk | undefined;
    applySnapshotChunk: ResponseApplySnapshotChunk | undefined;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: string;
    lastBlockHeight: string;
    lastBlockAppHash: Uint8Array;
}
/** nondeterministic */
export interface ResponseSetOption {
    code: number;
    /** bytes data = 2; */
    log: string;
    info: string;
}
export interface ResponseInitChain {
    consensusParams: ConsensusParams | undefined;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
}
export interface ResponseQuery {
    code: number;
    /** bytes data = 2; // use "value" instead. */
    log: string;
    /** nondeterministic */
    info: string;
    index: string;
    key: Uint8Array;
    value: Uint8Array;
    proofOps: ProofOps | undefined;
    height: string;
    codespace: string;
}
export interface ResponseBeginBlock {
    events: Event[];
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: string;
    gasUsed: string;
    events: Event[];
    codespace: string;
}
export interface ResponseDeliverTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: string;
    gasUsed: string;
    events: Event[];
    codespace: string;
}
export interface ResponseEndBlock {
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams | undefined;
    events: Event[];
}
export interface ResponseCommit {
    /** reserve 1 */
    data: Uint8Array;
    retainHeight: string;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export declare enum ResponseOfferSnapshot_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Snapshot accepted, apply chunks */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** REJECT - Reject this specific snapshot, try others */
    REJECT = 3,
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    REJECT_FORMAT = 4,
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    REJECT_SENDER = 5,
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export declare enum ResponseApplySnapshotChunk_Result {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    UNKNOWN = 0,
    /** ACCEPT - Chunk successfully accepted */
    ACCEPT = 1,
    /** ABORT - Abort all snapshot restoration */
    ABORT = 2,
    /** RETRY - Retry chunk (combine with refetch and reject) */
    RETRY = 3,
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    RETRY_SNAPSHOT = 4,
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    REJECT_SNAPSHOT = 5,
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /** Note: must be greater than 0 */
    maxBytes: string;
    /** Note: must be greater or equal to -1 */
    maxGas: string;
}
export interface LastCommitInfo {
    round: number;
    votes: VoteInfo[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: Uint8Array;
    value: Uint8Array;
    /** nondeterministic */
    index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 *
 * One usage is indexing transaction results.
 */
export interface TxResult {
    height: string;
    index: number;
    tx: Uint8Array;
    result: ResponseDeliverTx | undefined;
}
/** Validator */
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: string;
}
/** ValidatorUpdate */
export interface ValidatorUpdate {
    pubKey: PublicKey | undefined;
    power: string;
}
/** VoteInfo */
export interface VoteInfo {
    validator: Validator | undefined;
    signedLastBlock: boolean;
}
export interface Evidence {
    type: EvidenceType;
    /** The offending validator */
    validator: Validator | undefined;
    /** The height when the offense occurred */
    height: string;
    /** The corresponding time where the offense occurred */
    time: Date | undefined;
    /**
     * Total voting power of the validator set in case the ABCI application does
     * not store historical validators.
     * https://github.com/tendermint/tendermint/issues/4581
     */
    totalVotingPower: string;
}
export interface Snapshot {
    /** The height at which the snapshot was taken */
    height: string;
    /** The application-specific snapshot format */
    format: number;
    /** Number of chunks in the snapshot */
    chunks: number;
    /** Arbitrary snapshot hash, equal only if identical */
    hash: Uint8Array;
    /** Arbitrary application metadata */
    metadata: Uint8Array;
}
export declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    fromPartial<I extends {
        echo?: {
            message?: string | undefined;
        } | undefined;
        flush?: {} | undefined;
        info?: {
            version?: string | undefined;
            blockVersion?: string | undefined;
            p2pVersion?: string | undefined;
        } | undefined;
        setOption?: {
            key?: string | undefined;
            value?: string | undefined;
        } | undefined;
        initChain?: {
            time?: Date | undefined;
            chainId?: string | undefined;
            consensusParams?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            appStateBytes?: Uint8Array | undefined;
            initialHeight?: string | undefined;
        } | undefined;
        query?: {
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } | undefined;
        beginBlock?: {
            hash?: Uint8Array | undefined;
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            lastCommitInfo?: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            byzantineValidators?: {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            }[] | undefined;
        } | undefined;
        checkTx?: {
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } | undefined;
        deliverTx?: {
            tx?: Uint8Array | undefined;
        } | undefined;
        endBlock?: {
            height?: string | undefined;
        } | undefined;
        commit?: {} | undefined;
        listSnapshots?: {} | undefined;
        offerSnapshot?: {
            snapshot?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } | undefined;
            appHash?: Uint8Array | undefined;
        } | undefined;
        loadSnapshotChunk?: {
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } | undefined;
        applySnapshotChunk?: {
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } | undefined;
    } & {
        echo?: ({
            message?: string | undefined;
        } & {
            message?: string | undefined;
        } & Record<Exclude<keyof I["echo"], "message">, never>) | undefined;
        flush?: ({} & {} & Record<Exclude<keyof I["flush"], never>, never>) | undefined;
        info?: ({
            version?: string | undefined;
            blockVersion?: string | undefined;
            p2pVersion?: string | undefined;
        } & {
            version?: string | undefined;
            blockVersion?: string | undefined;
            p2pVersion?: string | undefined;
        } & Record<Exclude<keyof I["info"], keyof RequestInfo>, never>) | undefined;
        setOption?: ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["setOption"], keyof RequestSetOption>, never>) | undefined;
        initChain?: ({
            time?: Date | undefined;
            chainId?: string | undefined;
            consensusParams?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            appStateBytes?: Uint8Array | undefined;
            initialHeight?: string | undefined;
        } & {
            time?: Date | undefined;
            chainId?: string | undefined;
            consensusParams?: ({
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
                } & {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof BlockParams>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                    maxBytes?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof EvidenceParams>, never>) | undefined;
                validator?: ({
                    pubKeyTypes?: string[] | undefined;
                } & {
                    pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>) | undefined;
                version?: ({
                    appVersion?: string | undefined;
                } & {
                    appVersion?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>) | undefined;
            } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof ConsensusParams>, never>) | undefined;
            validators?: ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pubKey?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>, never>) | undefined;
            appStateBytes?: Uint8Array | undefined;
            initialHeight?: string | undefined;
        } & Record<Exclude<keyof I["initChain"], keyof RequestInitChain>, never>) | undefined;
        query?: ({
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } & {
            data?: Uint8Array | undefined;
            path?: string | undefined;
            height?: string | undefined;
            prove?: boolean | undefined;
        } & Record<Exclude<keyof I["query"], keyof RequestQuery>, never>) | undefined;
        beginBlock?: ({
            hash?: Uint8Array | undefined;
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            lastCommitInfo?: {
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                }[] | undefined;
            } | undefined;
            byzantineValidators?: {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            }[] | undefined;
        } & {
            hash?: Uint8Array | undefined;
            header?: ({
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | undefined;
                    app?: string | undefined;
                } & {
                    block?: string | undefined;
                    app?: string | undefined;
                } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                chainId?: string | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["beginBlock"]["header"], keyof Header>, never>) | undefined;
            lastCommitInfo?: ({
                round?: number | undefined;
                votes?: {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                }[] | undefined;
            } & {
                round?: number | undefined;
                votes?: ({
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                }[] & ({
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                } & {
                    validator?: ({
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } & {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof Validator>, never>) | undefined;
                    signedLastBlock?: boolean | undefined;
                } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                    validator?: {
                        address?: Uint8Array | undefined;
                        power?: string | undefined;
                    } | undefined;
                    signedLastBlock?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof LastCommitInfo>, never>) | undefined;
            byzantineValidators?: ({
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            }[] & ({
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            } & {
                type?: EvidenceType | undefined;
                validator?: ({
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof Validator>, never>) | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                type?: EvidenceType | undefined;
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                height?: string | undefined;
                time?: Date | undefined;
                totalVotingPower?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["beginBlock"], keyof RequestBeginBlock>, never>) | undefined;
        checkTx?: ({
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } & {
            tx?: Uint8Array | undefined;
            type?: CheckTxType | undefined;
        } & Record<Exclude<keyof I["checkTx"], keyof RequestCheckTx>, never>) | undefined;
        deliverTx?: ({
            tx?: Uint8Array | undefined;
        } & {
            tx?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["deliverTx"], "tx">, never>) | undefined;
        endBlock?: ({
            height?: string | undefined;
        } & {
            height?: string | undefined;
        } & Record<Exclude<keyof I["endBlock"], "height">, never>) | undefined;
        commit?: ({} & {} & Record<Exclude<keyof I["commit"], never>, never>) | undefined;
        listSnapshots?: ({} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>) | undefined;
        offerSnapshot?: ({
            snapshot?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } | undefined;
            appHash?: Uint8Array | undefined;
        } & {
            snapshot?: ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof Snapshot>, never>) | undefined;
            appHash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["offerSnapshot"], keyof RequestOfferSnapshot>, never>) | undefined;
        loadSnapshotChunk?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunk?: number | undefined;
        } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof RequestLoadSnapshotChunk>, never>) | undefined;
        applySnapshotChunk?: ({
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } & {
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            sender?: string | undefined;
        } & Record<Exclude<keyof I["applySnapshotChunk"], keyof RequestApplySnapshotChunk>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Request>, never>>(object: I): Request;
};
export declare const RequestEcho: {
    encode(message: RequestEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho;
    fromJSON(object: any): RequestEcho;
    toJSON(message: RequestEcho): unknown;
    fromPartial<I extends {
        message?: string | undefined;
    } & {
        message?: string | undefined;
    } & Record<Exclude<keyof I, "message">, never>>(object: I): RequestEcho;
};
export declare const RequestFlush: {
    encode(_: RequestFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush;
    fromJSON(_: any): RequestFlush;
    toJSON(_: RequestFlush): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestFlush;
};
export declare const RequestInfo: {
    encode(message: RequestInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo;
    fromJSON(object: any): RequestInfo;
    toJSON(message: RequestInfo): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        blockVersion?: string | undefined;
        p2pVersion?: string | undefined;
    } & {
        version?: string | undefined;
        blockVersion?: string | undefined;
        p2pVersion?: string | undefined;
    } & Record<Exclude<keyof I, keyof RequestInfo>, never>>(object: I): RequestInfo;
};
export declare const RequestSetOption: {
    encode(message: RequestSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption;
    fromJSON(object: any): RequestSetOption;
    toJSON(message: RequestSetOption): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof RequestSetOption>, never>>(object: I): RequestSetOption;
};
export declare const RequestInitChain: {
    encode(message: RequestInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain;
    fromJSON(object: any): RequestInitChain;
    toJSON(message: RequestInitChain): unknown;
    fromPartial<I extends {
        time?: Date | undefined;
        chainId?: string | undefined;
        consensusParams?: {
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
        } | undefined;
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        appStateBytes?: Uint8Array | undefined;
        initialHeight?: string | undefined;
    } & {
        time?: Date | undefined;
        chainId?: string | undefined;
        consensusParams?: ({
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
            } & {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["block"], keyof BlockParams>, never>) | undefined;
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
                } & Record<Exclude<keyof I["consensusParams"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                maxBytes?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["evidence"], keyof EvidenceParams>, never>) | undefined;
            validator?: ({
                pubKeyTypes?: string[] | undefined;
            } & {
                pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["validator"], "pubKeyTypes">, never>) | undefined;
            version?: ({
                appVersion?: string | undefined;
            } & {
                appVersion?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["version"], "appVersion">, never>) | undefined;
        } & Record<Exclude<keyof I["consensusParams"], keyof ConsensusParams>, never>) | undefined;
        validators?: ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
            power?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>, never>) | undefined;
        appStateBytes?: Uint8Array | undefined;
        initialHeight?: string | undefined;
    } & Record<Exclude<keyof I, keyof RequestInitChain>, never>>(object: I): RequestInitChain;
};
export declare const RequestQuery: {
    encode(message: RequestQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery;
    fromJSON(object: any): RequestQuery;
    toJSON(message: RequestQuery): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        path?: string | undefined;
        height?: string | undefined;
        prove?: boolean | undefined;
    } & {
        data?: Uint8Array | undefined;
        path?: string | undefined;
        height?: string | undefined;
        prove?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof RequestQuery>, never>>(object: I): RequestQuery;
};
export declare const RequestBeginBlock: {
    encode(message: RequestBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock;
    fromJSON(object: any): RequestBeginBlock;
    toJSON(message: RequestBeginBlock): unknown;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
        header?: {
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            lastBlockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } | undefined;
        lastCommitInfo?: {
            round?: number | undefined;
            votes?: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signedLastBlock?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        byzantineValidators?: {
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            totalVotingPower?: string | undefined;
        }[] | undefined;
    } & {
        hash?: Uint8Array | undefined;
        header?: ({
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            lastBlockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & {
            version?: ({
                block?: string | undefined;
                app?: string | undefined;
            } & {
                block?: string | undefined;
                app?: string | undefined;
            } & Record<Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
            chainId?: string | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            lastBlockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>, never>) | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        lastCommitInfo?: ({
            round?: number | undefined;
            votes?: {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signedLastBlock?: boolean | undefined;
            }[] | undefined;
        } & {
            round?: number | undefined;
            votes?: ({
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signedLastBlock?: boolean | undefined;
            }[] & ({
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signedLastBlock?: boolean | undefined;
            } & {
                validator?: ({
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } & Record<Exclude<keyof I["lastCommitInfo"]["votes"][number]["validator"], keyof Validator>, never>) | undefined;
                signedLastBlock?: boolean | undefined;
            } & Record<Exclude<keyof I["lastCommitInfo"]["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["lastCommitInfo"]["votes"], keyof {
                validator?: {
                    address?: Uint8Array | undefined;
                    power?: string | undefined;
                } | undefined;
                signedLastBlock?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["lastCommitInfo"], keyof LastCommitInfo>, never>) | undefined;
        byzantineValidators?: ({
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            totalVotingPower?: string | undefined;
        }[] & ({
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            totalVotingPower?: string | undefined;
        } & {
            type?: EvidenceType | undefined;
            validator?: ({
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["byzantineValidators"][number]["validator"], keyof Validator>, never>) | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            totalVotingPower?: string | undefined;
        } & Record<Exclude<keyof I["byzantineValidators"][number], keyof Evidence>, never>)[] & Record<Exclude<keyof I["byzantineValidators"], keyof {
            type?: EvidenceType | undefined;
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            height?: string | undefined;
            time?: Date | undefined;
            totalVotingPower?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof RequestBeginBlock>, never>>(object: I): RequestBeginBlock;
};
export declare const RequestCheckTx: {
    encode(message: RequestCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx;
    fromJSON(object: any): RequestCheckTx;
    toJSON(message: RequestCheckTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array | undefined;
        type?: CheckTxType | undefined;
    } & {
        tx?: Uint8Array | undefined;
        type?: CheckTxType | undefined;
    } & Record<Exclude<keyof I, keyof RequestCheckTx>, never>>(object: I): RequestCheckTx;
};
export declare const RequestDeliverTx: {
    encode(message: RequestDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx;
    fromJSON(object: any): RequestDeliverTx;
    toJSON(message: RequestDeliverTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array | undefined;
    } & {
        tx?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "tx">, never>>(object: I): RequestDeliverTx;
};
export declare const RequestEndBlock: {
    encode(message: RequestEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock;
    fromJSON(object: any): RequestEndBlock;
    toJSON(message: RequestEndBlock): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): RequestEndBlock;
};
export declare const RequestCommit: {
    encode(_: RequestCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit;
    fromJSON(_: any): RequestCommit;
    toJSON(_: RequestCommit): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestCommit;
};
export declare const RequestListSnapshots: {
    encode(_: RequestListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots;
    fromJSON(_: any): RequestListSnapshots;
    toJSON(_: RequestListSnapshots): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    encode(message: RequestOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromJSON(object: any): RequestOfferSnapshot;
    toJSON(message: RequestOfferSnapshot): unknown;
    fromPartial<I extends {
        snapshot?: {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } | undefined;
        appHash?: Uint8Array | undefined;
    } & {
        snapshot?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["snapshot"], keyof Snapshot>, never>) | undefined;
        appHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RequestOfferSnapshot>, never>>(object: I): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    encode(message: RequestLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromJSON(object: any): RequestLoadSnapshotChunk;
    toJSON(message: RequestLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunk?: number | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunk?: number | undefined;
    } & Record<Exclude<keyof I, keyof RequestLoadSnapshotChunk>, never>>(object: I): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    encode(message: RequestApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromJSON(object: any): RequestApplySnapshotChunk;
    toJSON(message: RequestApplySnapshotChunk): unknown;
    fromPartial<I extends {
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RequestApplySnapshotChunk>, never>>(object: I): RequestApplySnapshotChunk;
};
export declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    fromPartial<I extends {
        exception?: {
            error?: string | undefined;
        } | undefined;
        echo?: {
            message?: string | undefined;
        } | undefined;
        flush?: {} | undefined;
        info?: {
            data?: string | undefined;
            version?: string | undefined;
            appVersion?: string | undefined;
            lastBlockHeight?: string | undefined;
            lastBlockAppHash?: Uint8Array | undefined;
        } | undefined;
        setOption?: {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } | undefined;
        initChain?: {
            consensusParams?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            appHash?: Uint8Array | undefined;
        } | undefined;
        query?: {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proofOps?: {
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } | undefined;
        beginBlock?: {
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        checkTx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
        deliverTx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
        endBlock?: {
            validatorUpdates?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensusParamUpdates?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        commit?: {
            data?: Uint8Array | undefined;
            retainHeight?: string | undefined;
        } | undefined;
        listSnapshots?: {
            snapshots?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        offerSnapshot?: {
            result?: ResponseOfferSnapshot_Result | undefined;
        } | undefined;
        loadSnapshotChunk?: {
            chunk?: Uint8Array | undefined;
        } | undefined;
        applySnapshotChunk?: {
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetchChunks?: number[] | undefined;
            rejectSenders?: string[] | undefined;
        } | undefined;
    } & {
        exception?: ({
            error?: string | undefined;
        } & {
            error?: string | undefined;
        } & Record<Exclude<keyof I["exception"], "error">, never>) | undefined;
        echo?: ({
            message?: string | undefined;
        } & {
            message?: string | undefined;
        } & Record<Exclude<keyof I["echo"], "message">, never>) | undefined;
        flush?: ({} & {} & Record<Exclude<keyof I["flush"], never>, never>) | undefined;
        info?: ({
            data?: string | undefined;
            version?: string | undefined;
            appVersion?: string | undefined;
            lastBlockHeight?: string | undefined;
            lastBlockAppHash?: Uint8Array | undefined;
        } & {
            data?: string | undefined;
            version?: string | undefined;
            appVersion?: string | undefined;
            lastBlockHeight?: string | undefined;
            lastBlockAppHash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["info"], keyof ResponseInfo>, never>) | undefined;
        setOption?: ({
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } & {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
        } & Record<Exclude<keyof I["setOption"], keyof ResponseSetOption>, never>) | undefined;
        initChain?: ({
            consensusParams?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            validators?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            appHash?: Uint8Array | undefined;
        } & {
            consensusParams?: ({
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
                } & {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof BlockParams>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                    maxBytes?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof EvidenceParams>, never>) | undefined;
                validator?: ({
                    pubKeyTypes?: string[] | undefined;
                } & {
                    pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>) | undefined;
                version?: ({
                    appVersion?: string | undefined;
                } & {
                    appVersion?: string | undefined;
                } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>) | undefined;
            } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof ConsensusParams>, never>) | undefined;
            validators?: ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pubKey?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>, never>) | undefined;
            appHash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["initChain"], keyof ResponseInitChain>, never>) | undefined;
        query?: ({
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proofOps?: {
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            log?: string | undefined;
            info?: string | undefined;
            index?: string | undefined;
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            proofOps?: ({
                ops?: {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                ops?: ({
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[] & ({
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                } & {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["query"]["proofOps"]["ops"][number], keyof import("../../tendermint/crypto/proof").ProofOp>, never>)[] & Record<Exclude<keyof I["query"]["proofOps"]["ops"], keyof {
                    type?: string | undefined;
                    key?: Uint8Array | undefined;
                    data?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["query"]["proofOps"], "ops">, never>) | undefined;
            height?: string | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["query"], keyof ResponseQuery>, never>) | undefined;
        beginBlock?: ({
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["beginBlock"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["beginBlock"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["beginBlock"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["beginBlock"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["beginBlock"], "events">, never>) | undefined;
        checkTx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["checkTx"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["checkTx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["checkTx"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["checkTx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["checkTx"], keyof ResponseCheckTx>, never>) | undefined;
        deliverTx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["deliverTx"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["deliverTx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["deliverTx"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["deliverTx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["deliverTx"], keyof ResponseDeliverTx>, never>) | undefined;
        endBlock?: ({
            validatorUpdates?: {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensusParamUpdates?: {
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            validatorUpdates?: ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pubKey?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["endBlock"]["validatorUpdates"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["endBlock"]["validatorUpdates"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["endBlock"]["validatorUpdates"], keyof {
                pubKey?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>, never>) | undefined;
            consensusParamUpdates?: ({
                block?: {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
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
                } & {
                    maxBytes?: string | undefined;
                    maxGas?: string | undefined;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["block"], keyof BlockParams>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                    maxBytes?: string | undefined;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["evidence"], keyof EvidenceParams>, never>) | undefined;
                validator?: ({
                    pubKeyTypes?: string[] | undefined;
                } & {
                    pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>) | undefined;
                version?: ({
                    appVersion?: string | undefined;
                } & {
                    appVersion?: string | undefined;
                } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>) | undefined;
            } & Record<Exclude<keyof I["endBlock"]["consensusParamUpdates"], keyof ConsensusParams>, never>) | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["endBlock"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["endBlock"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["endBlock"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["endBlock"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["endBlock"], keyof ResponseEndBlock>, never>) | undefined;
        commit?: ({
            data?: Uint8Array | undefined;
            retainHeight?: string | undefined;
        } & {
            data?: Uint8Array | undefined;
            retainHeight?: string | undefined;
        } & Record<Exclude<keyof I["commit"], keyof ResponseCommit>, never>) | undefined;
        listSnapshots?: ({
            snapshots?: {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            snapshots?: ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[] & ({
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["listSnapshots"]["snapshots"][number], keyof Snapshot>, never>)[] & Record<Exclude<keyof I["listSnapshots"]["snapshots"], keyof {
                height?: string | undefined;
                format?: number | undefined;
                chunks?: number | undefined;
                hash?: Uint8Array | undefined;
                metadata?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["listSnapshots"], "snapshots">, never>) | undefined;
        offerSnapshot?: ({
            result?: ResponseOfferSnapshot_Result | undefined;
        } & {
            result?: ResponseOfferSnapshot_Result | undefined;
        } & Record<Exclude<keyof I["offerSnapshot"], "result">, never>) | undefined;
        loadSnapshotChunk?: ({
            chunk?: Uint8Array | undefined;
        } & {
            chunk?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["loadSnapshotChunk"], "chunk">, never>) | undefined;
        applySnapshotChunk?: ({
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetchChunks?: number[] | undefined;
            rejectSenders?: string[] | undefined;
        } & {
            result?: ResponseApplySnapshotChunk_Result | undefined;
            refetchChunks?: (number[] & number[] & Record<Exclude<keyof I["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>) | undefined;
            rejectSenders?: (string[] & string[] & Record<Exclude<keyof I["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["applySnapshotChunk"], keyof ResponseApplySnapshotChunk>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Response>, never>>(object: I): Response;
};
export declare const ResponseException: {
    encode(message: ResponseException, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException;
    fromJSON(object: any): ResponseException;
    toJSON(message: ResponseException): unknown;
    fromPartial<I extends {
        error?: string | undefined;
    } & {
        error?: string | undefined;
    } & Record<Exclude<keyof I, "error">, never>>(object: I): ResponseException;
};
export declare const ResponseEcho: {
    encode(message: ResponseEcho, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEcho;
    fromJSON(object: any): ResponseEcho;
    toJSON(message: ResponseEcho): unknown;
    fromPartial<I extends {
        message?: string | undefined;
    } & {
        message?: string | undefined;
    } & Record<Exclude<keyof I, "message">, never>>(object: I): ResponseEcho;
};
export declare const ResponseFlush: {
    encode(_: ResponseFlush, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlush;
    fromJSON(_: any): ResponseFlush;
    toJSON(_: ResponseFlush): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ResponseFlush;
};
export declare const ResponseInfo: {
    encode(message: ResponseInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfo;
    fromJSON(object: any): ResponseInfo;
    toJSON(message: ResponseInfo): unknown;
    fromPartial<I extends {
        data?: string | undefined;
        version?: string | undefined;
        appVersion?: string | undefined;
        lastBlockHeight?: string | undefined;
        lastBlockAppHash?: Uint8Array | undefined;
    } & {
        data?: string | undefined;
        version?: string | undefined;
        appVersion?: string | undefined;
        lastBlockHeight?: string | undefined;
        lastBlockAppHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ResponseInfo>, never>>(object: I): ResponseInfo;
};
export declare const ResponseSetOption: {
    encode(message: ResponseSetOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOption;
    fromJSON(object: any): ResponseSetOption;
    toJSON(message: ResponseSetOption): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
    } & {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
    } & Record<Exclude<keyof I, keyof ResponseSetOption>, never>>(object: I): ResponseSetOption;
};
export declare const ResponseInitChain: {
    encode(message: ResponseInitChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChain;
    fromJSON(object: any): ResponseInitChain;
    toJSON(message: ResponseInitChain): unknown;
    fromPartial<I extends {
        consensusParams?: {
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
        } | undefined;
        validators?: {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        appHash?: Uint8Array | undefined;
    } & {
        consensusParams?: ({
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
            } & {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["block"], keyof BlockParams>, never>) | undefined;
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
                } & Record<Exclude<keyof I["consensusParams"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                maxBytes?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["evidence"], keyof EvidenceParams>, never>) | undefined;
            validator?: ({
                pubKeyTypes?: string[] | undefined;
            } & {
                pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["validator"], "pubKeyTypes">, never>) | undefined;
            version?: ({
                appVersion?: string | undefined;
            } & {
                appVersion?: string | undefined;
            } & Record<Exclude<keyof I["consensusParams"]["version"], "appVersion">, never>) | undefined;
        } & Record<Exclude<keyof I["consensusParams"], keyof ConsensusParams>, never>) | undefined;
        validators?: ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
            power?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>, never>) | undefined;
        appHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ResponseInitChain>, never>>(object: I): ResponseInitChain;
};
export declare const ResponseQuery: {
    encode(message: ResponseQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery;
    fromJSON(object: any): ResponseQuery;
    toJSON(message: ResponseQuery): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
        index?: string | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        proofOps?: {
            ops?: {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        height?: string | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        log?: string | undefined;
        info?: string | undefined;
        index?: string | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        proofOps?: ({
            ops?: {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            ops?: ({
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            } & {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proofOps"]["ops"][number], keyof import("../../tendermint/crypto/proof").ProofOp>, never>)[] & Record<Exclude<keyof I["proofOps"]["ops"], keyof {
                type?: string | undefined;
                key?: Uint8Array | undefined;
                data?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proofOps"], "ops">, never>) | undefined;
        height?: string | undefined;
        codespace?: string | undefined;
    } & Record<Exclude<keyof I, keyof ResponseQuery>, never>>(object: I): ResponseQuery;
};
export declare const ResponseBeginBlock: {
    encode(message: ResponseBeginBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlock;
    fromJSON(object: any): ResponseBeginBlock;
    toJSON(message: ResponseBeginBlock): unknown;
    fromPartial<I extends {
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "events">, never>>(object: I): ResponseBeginBlock;
};
export declare const ResponseCheckTx: {
    encode(message: ResponseCheckTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTx;
    fromJSON(object: any): ResponseCheckTx;
    toJSON(message: ResponseCheckTx): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gasWanted?: string | undefined;
        gasUsed?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gasWanted?: string | undefined;
        gasUsed?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        codespace?: string | undefined;
    } & Record<Exclude<keyof I, keyof ResponseCheckTx>, never>>(object: I): ResponseCheckTx;
};
export declare const ResponseDeliverTx: {
    encode(message: ResponseDeliverTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTx;
    fromJSON(object: any): ResponseDeliverTx;
    toJSON(message: ResponseDeliverTx): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gasWanted?: string | undefined;
        gasUsed?: string | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
        codespace?: string | undefined;
    } & {
        code?: number | undefined;
        data?: Uint8Array | undefined;
        log?: string | undefined;
        info?: string | undefined;
        gasWanted?: string | undefined;
        gasUsed?: string | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        codespace?: string | undefined;
    } & Record<Exclude<keyof I, keyof ResponseDeliverTx>, never>>(object: I): ResponseDeliverTx;
};
export declare const ResponseEndBlock: {
    encode(message: ResponseEndBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlock;
    fromJSON(object: any): ResponseEndBlock;
    toJSON(message: ResponseEndBlock): unknown;
    fromPartial<I extends {
        validatorUpdates?: {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] | undefined;
        consensusParamUpdates?: {
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
        } | undefined;
        events?: {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        validatorUpdates?: ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[] & ({
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        } & {
            pubKey?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validatorUpdates"][number]["pubKey"], keyof PublicKey>, never>) | undefined;
            power?: string | undefined;
        } & Record<Exclude<keyof I["validatorUpdates"][number], keyof ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["validatorUpdates"], keyof {
            pubKey?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            power?: string | undefined;
        }[]>, never>) | undefined;
        consensusParamUpdates?: ({
            block?: {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
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
            } & {
                maxBytes?: string | undefined;
                maxGas?: string | undefined;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["block"], keyof BlockParams>, never>) | undefined;
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
                } & Record<Exclude<keyof I["consensusParamUpdates"]["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                maxBytes?: string | undefined;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["evidence"], keyof EvidenceParams>, never>) | undefined;
            validator?: ({
                pubKeyTypes?: string[] | undefined;
            } & {
                pubKeyTypes?: (string[] & string[] & Record<Exclude<keyof I["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>) | undefined;
            version?: ({
                appVersion?: string | undefined;
            } & {
                appVersion?: string | undefined;
            } & Record<Exclude<keyof I["consensusParamUpdates"]["version"], "appVersion">, never>) | undefined;
        } & Record<Exclude<keyof I["consensusParamUpdates"], keyof ConsensusParams>, never>) | undefined;
        events?: ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] & ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            } & Record<Exclude<keyof I["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["events"][number]["attributes"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["events"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                index?: boolean | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ResponseEndBlock>, never>>(object: I): ResponseEndBlock;
};
export declare const ResponseCommit: {
    encode(message: ResponseCommit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommit;
    fromJSON(object: any): ResponseCommit;
    toJSON(message: ResponseCommit): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        retainHeight?: string | undefined;
    } & {
        data?: Uint8Array | undefined;
        retainHeight?: string | undefined;
    } & Record<Exclude<keyof I, keyof ResponseCommit>, never>>(object: I): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    encode(message: ResponseListSnapshots, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshots;
    fromJSON(object: any): ResponseListSnapshots;
    toJSON(message: ResponseListSnapshots): unknown;
    fromPartial<I extends {
        snapshots?: {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        snapshots?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[] & ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["snapshots"][number], keyof Snapshot>, never>)[] & Record<Exclude<keyof I["snapshots"], keyof {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "snapshots">, never>>(object: I): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    encode(message: ResponseOfferSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromJSON(object: any): ResponseOfferSnapshot;
    toJSON(message: ResponseOfferSnapshot): unknown;
    fromPartial<I extends {
        result?: ResponseOfferSnapshot_Result | undefined;
    } & {
        result?: ResponseOfferSnapshot_Result | undefined;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    encode(message: ResponseLoadSnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromJSON(object: any): ResponseLoadSnapshotChunk;
    toJSON(message: ResponseLoadSnapshotChunk): unknown;
    fromPartial<I extends {
        chunk?: Uint8Array | undefined;
    } & {
        chunk?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "chunk">, never>>(object: I): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    encode(message: ResponseApplySnapshotChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromJSON(object: any): ResponseApplySnapshotChunk;
    toJSON(message: ResponseApplySnapshotChunk): unknown;
    fromPartial<I extends {
        result?: ResponseApplySnapshotChunk_Result | undefined;
        refetchChunks?: number[] | undefined;
        rejectSenders?: string[] | undefined;
    } & {
        result?: ResponseApplySnapshotChunk_Result | undefined;
        refetchChunks?: (number[] & number[] & Record<Exclude<keyof I["refetchChunks"], keyof number[]>, never>) | undefined;
        rejectSenders?: (string[] & string[] & Record<Exclude<keyof I["rejectSenders"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ResponseApplySnapshotChunk>, never>>(object: I): ResponseApplySnapshotChunk;
};
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            maxBytes?: string | undefined;
            maxGas?: string | undefined;
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
        } & {
            maxBytes?: string | undefined;
            maxGas?: string | undefined;
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
            } & Record<Exclude<keyof I["evidence"]["maxAgeDuration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
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
    } & {
        maxBytes?: string | undefined;
        maxGas?: string | undefined;
    } & Record<Exclude<keyof I, keyof BlockParams>, never>>(object: I): BlockParams;
};
export declare const LastCommitInfo: {
    encode(message: LastCommitInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo;
    fromJSON(object: any): LastCommitInfo;
    toJSON(message: LastCommitInfo): unknown;
    fromPartial<I extends {
        round?: number | undefined;
        votes?: {
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signedLastBlock?: boolean | undefined;
        }[] | undefined;
    } & {
        round?: number | undefined;
        votes?: ({
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signedLastBlock?: boolean | undefined;
        }[] & ({
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signedLastBlock?: boolean | undefined;
        } & {
            validator?: ({
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["votes"][number]["validator"], keyof Validator>, never>) | undefined;
            signedLastBlock?: boolean | undefined;
        } & Record<Exclude<keyof I["votes"][number], keyof VoteInfo>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            validator?: {
                address?: Uint8Array | undefined;
                power?: string | undefined;
            } | undefined;
            signedLastBlock?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LastCommitInfo>, never>>(object: I): LastCommitInfo;
};
export declare const Event: {
    encode(message: Event, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Event;
    fromJSON(object: any): Event;
    toJSON(message: Event): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        attributes?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        }[] | undefined;
    } & {
        type?: string | undefined;
        attributes?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        }[] & ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        } & Record<Exclude<keyof I["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            index?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Event>, never>>(object: I): Event;
};
export declare const EventAttribute: {
    encode(message: EventAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute;
    fromJSON(object: any): EventAttribute;
    toJSON(message: EventAttribute): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        index?: boolean | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        index?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof EventAttribute>, never>>(object: I): EventAttribute;
};
export declare const TxResult: {
    encode(message: TxResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxResult;
    fromJSON(object: any): TxResult;
    toJSON(message: TxResult): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        index?: number | undefined;
        tx?: Uint8Array | undefined;
        result?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        index?: number | undefined;
        tx?: Uint8Array | undefined;
        result?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gasWanted?: string | undefined;
            gasUsed?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof EventAttribute>, never>)[] & Record<Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["events"][number], keyof Event>, never>)[] & Record<Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["result"], keyof ResponseDeliverTx>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TxResult>, never>>(object: I): TxResult;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
        power?: string | undefined;
    } & {
        address?: Uint8Array | undefined;
        power?: string | undefined;
    } & Record<Exclude<keyof I, keyof Validator>, never>>(object: I): Validator;
};
export declare const ValidatorUpdate: {
    encode(message: ValidatorUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate;
    fromJSON(object: any): ValidatorUpdate;
    toJSON(message: ValidatorUpdate): unknown;
    fromPartial<I extends {
        pubKey?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        power?: string | undefined;
    } & {
        pubKey?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubKey"], keyof PublicKey>, never>) | undefined;
        power?: string | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorUpdate>, never>>(object: I): ValidatorUpdate;
};
export declare const VoteInfo: {
    encode(message: VoteInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo;
    fromJSON(object: any): VoteInfo;
    toJSON(message: VoteInfo): unknown;
    fromPartial<I extends {
        validator?: {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } | undefined;
        signedLastBlock?: boolean | undefined;
    } & {
        validator?: ({
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>) | undefined;
        signedLastBlock?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof VoteInfo>, never>>(object: I): VoteInfo;
};
export declare const Evidence: {
    encode(message: Evidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial<I extends {
        type?: EvidenceType | undefined;
        validator?: {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } | undefined;
        height?: string | undefined;
        time?: Date | undefined;
        totalVotingPower?: string | undefined;
    } & {
        type?: EvidenceType | undefined;
        validator?: ({
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & {
            address?: Uint8Array | undefined;
            power?: string | undefined;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>) | undefined;
        height?: string | undefined;
        time?: Date | undefined;
        totalVotingPower?: string | undefined;
    } & Record<Exclude<keyof I, keyof Evidence>, never>>(object: I): Evidence;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Snapshot>, never>>(object: I): Snapshot;
};
export interface ABCIApplication {
    Echo(request: RequestEcho): Promise<ResponseEcho>;
    Flush(request: RequestFlush): Promise<ResponseFlush>;
    Info(request: RequestInfo): Promise<ResponseInfo>;
    SetOption(request: RequestSetOption): Promise<ResponseSetOption>;
    DeliverTx(request: RequestDeliverTx): Promise<ResponseDeliverTx>;
    CheckTx(request: RequestCheckTx): Promise<ResponseCheckTx>;
    Query(request: RequestQuery): Promise<ResponseQuery>;
    Commit(request: RequestCommit): Promise<ResponseCommit>;
    InitChain(request: RequestInitChain): Promise<ResponseInitChain>;
    BeginBlock(request: RequestBeginBlock): Promise<ResponseBeginBlock>;
    EndBlock(request: RequestEndBlock): Promise<ResponseEndBlock>;
    ListSnapshots(request: RequestListSnapshots): Promise<ResponseListSnapshots>;
    OfferSnapshot(request: RequestOfferSnapshot): Promise<ResponseOfferSnapshot>;
    LoadSnapshotChunk(request: RequestLoadSnapshotChunk): Promise<ResponseLoadSnapshotChunk>;
    ApplySnapshotChunk(request: RequestApplySnapshotChunk): Promise<ResponseApplySnapshotChunk>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
