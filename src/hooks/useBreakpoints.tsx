import useMediaQuery from './useMediaQuery';

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 */
export default function useBreakpoints() {
  const breakpoints = {
    isSm: useMediaQuery('(max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)and (max-width: 1280px)'),
    isXlg: useMediaQuery('(min-width: 1281px'),
    active: 'sm',
  };
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isXlg) breakpoints.active = 'xlg';
  return breakpoints;
}
