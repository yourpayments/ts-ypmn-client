import typescript from "rollup-plugin-typescript2";


export default {
    input: "lib/index.ts",
    output: [
        { dir: "disc/cjs", format: "cjs" },
        { dir: "disc/esm", format: "esm" },
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        })
    ],
    external: [
        "json2typescript",
        "crypto"
    ]
};