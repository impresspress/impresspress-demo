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
 * Which sandbox this runtime was compiled with — `'none'`, `'site'` or
 * `'workspace'` (`SandboxMode::COMPILED`, spelled by `SandboxMode::as_str`).
 *
 * `sw.js` imports this and calls it after `init()` and before
 * `initialize()`, and compares it with the mode the bundle was built for
 * (`const SANDBOX`, rendered from `[sandbox] mode`). A mismatch is a bundle
 * assembled from the wrong runtime. `impresspress build` refuses to
 * assemble one — it reads the same mode from [`SANDBOX_MODE_SECTION`] — so
 * this catches one put together some other way (files copied between
 * deployments, a runtime swapped on the host): the worker stops there with
 * stage `build` — before anything has opened the database, so no recovery
 * erases data for it — rather than boot a workspace's `sw.js` over a site
 * build, or a site's over the workspace.
 *
 * The import is static, so a runtime without this export would fail to link
 * the worker module before any of `sw.js` ran. That is why it lives in this
 * crate and not in any one runtime: every browser cdylib links this crate,
 * and so every one exports it.
 *
 * It answers with [`SANDBOX_MODE_SECTION`]'s bytes rather than with
 * [`SPELLING`] directly. That read is what ties the custom section to the
 * export in every build: the object file that holds the section is the one
 * that defines the static, and the export refers to the static, so wasm-ld
 * links that object whenever it links the export. Without the reference, a
 * build without LTO (a `--dev` build) keeps the section only if some other
 * symbol of the same codegen unit happens to be needed.
 */
export function compiled_sandbox_mode(): string;

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
 * `options` is the object `sw.js` passes:
 * `{ exportShell: <root> | null, bypass: <rules>, pageEngines: <paths> }`,
 * rendered from the bundle's `__EXPORT_SHELL__`, `__BYPASS_RULES__` and
 * `__PAGE_ENGINES__` placeholders. `exportShell` roots the export shell a
 * workspace's export reads (see `export_shell_option`). `bypass` is the
 * paths this worker leaves to the static host (see `bypass_rules_option`).
 * `pageEngines` is the model engines the runtime's pages load (see
 * [`page_engines_option`]).
 *
 * The boot itself is `impresspress-browser`'s funnel
 * ([`impresspress_browser::boot`]); this crate adds its own blocks, routes,
 * headers and seeds at the seams it leaves ([`RuntimeFactory::build`]).
 *
 * There is no mode option: what the sandbox contributes is
 * [`SandboxMode::COMPILED`], decided by the cargo features (this crate's
 * forward to `impresspress-core`'s, which the constant reads), and `sw.js`
 * has already checked that it is the mode the bundle was built for
 * ([`compiled_sandbox_mode`], which this cdylib exports by linking
 * `impresspress-browser`). A build with `browser-site-runtime` compiled
 * in — a site build, or a `browser-devtools` build, which implies it —
 * always runs the sandbox's RUNTIME half: the seed import, the generation
 * ledger, journal convergence, the dynamic-block rebuild. That is what makes
 * an ImpressPress folder serve the site it ships. An EXPORTED bundle is the
 * deployment's export shell: a site build, with no `/b/dev` compiled in at
 * all. A `browser-devtools` build is always the workspace.
 *
 * [`SandboxMode::COMPILED`]: impresspress_core::sandbox_mode::SandboxMode::COMPILED
 * [`compiled_sandbox_mode`]: impresspress_browser::sandbox_mode::compiled_sandbox_mode
 * [`page_engines_option`]: impresspress_browser::boot::page_engines_option
 */
export function initialize(options: any): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly compiled_sandbox_mode: (a: number) => void;
    readonly handle_request: (a: number) => number;
    readonly initialize: (a: number) => number;
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
    readonly __wasm_bindgen_func_elem_31268: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_31270: (a: number, b: number, c: number, d: number) => void;
    readonly __wasm_bindgen_func_elem_31272: (a: number, b: number, c: number, d: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export3: (a: number) => void;
    readonly __wbindgen_export4: (a: number, b: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export5: (a: number, b: number, c: number) => void;
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
