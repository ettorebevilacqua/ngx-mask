export type StringNull = string | null | undefined;
export type ListFindFn = (str: string, index?: number, obj?: string[]) => boolean;
export type StringToBool = (str: string) => boolean;
export type FindString = (find: string) => StringToBool;
export type StringInList = (list: string[]) => (find: string) => StringNull;
export type StringInListFn = (fn: FindString) => StringInList;

export const findInList: StringInListFn = (fn: FindString) => (list: string[]) =>
  (find: string) => list.find(fn(find));
export const findStringStart: FindString = (find: string) => (str: string) =>
  str.startsWith(find);
export const findStringInListStart: StringInList = (list: string[]) =>
  (find: string) => list.find(findStringStart(find));
