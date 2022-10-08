import { MotionValue, useTransform } from 'framer-motion';

export const maybe = <T>(exp: () => T, d?: T) => {
  try {
    const result = exp();
    return result === undefined ? d : result;
  } catch {
    return d;
  }
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const hasMotionValue = (init: number[], end: number[], value?: MotionValue<number>) =>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  value ? useTransform(value, init, end) : end[end.length - 1];

export const mlist = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fullMlist = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const parseDate = (date: string, fullMonthName?: boolean) => {
  const month_name = function (dt: Date) {
    return fullMonthName ? fullMlist[dt.getMonth()] : mlist[dt.getMonth()];
  };
  const parsedDate = new Date(Date.parse(date));
  const day = parsedDate.getDate();
  const month = month_name(parsedDate);
  const year = parsedDate.getFullYear();
  return `${day} ${month} ${year}`;
};

export const parseString = (string: string) => {
  const title = string.replace(/[^a-zA-Z ]/g, '');
  return title.replace(/\s+/g, '-').toLowerCase();
};

// Temp fix. This should be replaced with Strapi's slug/URL in the future.
export const parseBlogPostURL = (title: string, id: string, isEvent?: boolean) => {
  const preTitle = isEvent ? 'events' : 'blog';
  return `/${preTitle}/${parseString(title)}-${id}/`;
};

export async function supportsWebp(signal?: AbortSignal) {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData, { signal }).then((r) => r.blob());
  return createImageBitmap(blob).then(
    () => true,
    () => false
  );
}

(async (signal) => {
  try {
    if (await supportsWebp(signal)) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
})();

export const createThresholdArray = (begin: number, end: number, step = 0.01) => {
  const arrayLength = Math.round((end - begin) / step) + 1;

  return new Array(arrayLength).fill(begin * 100).map((v, i) => (v + i) * step);
};

export const formatNumber = (num?: number) => num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
