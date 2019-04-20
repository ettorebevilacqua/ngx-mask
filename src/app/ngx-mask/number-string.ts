import { } from './utils';
export type strPosition = (str: string) => number;

export const strNumberLastPosition: strPosition = (str: string) => {
    const reg = (/(\d+)(?!.*\d)/g); // --> /(\d+)(?!.*\d)/g; --> /.*(?:\D|^)(\d+)/g;
    return( reg.exec(str), reg.lastIndex);
}