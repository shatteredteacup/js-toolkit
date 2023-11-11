import { isEmptyString } from './checks';

export const capitalize = (word: string) => {
  if (!isEmptyString(word)) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  } else return word;
};

export const csvToArray = (csv: string): string[] => {
  return isEmptyString(csv) ? [] : csv.split(',');
};

export const erasable = (string: string, erasureCondition: Boolean) => {
  return erasureCondition ? '' : string;
};
