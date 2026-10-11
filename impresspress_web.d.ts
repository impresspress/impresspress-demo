/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */

export type ReadableStreamType = "bytes";

export class IntoUnderlyingByteSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableByteStreamController): Promise<any>;
    start(controller: ReadableByteStreamController): void;
    readonly autoAllocateChunkSize: number;
    readonly type: ReadableStreamType;
}

export class IntoUnderlyingSink {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abort(reason: any): Promise<any>;
    close(): Promise<any>;
    write(chunk: any): Promise<any>;
}

export class IntoUnderlyingSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableStreamDefaultController): Promise<any>;
}

/**
 * Answer one fetch event: resolves to `{ response, after }`, where
 * `response` is the `Response` to hand to `respondWith` and `after` is a
 * promise for the work the request left to run after it (its request-log
 * row and the tasks its handlers deferred). The service worker must pass
 * `after` to `event.waitUntil`, or the worker can be stopped before that
 * work has run. See `impresspress_browser::dispatch_request`.
 */
export function handle_request(request: Request): Promise<any>;

/**
 * Boot the runtime inside the Service Worker.
 *
 * `options` is the object `sw.js` passes: `{ dev: <bool>, bypass: <rules> }`,
 * rendered from the bundle's `__DEV_ENABLED__` and `__BYPASS_RULES__`
 * placeholders. A missing or non-boolean `dev` reads as `false` — the
 * sandbox is never enabled by an unparseable value. `bypass` is the paths
 * this worker leaves to the static host (see `bypass_rules_option`).
 *
 * The flag is a *request*, and it selects the WORKSPACE half of the sandbox
 * only, and only on a build that compiled one (see [`SandboxMode`]). A build
 * with `browser-site-runtime` compiled in — a site build, or a
 * `browser-devtools` build, which implies it — always runs the sandbox's
 * RUNTIME half: the seed import, the generation ledger, journal
 * convergence, the dynamic-block rebuild. That is what makes an
 * ImpressPress folder serve the site it ships, and an EXPORTED bundle boots
 * with `{ dev: false }` precisely so it has no `/b/dev`. Where the build has
 * no workspace — a site build ([`SandboxMode::Exported`]) or no sandbox at
 * all ([`SandboxMode::Absent`]) — `{ dev: true }` is a no-op apart from the
 * single console warning below: same seeded variables, same CSP, same
 * routes as `{ dev: false }`.
 */
export function initialize(options: any): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly handle_request: (a: number) => number;
    readonly initialize: (a: number) => number;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: number) => number;
    readonly intounderlyingbytesource_start: (a: number, b: number) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly intounderlyingsink_abort: (a: number, b: number) => number;
    readonly intounderlyingsink_close: (a: number) => number;
    readonly intounderlyingsink_write: (a: number, b: number) => number;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: number) => number;
    readonly __wasm_bindgen_func_elem_30668: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_30670: (a: number, b: number, c: number, d: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
