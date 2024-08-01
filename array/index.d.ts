import type { Primitive } from '../types';
export declare const hasLength: (array: any[]) => boolean;
export declare const removeDuplicates: (array: Primitive[]) => Primitive[];
export declare const range: (bound: number) => number[];
export declare const replaceUsWithWhen: <T>(array: T[], replacement: any, predicate: (element: T) => boolean) => any[];
