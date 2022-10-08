export interface IconDefinition {
  d: string;
  d2?: string;
  fill: boolean;
  strokeWidth: number;
  viewBox: string;
  width: number;
  height: number;
}

export const icons: Record<string, IconDefinition> = {
  arrow_right: {
    d: 'M7.896 1l5.377 5.378-5.377 5.377M12.772 6.456H0',
    fill: false,
    strokeWidth: 1.5,
    viewBox: '0 0 15 13',
    width: 15,
    height: 13,
  },
  arrow_left: {
    d: 'M8.43 1.614l-6 6 6 6M2.43 7.614h12',
    fill: false,
    strokeWidth: 1.5,
    viewBox: '0 0 15 15',
    width: 15,
    height: 15,
  },
  arrow_right_bold: {
    d: 'M7.896 1l5.377 5.378-5.377 5.377M12.772 6.456H0',
    fill: false,
    strokeWidth: 3,
    viewBox: '0 0 15 13',
    width: 15,
    height: 13,
  },
  arrow_left_bold: {
    d: 'M8.43 1.614l-6 6 6 6M2.43 7.614h12',
    fill: false,
    strokeWidth: 3,
    viewBox: '0 0 15 15',
    width: 15,
    height: 15,
  },
  arrow_up: {
    d: 'M.947 6.347l5.502-4.39 5.502 4.39M6.462 1.61v12.452',
    fill: false,
    strokeWidth: 1.5,
    viewBox: '0 0 15 15',
    width: 15,
    height: 15,
  },
  arrow_down: {
    d: 'M11.968 8.281l-5.502 4.502L.964 8.282M6.453 13.14V.368',
    fill: false,
    strokeWidth: 1.5,
    viewBox: '0 0 15 15',
    width: 15,
    height: 15,
  },
  check: {
    d: 'M13.449 1.44064C13.8321 1.83847 13.8202 2.47152 13.4223 2.85461L4.73139 11.2236L0.678276 6.8327C0.303674 6.42688 0.328985 5.79422 0.734807 5.41962L1.46961 4.74134C1.87544 4.36674 2.5081 4.39205 2.8827 4.79788L4.85756 6.93733L11.3414 0.69364C11.7393 0.310553 12.3723 0.322499 12.7554 0.720322L13.449 1.44064Z',
    fill: true,
    strokeWidth: 0,
    viewBox: '0 0 14 12',
    width: 14,
    height: 12,
  },
  github: {
    d: 'M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zm293.9-50.5c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z',
    fill: true,
    strokeWidth: 1,
    viewBox: '0 0 480 480',
    width: 480,
    height: 480,
  },
  minus: {
    d: 'M9.0682 1.31445H0.529297V0.314453H9.0682V1.31445Z',
    fill: true,
    strokeWidth: 0,
    viewBox: '0 0 10 2',
    width: 10,
    height: 2,
  },
  plus: {
    d: 'M9.4432 5.31445H0.904297V4.31445H9.4432V5.31445Z',
    d2: 'M4.67383 9.08383L4.67383 0.544922L5.67383 0.544922L5.67383 9.08383L4.67383 9.08383Z',
    fill: true,
    strokeWidth: 0,
    viewBox: '0 0 10 10',
    width: 10,
    height: 10,
  },
  small_arrow_down: {
    d: 'M1 1L5 5L9 1',
    fill: false,
    strokeWidth: 2,
    viewBox: '0 0 10 7',
    width: 10,
    height: 7,
  },
  star: {
    d: 'M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z',
    fill: true,
    strokeWidth: 1,
    viewBox: '0 0 20 20',
    width: 20,
    height: 20,
  },
  x: {
    d: 'M9.78647 10.5644L0.87607 1.65396L2.29028 0.239746L11.2007 9.15014L9.78647 10.5644Z',
    d2: 'M2.29019 10.5644L11.2006 1.65396L9.78638 0.239746L0.87598 9.15014L2.29019 10.5644Z',
    fill: false,
    strokeWidth: 0,
    viewBox: '0 0 12 11',
    width: 12,
    height: 11,
  },
};

export type IconName = keyof typeof icons;
