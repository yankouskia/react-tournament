import { theme } from '../theme';

export const mergeTheme = custom => custom ? Object.keys(theme).reduce((acc, value) => {
  if (!custom[value] || typeof custom[value] !== 'object') return {
    ...acc,
    [value]: custom[value] || theme[value],
  };

  return {
    ...acc,
    [value]: Object.keys(theme[value]).reduce((valueAcc, valueKey) => ({
      ...valueAcc,
      [valueKey]: custom[value][valueKey] || theme[value][valueKey],
    }), {}),
  }
}, {}) : theme;
