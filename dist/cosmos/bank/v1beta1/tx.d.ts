import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Input, Output } from "../../../cosmos/bank/v1beta1/bank";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export declare const MsgSend: {
    encode(message: MsgSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial<I extends {
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSend>, never>>(object: I): MsgSend;
};
export declare const MsgSendResponse: {
    encode(_: MsgSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSendResponse;
};
export declare const MsgMultiSend: {
    encode(message: MsgMultiSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial<I extends {
        inputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        outputs?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        inputs?: ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["inputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["inputs"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["inputs"][number], keyof Input>, never>)[] & Record<Exclude<keyof I["inputs"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        outputs?: ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["outputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["outputs"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["outputs"][number], keyof Output>, never>)[] & Record<Exclude<keyof I["outputs"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgMultiSend>, never>>(object: I): MsgMultiSend;
};
export declare const MsgMultiSendResponse: {
    encode(_: MsgMultiSendResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgMultiSendResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** Send defines a method for sending coins from one account to another account. */
    Send(request: MsgSend): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
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
