import {css} from '@emotion/css';
import {isString, memoize} from 'lodash';
import {CSSProperties} from 'react';

/***********************************************************************************************************************
 * Display
 **********************************************************************************************************************/

export const cssDisplay = memoize((display: CSSProperties['display']) => css`
  display: ${display};
`);

export const cssInlineBlock = cssDisplay('inline-block');
export const cssBlock = cssDisplay('block');

/***********************************************************************************************************************
 * Flex
 **********************************************************************************************************************/

export const cssFlex = cssDisplay('flex');

export const cssFlexOrder = ((value: number) => css`
  order: ${value}
`);

export const cssFlexDirection = memoize((direction: CSSProperties['flexDirection']) => css`
  flex-direction: ${direction};
`);

export const cssFlexGrow = ((value: number) => css`
  flex-grow: ${value}
`);

export const cssFlexShrink = ((value: number) => css`
  flex-shrink: ${value};
`);

export const cssFlexWrap = memoize((wrap: CSSProperties['flexWrap']) => css`
  flex-wrap: ${wrap};
`);

export const cssFlexFlow = memoize((flow: CSSProperties['flexFlow']) => css`
  flex-flow: ${flow};
`);

export const cssFlexBasis = memoize((basis: CSSProperties['flexBasis']) => css`
  flex-basis: ${basis};
`);

export const cssJustifyContent = memoize((content: CSSProperties['justifyContent']) => css`
  justify-content: ${content};
`);

export const cssAlignSelf = memoize((align: CSSProperties['alignSelf']) => css`
  align-self: ${align};
`);

export const cssAlignItems = memoize((align: CSSProperties['alignItems']) => css`
  align-items: ${align};
`);

export const cssAlignContent = memoize((align: CSSProperties['alignContent']) => css`
  align-content: ${align};
`);

export const cssRowGap = memoize((gap: CSSProperties['rowGap']) => css`
  row-gap: ${gap};
`);

export const cssColumnGap = memoize((gap: CSSProperties['columnGap']) => css`
  column-gap: ${gap};
`);

export const cssUnderline = css`
  text-decoration: underline;
`;

/***********************************************************************************************************************
 * Color
 **********************************************************************************************************************/

export const cssColor = memoize((color: CSSProperties['color']) => css`
  color: ${color};
`);

export const cssBackgroundColor = memoize((color: CSSProperties['backgroundColor']) => css`
  background-color: ${color};
`);

/***********************************************************************************************************************
 * Misc
 **********************************************************************************************************************/

export const cssTop = ((value: number) => css`
  top: ${value};
`);

export const cssZIndex = ((value: number) => css`
  z-index: ${value};
`);

export const cssBoxShadow = memoize((shadow: CSSProperties['boxShadow']) => css`
  box-shadow: ${shadow};
`);

/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/

type Size = number | string;

function normalizeSize(size: Size, unit = 'rem'): string {
    return isString(size) ? size : size + unit;
}

function normalizeFactor(size: Size, factor: number = 0.25, unit = 'rem'): string {
    return isString(size) ? size : (size * factor) + unit;
}

/**
 *
 */

export const cssRootStyles = css`
  :root {
    --body-background: white;
    --headings: black;
    --navbar-height: 3rem;
  }

  [data-theme="dark"] {
    --body-background: #121516;
    --headings: #d7d9d9;
  }
`;