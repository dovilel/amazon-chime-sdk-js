import ActiveSpeakerPolicy from '../activespeakerpolicy/ActiveSpeakerPolicy';
import AudioMixController from '../audiomixcontroller/AudioMixController';
import AudioVideoController from '../audiovideocontroller/AudioVideoController';
import AudioVideoFacade from '../audiovideofacade/AudioVideoFacade';
import AudioVideoObserver from '../audiovideoobserver/AudioVideoObserver';
import ContentShareController from '../contentsharecontroller/ContentShareController';
import ContentShareObserver from '../contentshareobserver/ContentShareObserver';
import DataMessage from '../datamessage/DataMessage';
import DeviceChangeObserver from '../devicechangeobserver/DeviceChangeObserver';
import Device from '../devicecontroller/Device';
import DeviceController from '../devicecontroller/DeviceController';
import DevicePermission from '../devicecontroller/DevicePermission';
import VideoQualitySettings from '../devicecontroller/VideoQualitySettings';
import RealtimeController from '../realtimecontroller/RealtimeController';
import VideoSource from '../videosource/VideoSource';
import VideoTile from '../videotile/VideoTile';
import VideoTileController from '../videotilecontroller/VideoTileController';
export default class DefaultAudioVideoFacade implements AudioVideoFacade {
    private audioVideoController;
    private videoTileController;
    private realtimeController;
    private audioMixController;
    private deviceController;
    private contentShareController;
    constructor(audioVideoController: AudioVideoController, videoTileController: VideoTileController, realtimeController: RealtimeController, audioMixController: AudioMixController, deviceController: DeviceController, contentShareController: ContentShareController);
    addObserver(observer: AudioVideoObserver): void;
    removeObserver(observer: AudioVideoObserver): void;
    start(): void;
    stop(): void;
    getRTCPeerConnectionStats(selector?: MediaStreamTrack): Promise<RTCStatsReport>;
    bindAudioElement(element: HTMLAudioElement): boolean;
    unbindAudioElement(): void;
    bindVideoElement(tileId: number, videoElement: HTMLVideoElement): void;
    unbindVideoElement(tileId: number): void;
    startLocalVideoTile(): number;
    stopLocalVideoTile(): void;
    hasStartedLocalVideoTile(): boolean;
    removeLocalVideoTile(): void;
    getLocalVideoTile(): VideoTile | null;
    pauseVideoTile(tileId: number): void;
    unpauseVideoTile(tileId: number): void;
    getVideoTile(tileId: number): VideoTile | null;
    getAllRemoteVideoTiles(): VideoTile[];
    getAllVideoTiles(): VideoTile[];
    addVideoTile(): VideoTile;
    removeVideoTile(tileId: number): void;
    removeVideoTilesByAttendeeId(attendeeId: string): number[];
    removeAllVideoTiles(): void;
    captureVideoTile(tileId: number): ImageData | null;
    realtimeSubscribeToAttendeeIdPresence(callback: (attendeeId: string, present: boolean, externalUserId?: string, dropped?: boolean) => void): void;
    realtimeUnsubscribeToAttendeeIdPresence(callback: (attendeeId: string, present: boolean, externalUserId?: string, dropped?: boolean) => void): void;
    realtimeSetCanUnmuteLocalAudio(canUnmute: boolean): void;
    realtimeSubscribeToSetCanUnmuteLocalAudio(callback: (canUnmute: boolean) => void): void;
    realtimeUnsubscribeToSetCanUnmuteLocalAudio(callback: (canUnmute: boolean) => void): void;
    realtimeCanUnmuteLocalAudio(): boolean;
    realtimeMuteLocalAudio(): void;
    realtimeUnmuteLocalAudio(): boolean;
    realtimeSubscribeToMuteAndUnmuteLocalAudio(callback: (muted: boolean) => void): void;
    realtimeUnsubscribeToMuteAndUnmuteLocalAudio(callback: (muted: boolean) => void): void;
    realtimeIsLocalAudioMuted(): boolean;
    realtimeSubscribeToVolumeIndicator(attendeeId: string, callback: (attendeeId: string, volume: number | null, muted: boolean | null, signalStrength: number | null, externalUserId?: string) => void): void;
    realtimeUnsubscribeFromVolumeIndicator(attendeeId: string, callback: (attendeeId: string, volume: number | null, muted: boolean | null, signalStrength: number | null, externalUserId?: string) => void): void;
    realtimeSubscribeToLocalSignalStrengthChange(callback: (signalStrength: number) => void): void;
    realtimeUnsubscribeToLocalSignalStrengthChange(callback: (signalStrength: number) => void): void;
    realtimeSendDataMessage(topic: string, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Uint8Array | string | any, lifetimeMs?: number): void;
    realtimeSubscribeToReceiveDataMessage(topic: string, callback: (dataMessage: DataMessage) => void): void;
    realtimeUnsubscribeFromReceiveDataMessage(topic: string): void;
    realtimeSubscribeToFatalError(callback: (error: Error) => void): void;
    realtimeUnsubscribeToFatalError(callback: (error: Error) => void): void;
    subscribeToActiveSpeakerDetector(policy: ActiveSpeakerPolicy, callback: (activeSpeakers: string[]) => void, scoresCallback?: (scores: {
        [attendeeId: string]: number;
    }) => void, scoresCallbackIntervalMs?: number): void;
    unsubscribeFromActiveSpeakerDetector(callback: (activeSpeakers: string[]) => void): void;
    listAudioInputDevices(): Promise<MediaDeviceInfo[]>;
    listVideoInputDevices(): Promise<MediaDeviceInfo[]>;
    listAudioOutputDevices(): Promise<MediaDeviceInfo[]>;
    chooseAudioInputDevice(device: Device): Promise<DevicePermission>;
    chooseVideoInputDevice(device: Device): Promise<DevicePermission>;
    chooseAudioOutputDevice(deviceId: string | null): Promise<void>;
    addDeviceChangeObserver(observer: DeviceChangeObserver): void;
    removeDeviceChangeObserver(observer: DeviceChangeObserver): void;
    createAnalyserNodeForAudioInput(): AnalyserNode | null;
    startVideoPreviewForVideoInput(element: HTMLVideoElement): void;
    stopVideoPreviewForVideoInput(element: HTMLVideoElement): void;
    setDeviceLabelTrigger(trigger: () => Promise<MediaStream>): void;
    mixIntoAudioInput(stream: MediaStream): MediaStreamAudioSourceNode;
    chooseVideoInputQuality(width: number, height: number, frameRate: number, maxBandwidthKbps: number): void;
    getVideoInputQualitySettings(): VideoQualitySettings | null;
    enableWebAudio(flag: boolean): void;
    startContentShare(stream: MediaStream): Promise<void>;
    startContentShareFromScreenCapture(sourceId?: string, frameRate?: number): Promise<MediaStream>;
    pauseContentShare(): void;
    unpauseContentShare(): void;
    stopContentShare(): void;
    addContentShareObserver(observer: ContentShareObserver): void;
    removeContentShareObserver(observer: ContentShareObserver): void;
    private trace;
    getRemoteVideoSources(): VideoSource[];
}
