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
 * Text
 **********************************************************************************************************************/

export const cssColor = memoize((color: CSSProperties['color']) => css`
  color: ${color};
`);

export const cssTextAlign = memoize((align: CSSProperties['textAlign']) => css`
  text-align: ${align};
`);

export const cssTextDecoration = memoize((decoration: CSSProperties['textDecoration']) => css`
  text-decoration: ${decoration};
`);

export const cssFontWeight = memoize((fontWeight: CSSProperties['fontWeight']) => css`
  font-weight: ${fontWeight};
`);

export const cssBackgroundColor = memoize((color: CSSProperties['backgroundColor']) => css`
  background-color: ${color};
`);

export const cssBold = cssFontWeight('bold');
export const cssCenter = cssTextAlign('center');

/***********************************************************************************************************************
 * Position
 **********************************************************************************************************************/

export const cssPosition = memoize((position: CSSProperties['position']) => css`
  position: ${position};
`);

export const cssRelative = cssPosition('relative');
export const cssAbsolut = cssPosition('absolute');
export const cssSticky = cssPosition('sticky');

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
 * Margin
 **********************************************************************************************************************/

export const cssMargin = ((factor: Size) => css`
  margin: ${normalizeFactor(factor)};
`);

export const cssMarginTop = ((factor: Size) => css`
  margin-top: ${normalizeFactor(factor)};
`);

export const cssMarginRight = ((factor: Size) => css`
  margin-right: ${normalizeFactor(factor)};
`);

export const cssMarginBottom = ((factor: Size) => css`
  margin-bottom: ${normalizeFactor(factor)};
`);

export const cssMarginLeft = ((factor: Size) => css`
  margin-left: ${normalizeFactor(factor)};
`);

/***********************************************************************************************************************
 * Padding
 **********************************************************************************************************************/

export const cssPadding = ((factor: Size) => css`
  padding: ${normalizeFactor(factor)};
`);

export const cssPaddingTop = ((factor: Size) => css`
  padding-top: ${normalizeFactor(factor)}
`);

export const cssPaddingRight = ((factor: Size) => css`
  padding-right: ${normalizeFactor(factor)};
`);

export const cssPaddingBottom = ((factor: Size) => css`
  padding-bottom: ${normalizeFactor(factor)};
`);

export const cssPaddingLeft = ((factor: Size) => css`
  padding-left: ${normalizeFactor(factor)};
`);

export const cssPaddingHor = ((factor: Size) => css`
  padding-left: ${normalizeFactor(factor)};
  padding-right: ${normalizeFactor(factor)};
`);

export const cssPaddingVer = ((factor: Size) => css`
  padding-top: ${normalizeFactor(factor)};
  padding-bottom: ${normalizeFactor(factor)};
`);

/***********************************************************************************************************************
 * Translation
 **********************************************************************************************************************/

export const cssTranslateY = memoize((translate: CSSProperties['transform']) => css`
  transform: ${translate};
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

export const cssOverflow = memoize((overflow: CSSProperties['overflow']) => css`
  overflow: ${overflow};
`);

export const cssCursor = memoize((cursor: CSSProperties['cursor']) => css`
  cursor: ${cursor};
`);

export const cssContent = memoize((content: CSSProperties['content']) => css`
  content: ${content};
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

/***********************************************************************************************************************
 * Root
 **********************************************************************************************************************/

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