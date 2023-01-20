import type { PropType } from 'vue';
import type { BreakpointsKeys } from './types/helpers';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    breakpointCols: {
        required: true;
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    colNum: {
        required: true;
        type: NumberConstructor;
    };
    containerWidth: {
        required: true;
        type: NumberConstructor;
    };
    h: {
        required: true;
        type: NumberConstructor;
    };
    i: {
        required: true;
        type: NumberConstructor;
    };
    isDraggable: {
        required: true;
        type: BooleanConstructor;
    };
    isResizable: {
        required: true;
        type: BooleanConstructor;
    };
    lastBreakpoint: {
        required: true;
        type: PropType<BreakpointsKeys>;
    };
    margin: {
        required: true;
        type: PropType<number[]>;
    };
    maxH: {
        default: number;
        type: NumberConstructor;
    };
    maxRows: {
        required: true;
        type: NumberConstructor;
    };
    maxW: {
        default: number;
        type: NumberConstructor;
    };
    minH: {
        default: number;
        type: NumberConstructor;
    };
    minW: {
        default: number;
        type: NumberConstructor;
    };
    rowHeight: {
        required: true;
        type: NumberConstructor;
    };
    static: {
        default: boolean;
        type: BooleanConstructor;
    };
    useCssTransforms: {
        required: true;
        type: BooleanConstructor;
    };
    w: {
        required: true;
        type: NumberConstructor;
    };
    x: {
        required: true;
        type: NumberConstructor;
    };
    y: {
        required: true;
        type: NumberConstructor;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    dragOption: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("resizeEvent" | "drag-event" | "container-resized" | "resize" | "resized" | "move" | "moved")[], "resizeEvent" | "drag-event" | "container-resized" | "resize" | "resized" | "move" | "moved", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    breakpointCols: {
        required: true;
        type: PropType<Partial<Record<BreakpointsKeys, number>>>;
    };
    colNum: {
        required: true;
        type: NumberConstructor;
    };
    containerWidth: {
        required: true;
        type: NumberConstructor;
    };
    h: {
        required: true;
        type: NumberConstructor;
    };
    i: {
        required: true;
        type: NumberConstructor;
    };
    isDraggable: {
        required: true;
        type: BooleanConstructor;
    };
    isResizable: {
        required: true;
        type: BooleanConstructor;
    };
    lastBreakpoint: {
        required: true;
        type: PropType<BreakpointsKeys>;
    };
    margin: {
        required: true;
        type: PropType<number[]>;
    };
    maxH: {
        default: number;
        type: NumberConstructor;
    };
    maxRows: {
        required: true;
        type: NumberConstructor;
    };
    maxW: {
        default: number;
        type: NumberConstructor;
    };
    minH: {
        default: number;
        type: NumberConstructor;
    };
    minW: {
        default: number;
        type: NumberConstructor;
    };
    rowHeight: {
        required: true;
        type: NumberConstructor;
    };
    static: {
        default: boolean;
        type: BooleanConstructor;
    };
    useCssTransforms: {
        required: true;
        type: BooleanConstructor;
    };
    w: {
        required: true;
        type: NumberConstructor;
    };
    x: {
        required: true;
        type: NumberConstructor;
    };
    y: {
        required: true;
        type: NumberConstructor;
    };
    dragIgnoreFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    dragAllowFrom: {
        type: StringConstructor;
        required: false;
        default: any;
    };
    dragOption: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
}>> & {
    onResizeEvent?: (...args: any[]) => any;
    "onDrag-event"?: (...args: any[]) => any;
    "onContainer-resized"?: (...args: any[]) => any;
    onResize?: (...args: any[]) => any;
    onResized?: (...args: any[]) => any;
    onMove?: (...args: any[]) => any;
    onMoved?: (...args: any[]) => any;
}, {
    static: boolean;
    maxH: number;
    maxW: number;
    minH: number;
    minW: number;
    dragIgnoreFrom: string;
    dragAllowFrom: string;
    dragOption: Record<string, any>;
}>, {
    default: (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
