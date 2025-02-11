declare module 'anchor-pki/auto-cert/integrations/next' {
    interface AutoCertOptions {
        enabledEnv?: string;
        [key: string]: unknown;
    }

    export default function autoCert(options: AutoCertOptions): (config: Record<string, unknown>) => Record<string, unknown>;
}