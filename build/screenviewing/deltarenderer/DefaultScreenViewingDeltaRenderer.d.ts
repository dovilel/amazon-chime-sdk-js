import { DragObserverFactory } from '../../dragobserver/DragObserver';
import JPEGDecoderController from '../../jpegdecoder/controller/JPEGDecoderController';
import Logger from '../../logger/Logger';
import PresentationPolicy from '../../presentation/policy/PresentationPolicy';
import ResizeObserverAdapterFactory from '../../resizeobserveradapter/ResizeObserverAdapterFactory';
import ScreenViewingImageDimensions from '../messagehandler/ScreenViewingImageDimensions';
import ScreenViewingDeltaRenderer from './ScreenViewingDeltaRenderer';
export default class DefaultScreenViewingDeltaRenderer implements ScreenViewingDeltaRenderer {
    private jpegDecoderController;
    private logger;
    private window;
    private dragObserverFactory;
    private static readonly SYNC_TIMEOUT_MS;
    syncBuffer: Uint8Array[][];
    jpegDataArrays: Uint8Array[][];
    hasRendered: boolean[][];
    imageDimensions: ScreenViewingImageDimensions;
    lastResizeAndSyncTime: number;
    private presentation;
    private policy;
    private viewport;
    private content;
    private resizeObserver;
    private dragObserver;
    private jpegDecoderInstance?;
    constructor(jpegDecoderController: JPEGDecoderController, logger: Logger, window: Window, resizeObserverFactory: ResizeObserverAdapterFactory, dragObserverFactory: DragObserverFactory);
    private static make2DArray;
    buildViewer(imageDimensions: ScreenViewingImageDimensions): void;
    resizeAndSync(): void;
    private renderSync;
    getImageData(jpegDataArray: Uint8Array): ImageData;
    getContext(): CanvasRenderingContext2D;
    close(): void;
    setViewport(viewport: HTMLElement): void;
    hideViewport(): void;
    revealViewport(): void;
    changePresentationPolicy(policy: PresentationPolicy): void;
    zoomRelative(relativeZoomFactor: number): void;
    zoomAbsolute(absoluteZoomFactor: number): void;
    zoomReset(): void;
    private updatePresentation;
}
