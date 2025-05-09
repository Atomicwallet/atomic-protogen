import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** Params defines the parameters for the bank module. */
export interface Params {
    sendEnabled: SendEnabled[];
    defaultSendEnabled: boolean;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 */
export interface SendEnabled {
    denom: string;
    enabled: boolean;
}
/** Input models transaction input. */
export interface Input {
    address: string;
    coins: Coin[];
}
/** Output models transaction outputs. */
export interface Output {
    address: string;
    coins: Coin[];
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 *
 * @deprecated
 */
export interface Supply {
    total: Coin[];
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
    /** denom represents the string name of the given denom unit (e.g uatom). */
    denom: string;
    /**
     * exponent represents power of 10 exponent that one must
     * raise the base_denom to in order to equal the given DenomUnit's denom
     * 1 denom = 1^exponent base_denom
     * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
     * exponent = 6, thus: 1 atom = 10^6 uatom).
     */
    exponent: number;
    /** aliases is a list of string aliases for the given denom */
    aliases: string[];
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 */
export interface Metadata {
    description: string;
    /** denom_units represents the list of DenomUnit's for a given coin */
    denomUnits: DenomUnit[];
    /** base represents the base denom (should be the DenomUnit with exponent = 0). */
    base: string;
    /**
     * display indicates the suggested denom that should be
     * displayed in clients.
     */
    display: string;
    /** name defines the name of the token (eg: Cosmos Atom) */
    name: string;
    /**
     * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
     * be the same as the display.
     */
    symbol: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        sendEnabled?: {
            denom?: string | undefined;
            enabled?: boolean | undefined;
        }[] | undefined;
        defaultSendEnabled?: boolean | undefined;
    } & {
        sendEnabled?: ({
            denom?: string | undefined;
            enabled?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            enabled?: boolean | undefined;
        } & {
            denom?: string | undefined;
            enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["sendEnabled"][number], keyof SendEnabled>, never>)[] & Record<Exclude<keyof I["sendEnabled"], keyof {
            denom?: string | undefined;
            enabled?: boolean | undefined;
        }[]>, never>) | undefined;
        defaultSendEnabled?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
export declare const SendEnabled: {
    encode(message: SendEnabled, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendEnabled;
    fromJSON(object: any): SendEnabled;
    toJSON(message: SendEnabled): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        enabled?: boolean | undefined;
    } & {
        denom?: string | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof SendEnabled>, never>>(object: I): SendEnabled;
};
export declare const Input: {
    encode(message: Input, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Input;
    fromJSON(object: any): Input;
    toJSON(message: Input): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Input>, never>>(object: I): Input;
};
export declare const Output: {
    encode(message: Output, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Output;
    fromJSON(object: any): Output;
    toJSON(message: Output): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Output>, never>>(object: I): Output;
};
export declare const Supply: {
    encode(message: Supply, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Supply;
    fromJSON(object: any): Supply;
    toJSON(message: Supply): unknown;
    fromPartial<I extends {
        total?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        total?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["total"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["total"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "total">, never>>(object: I): Supply;
};
export declare const DenomUnit: {
    encode(message: DenomUnit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomUnit;
    fromJSON(object: any): DenomUnit;
    toJSON(message: DenomUnit): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        exponent?: number | undefined;
        aliases?: string[] | undefined;
    } & {
        denom?: string | undefined;
        exponent?: number | undefined;
        aliases?: (string[] & string[] & Record<Exclude<keyof I["aliases"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DenomUnit>, never>>(object: I): DenomUnit;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        denomUnits?: {
            denom?: string | undefined;
            exponent?: number | undefined;
            aliases?: string[] | undefined;
        }[] | undefined;
        base?: string | undefined;
        display?: string | undefined;
        name?: string | undefined;
        symbol?: string | undefined;
    } & {
        description?: string | undefined;
        denomUnits?: ({
            denom?: string | undefined;
            exponent?: number | undefined;
            aliases?: string[] | undefined;
        }[] & ({
            denom?: string | undefined;
            exponent?: number | undefined;
            aliases?: string[] | undefined;
        } & {
            denom?: string | undefined;
            exponent?: number | undefined;
            aliases?: (string[] & string[] & Record<Exclude<keyof I["denomUnits"][number]["aliases"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["denomUnits"][number], keyof DenomUnit>, never>)[] & Record<Exclude<keyof I["denomUnits"], keyof {
            denom?: string | undefined;
            exponent?: number | undefined;
            aliases?: string[] | undefined;
        }[]>, never>) | undefined;
        base?: string | undefined;
        display?: string | undefined;
        name?: string | undefined;
        symbol?: string | undefined;
    } & Record<Exclude<keyof I, keyof Metadata>, never>>(object: I): Metadata;
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
