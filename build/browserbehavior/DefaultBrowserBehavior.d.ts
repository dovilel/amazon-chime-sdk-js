import BrowserBehavior from './BrowserBehavior';
export default class DefaultBrowserBehavior implements BrowserBehavior {
    private readonly browser;
    private browserSupport;
    private browserName;
    private chromeLike;
    private enableUnifiedPlanForChromiumBasedBrowsers;
    constructor({ enableUnifiedPlanForChromiumBasedBrowsers, }?: {
        enableUnifiedPlanForChromiumBasedBrowsers?: boolean;
    });
    version(): string;
    majorVersion(): number;
    name(): string;
    hasChromiumWebRTC(): boolean;
    hasFirefoxWebRTC(): boolean;
    screenShareSendsOnlyKeyframes(): boolean;
    requiresUnifiedPlan(): boolean;
    requiresResolutionAlignment(width: number, height: number): [number, number];
    requiresCheckForSdpConnectionAttributes(): boolean;
    requiresIceCandidateGatheringTimeoutWorkaround(): boolean;
    requiresUnifiedPlanMunging(): boolean;
    requiresSortCodecPreferencesForSdpAnswer(): boolean;
    requiresSimulcastMunging(): boolean;
    requiresBundlePolicy(): RTCBundlePolicy;
    requiresPromiseBasedWebRTCGetStats(): boolean;
    requiresVideoElementWorkaround(): boolean;
    requiresNoExactMediaStreamConstraints(): boolean;
    getDisplayMediaAudioCaptureSupport(): boolean;
    screenShareUnsupported(): boolean;
    isSupported(): boolean;
    supportString(): string;
    supportedVideoCodecs(): Promise<string[]>;
    private isIOSSafari;
    private isSafari;
    private isFirefox;
    private isChrome;
    private isEdge;
    private isAndroid;
    private isPixel3;
    private isUnifiedPlanSupported;
}
