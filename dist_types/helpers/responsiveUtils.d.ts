import type { Breakpoints, BreakpointsKeys, findOrGenerateResponsiveLayoutFnc } from '../types/helpers';
export declare const findOrGenerateResponsiveLayout: findOrGenerateResponsiveLayoutFnc;
export declare const getBreakpointFromWidth: (breakpoints: Breakpoints, width: number) => BreakpointsKeys;
export declare const getColsFromBreakpoint: (breakpoint: keyof Breakpoints, cols: Breakpoints) => number | undefined;
export declare const sortBreakpoints: (breakpoints: Breakpoints) => BreakpointsKeys[];
