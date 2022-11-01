import Locale from "./Models/Locale";
import Day from "./Models/Day";
export declare const getYear: (dt: Date, locale: string) => string;
export declare const getMonthName: (dt: Date | [number, number, number], locale: string) => string;
export declare const nameOfWeekDays: (locale: Locale) => string[];
export declare const getWeekDay: (locale: string, date: Date) => string;
export declare function gregorianToJalali(gy: number, gm: number, gd: number): number[];
export declare function jalaliToGregorian(jy: number, jm: number, jd: number): number[];
export declare function dateComparer(dt1?: Date, dt2?: Date | [number, number, number]): boolean;
export declare const convertToLocalDate: (date: Date, locale: Locale) => [number, number, number];
export declare const getAllDays: (locale: Locale, localYear: number, localMonth: number) => (Day | null)[][];
