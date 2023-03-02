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
 * Position
 **********************************************************************************************************************/

export const cssPosition = memoize((position: CSSProperties['position']) => css`
  position: ${position};
`);

/***********************************************************************************************************************
 * Size
 **********************************************************************************************************************/

export const cssTop = ((top: Size) => css`
  top: ${normalizeSize(top)};
`);

export const cssRight = ((right: Size) => css`
  right: ${normalizeSize(right)};
`);

export const cssBottom = ((bottom: Size) => css`
  bottom: ${normalizeSize(bottom)};
`);

export const cssLeft = ((left: Size) => css`
  left: ${normalizeSize(left)};
`);

export const cssWidth = ((width: Size) => css`
  width: ${normalizeSize(width)};
`);

export const cssHeight = ((height: Size) => css`
  height: ${normalizeSize(height)};
`);

/***********************************************************************************************************************
 * Spacing
 **********************************************************************************************************************/

export const cssMarginTop = ((margin: Size) => css`
  margin-top: ${normalizeFactor(margin)};
`);

export const cssMarginRight = ((margin: Size) => css`
  margin-right: ${normalizeFactor(margin)};
`);

export const cssMarginBottom = ((margin: Size) => css`
  margin-bottom: ${normalizeFactor(margin)};
`);

export const cssMarginLeft = ((margin: Size) => css`
  margin-left: ${normalizeFactor(margin)};
`);

export const cssMargin = ((margin: Size) => css`
  margin: ${normalizeFactor(margin)};
`);

export const cssPaddingTop = ((padding: Size) => css`
  padding-top: ${normalizeFactor(padding)}
`);

export const cssPaddingRight = ((padding: Size) => css`
  padding-right: ${normalizeFactor(padding)};
`);

export const cssPaddingBottom = ((padding: Size) => css`
  padding-bottom: ${normalizeFactor(padding)};
`);

export const cssPaddingLeft = ((padding: Size) => css`
  padding-left: ${normalizeFactor(padding)};
`);

export const cssPadding = ((padding: Size) => css`
  padding: ${normalizeFactor(padding)};
`);

/***********************************************************************************************************************
 * Misc
 **********************************************************************************************************************/

export const cssZIndex = ((value: number) => css`
  z-index: ${value};
`);

export const cssBoxShadow = memoize((shadow: CSSProperties['boxShadow']) => css`
  box-shadow: ${shadow};
`);

export const cssListStyle = memoize((style: CSSProperties['listStyle']) => css`
  list-style: ${style};
`);

export const cssOverflow = ((overflow: CSSProperties['overflow']) => css`
  overflow: ${overflow};
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