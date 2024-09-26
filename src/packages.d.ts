declare module '*.less' {
    const map: Record<string, string>;

    export = map;
}

declare module 'browser-unhandled-rejection' {
    export const auto: () => void;
}

declare module '@editorjs/*' {
    const Plugin: import('react').ComponentClass;

    export default Plugin;
}
