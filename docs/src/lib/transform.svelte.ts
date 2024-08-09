import { crosswind } from 'lightningcss-plugin-crosswind/dist/index';
import init, { transform } from 'lightningcss-wasm';
import wasmUrl from 'lightningcss-wasm/lightningcss_node.wasm?url';

await init(wasmUrl);

export function createTransform(fn_input: string) {
    let input = $state(fn_input);
    let error: string | undefined = $state(undefined);

    let output = $state(transform({
        filename: 'crosswind.css',
        code: new TextEncoder().encode(input),
        ...crosswind
    }));

    const code = $derived(new TextDecoder().decode(output.code))

    return {
        get input() { return input },
        set input(i) {
            input = i
            try {
                error = undefined;
                output = transform({
                    filename: 'crosswind.css',
                    code: new TextEncoder().encode(input),
                    ...crosswind
                });
            } catch (e) {
                console.log(e)
                error = JSON.stringify(e);
            }
        },

        get output() { return output },

        get code() { return code },

        get error() { return error }
    }
}

