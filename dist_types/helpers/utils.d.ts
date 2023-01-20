import type { CSSProperties } from 'vue';
import type { Layout, LayoutItem, MovingDirection, setPositionFnc } from '../types/helpers';
export declare const bottom: (layout: Layout) => number;
export declare const cloneLayout: (layout: Layout) => Layout;
export declare const cloneLayoutItem: (layoutItem: LayoutItem) => LayoutItem;
export declare const collides: (l1: LayoutItem, l2: LayoutItem) => boolean;
export declare const compact: (layout: Layout, verticalCompact: boolean) => Layout | undefined;
export declare const compactItem: (compareWith: Layout, l: LayoutItem, verticalCompact: boolean) => LayoutItem;
export declare const correctBounds: (layout: Layout, bounds: {
    cols: number;
}) => Layout;
export declare const getAllCollisions: (layout: Layout, layoutItem: LayoutItem) => LayoutItem[];
export declare const getFirstCollision: (layout: Layout, layoutItem: LayoutItem) => LayoutItem | void;
export declare const getLayoutItem: (layout: Layout, id: number) => LayoutItem;
export declare const getStatics: (layout: Layout) => LayoutItem[];
export declare const moveElement: (layout: Layout, l: LayoutItem, x: number, y: number, isUserAction: boolean, horizontalShift: boolean, preventCollision?: boolean) => Layout;
export declare const moveElementAwayFromCollision: (layout: Layout, collidesWith: LayoutItem, itemToMove: LayoutItem, isUserAction: boolean, movingDirection: MovingDirection, horizontalShift: boolean) => Layout;
export declare const setTopLeft: setPositionFnc<CSSProperties>;
export declare const setTransform: (top: number, left: number, width: number, height: number) => CSSProperties;
export declare const sortLayoutItemsByRowCol: (layout: Layout) => Layout;
export declare const stringReplacer: (string: string, value: string, replacer: string) => string;
