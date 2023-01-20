export type Breakpoints = RecordBreakpoint<number>;
export type BreakpointsKeys = 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | '';
export type LayoutItem = LayoutItemRequired & LayoutItemOptional;
export type Layout = LayoutItem[];
export interface LayoutItemOptional {
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
    moved?: boolean;
    static?: boolean;
    isDraggable?: boolean;
    isResizable?: boolean;
}
interface LayoutItemRequired {
    w: number;
    h: number;
    x: number;
    y: number;
    i: number;
}
export type LayoutItemsByYAxis = {
    [K in string]: LayoutItem[];
};
export type MovingDirection = keyof typeof MovingDirections;
export declare enum MovingDirections {
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    UP = "UP"
}
export type RecordBreakpoint<Type> = Partial<Record<BreakpointsKeys, Type>>;
export type ResponsiveLayout = RecordBreakpoint<Layout>;
export type findOrGenerateResponsiveLayoutFnc = (orgLayout: Layout | undefined, layouts: ResponsiveLayout, breakpoints: Breakpoints, breakpoint: BreakpointsKeys, cols: number, verticalCompact: boolean) => Layout | undefined;
export type setPositionFnc<Position> = (top: number, left: number, width: number, height: number) => Position;
export {};
