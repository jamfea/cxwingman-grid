import type { PropType } from 'vue';
import type { BreakpointsKeys, Layout } from './types/helpers';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    autoSize: {
        default: boolean;
        type: BooleanConstructor;
    };
    breakpoints: {
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    colNum: {
        required: true;
        type: NumberConstructor;
    };
    cols: {
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    horizontalShift: {
        default: boolean;
        type: BooleanConstructor;
    };
    isDraggable: {
        default: boolean;
        type: BooleanConstructor;
    };
    isResizable: {
        default: boolean;
        type: BooleanConstructor;
    };
    layout: {
        required: true;
        type: PropType<Layout>;
    };
    margin: {
        default: () => number[];
        type: PropType<number[]>;
    };
    maxRows: {
        default: number;
        type: NumberConstructor;
    };
    preventCollision: {
        default: boolean;
        type: BooleanConstructor;
    };
    responsive: {
        default: boolean;
        type: BooleanConstructor;
    };
    responsiveLayouts: {
        default: () => {};
        type: PropType<Partial<Record<BreakpointsKeys, Layout>>>;
    };
    rowHeight: {
        default: number;
        type: NumberConstructor;
    };
    useCssTransforms: {
        default: boolean;
        type: BooleanConstructor;
    };
    useObserver: {
        default: boolean;
        type: BooleanConstructor;
    };
    verticalCompact: {
        default: boolean;
        type: BooleanConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("container-resized" | "update:layout" | "layout-ready" | "update:breakpoint" | "layout-created" | "layout-before-mount" | "layout-mounted" | "item-resize" | "item-resized" | "item-move" | "item-moved" | "intersection-observe" | "intersection-unobserve")[], "container-resized" | "update:layout" | "layout-ready" | "update:breakpoint" | "layout-created" | "layout-before-mount" | "layout-mounted" | "item-resize" | "item-resized" | "item-move" | "item-moved" | "intersection-observe" | "intersection-unobserve", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autoSize: {
        default: boolean;
        type: BooleanConstructor;
    };
    breakpoints: {
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    colNum: {
        required: true;
        type: NumberConstructor;
    };
    cols: {
        default: () => {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    horizontalShift: {
        default: boolean;
        type: BooleanConstructor;
    };
    isDraggable: {
        default: boolean;
        type: BooleanConstructor;
    };
    isResizable: {
        default: boolean;
        type: BooleanConstructor;
    };
    layout: {
        required: true;
        type: PropType<Layout>;
    };
    margin: {
        default: () => number[];
        type: PropType<number[]>;
    };
    maxRows: {
        default: number;
        type: NumberConstructor;
    };
    preventCollision: {
        default: boolean;
        type: BooleanConstructor;
    };
    responsive: {
        default: boolean;
        type: BooleanConstructor;
    };
    responsiveLayouts: {
        default: () => {};
        type: PropType<Partial<Record<BreakpointsKeys, Layout>>>;
    };
    rowHeight: {
        default: number;
        type: NumberConstructor;
    };
    useCssTransforms: {
        default: boolean;
        type: BooleanConstructor;
    };
    useObserver: {
        default: boolean;
        type: BooleanConstructor;
    };
    verticalCompact: {
        default: boolean;
        type: BooleanConstructor;
    };
}>> & {
    "onContainer-resized"?: (...args: any[]) => any;
    "onUpdate:layout"?: (...args: any[]) => any;
    "onLayout-ready"?: (...args: any[]) => any;
    "onUpdate:breakpoint"?: (...args: any[]) => any;
    "onLayout-created"?: (...args: any[]) => any;
    "onLayout-before-mount"?: (...args: any[]) => any;
    "onLayout-mounted"?: (...args: any[]) => any;
    "onItem-resize"?: (...args: any[]) => any;
    "onItem-resized"?: (...args: any[]) => any;
    "onItem-move"?: (...args: any[]) => any;
    "onItem-moved"?: (...args: any[]) => any;
    "onIntersection-observe"?: (...args: any[]) => any;
    "onIntersection-unobserve"?: (...args: any[]) => any;
}, {
    isDraggable: boolean;
    isResizable: boolean;
    margin: number[];
    maxRows: number;
    rowHeight: number;
    useCssTransforms: boolean;
    autoSize: boolean;
    breakpoints: {
        lg: number;
        md: number;
        sm: number;
        xs: number;
        xxs: number;
    };
    cols: {
        lg: number;
        md: number;
        sm: number;
        xs: number;
        xxs: number;
    };
    horizontalShift: boolean;
    preventCollision: boolean;
    responsive: boolean;
    responsiveLayouts: {};
    useObserver: boolean;
    verticalCompact: boolean;
}>, {
    default: (_: {
        gridItemProps: {
            h: number;
            i: number;
            w: number;
            x: number;
            y: number;
            breakpointCols: {
                lg: number;
                md: number;
                sm: number;
                xs: number;
                xxs: number;
            };
            colNum: number;
            containerWidth: number;
            isDraggable: boolean;
            isResizable: boolean;
            lastBreakpoint: BreakpointsKeys;
            margin: number[];
            maxRows: number;
            responsive: boolean;
            rowHeight: number;
            useCssTransforms: boolean;
            width: number;
        };
    }) => any;
    gridItemContent: (_: {
        item: import("./types/helpers").LayoutItem;
    }) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
