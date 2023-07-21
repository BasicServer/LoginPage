var APP = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/material-icons/iconfont/round.css
  var require_round = __commonJS({
    "node_modules/material-icons/iconfont/round.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/css-property-names/index.js
  var require_css_property_names = __commonJS({
    "node_modules/css-property-names/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PrefixedCSSPropertyNames = exports.CSSPropertyNames = void 0;
      exports.CSSPropertyNames = [
        "accentColor",
        "additiveSymbols",
        "alignContent",
        "alignItems",
        "alignSelf",
        "alignmentBaseline",
        "all",
        "animation",
        "animationComposition",
        "animationDelay",
        "animationDirection",
        "animationDuration",
        "animationFillMode",
        "animationIterationCount",
        "animationName",
        "animationPlayState",
        "animationTimingFunction",
        "appRegion",
        "appearance",
        "ascentOverride",
        "aspectRatio",
        "backdropFilter",
        "backfaceVisibility",
        "background",
        "backgroundAttachment",
        "backgroundBlendMode",
        "backgroundClip",
        "backgroundColor",
        "backgroundImage",
        "backgroundOrigin",
        "backgroundPosition",
        "backgroundPositionX",
        "backgroundPositionY",
        "backgroundRepeat",
        "backgroundRepeatX",
        "backgroundRepeatY",
        "backgroundSize",
        "basePalette",
        "baselineShift",
        "baselineSource",
        "blockSize",
        "border",
        "borderBlock",
        "borderBlockColor",
        "borderBlockEnd",
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth",
        "borderBlockStart",
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth",
        "borderBlockStyle",
        "borderBlockWidth",
        "borderBottom",
        "borderBottomColor",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderBottomStyle",
        "borderBottomWidth",
        "borderCollapse",
        "borderColor",
        "borderEndEndRadius",
        "borderEndStartRadius",
        "borderImage",
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth",
        "borderInline",
        "borderInlineColor",
        "borderInlineEnd",
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth",
        "borderInlineStart",
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth",
        "borderInlineStyle",
        "borderInlineWidth",
        "borderLeft",
        "borderLeftColor",
        "borderLeftStyle",
        "borderLeftWidth",
        "borderRadius",
        "borderRight",
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth",
        "borderSpacing",
        "borderStartEndRadius",
        "borderStartStartRadius",
        "borderStyle",
        "borderTop",
        "borderTopColor",
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderTopStyle",
        "borderTopWidth",
        "borderWidth",
        "bottom",
        "boxShadow",
        "boxSizing",
        "breakAfter",
        "breakBefore",
        "breakInside",
        "bufferedRendering",
        "captionSide",
        "caretColor",
        "clear",
        "clip",
        "clipPath",
        "clipRule",
        "color",
        "colorInterpolation",
        "colorInterpolationFilters",
        "colorRendering",
        "colorScheme",
        "columnCount",
        "columnFill",
        "columnGap",
        "columnRule",
        "columnRuleColor",
        "columnRuleStyle",
        "columnRuleWidth",
        "columnSpan",
        "columnWidth",
        "columns",
        "contain",
        "containIntrinsicBlockSize",
        "containIntrinsicHeight",
        "containIntrinsicInlineSize",
        "containIntrinsicSize",
        "containIntrinsicWidth",
        "container",
        "containerName",
        "containerType",
        "content",
        "contentVisibility",
        "counterIncrement",
        "counterReset",
        "counterSet",
        "cursor",
        "cx",
        "cy",
        "d",
        "descentOverride",
        "direction",
        "display",
        "dominantBaseline",
        "emptyCells",
        "fallback",
        "fill",
        "fillOpacity",
        "fillRule",
        "filter",
        "flex",
        "flexBasis",
        "flexDirection",
        "flexFlow",
        "flexGrow",
        "flexShrink",
        "flexWrap",
        "float",
        "floodColor",
        "floodOpacity",
        "font",
        "fontDisplay",
        "fontFamily",
        "fontFeatureSettings",
        "fontKerning",
        "fontOpticalSizing",
        "fontPalette",
        "fontSize",
        "fontStretch",
        "fontStyle",
        "fontSynthesis",
        "fontSynthesisSmallCaps",
        "fontSynthesisStyle",
        "fontSynthesisWeight",
        "fontVariant",
        "fontVariantAlternates",
        "fontVariantCaps",
        "fontVariantEastAsian",
        "fontVariantLigatures",
        "fontVariantNumeric",
        "fontVariationSettings",
        "fontWeight",
        "forcedColorAdjust",
        "gap",
        "grid",
        "gridArea",
        "gridAutoColumns",
        "gridAutoFlow",
        "gridAutoRows",
        "gridColumn",
        "gridColumnEnd",
        "gridColumnGap",
        "gridColumnStart",
        "gridGap",
        "gridRow",
        "gridRowEnd",
        "gridRowGap",
        "gridRowStart",
        "gridTemplate",
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows",
        "height",
        "hyphenateCharacter",
        "hyphenateLimitChars",
        "hyphens",
        "imageOrientation",
        "imageRendering",
        "inherits",
        "initialLetter",
        "initialValue",
        "inlineSize",
        "inset",
        "insetBlock",
        "insetBlockEnd",
        "insetBlockStart",
        "insetInline",
        "insetInlineEnd",
        "insetInlineStart",
        "isolation",
        "justifyContent",
        "justifyItems",
        "justifySelf",
        "left",
        "letterSpacing",
        "lightingColor",
        "lineBreak",
        "lineGapOverride",
        "lineHeight",
        "listStyle",
        "listStyleImage",
        "listStylePosition",
        "listStyleType",
        "margin",
        "marginBlock",
        "marginBlockEnd",
        "marginBlockStart",
        "marginBottom",
        "marginInline",
        "marginInlineEnd",
        "marginInlineStart",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marker",
        "markerEnd",
        "markerMid",
        "markerStart",
        "mask",
        "maskType",
        "mathDepth",
        "mathShift",
        "mathStyle",
        "maxBlockSize",
        "maxHeight",
        "maxInlineSize",
        "maxWidth",
        "minBlockSize",
        "minHeight",
        "minInlineSize",
        "minWidth",
        "mixBlendMode",
        "negative",
        "objectFit",
        "objectPosition",
        "objectViewBox",
        "offset",
        "offsetDistance",
        "offsetPath",
        "offsetRotate",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outlineColor",
        "outlineOffset",
        "outlineStyle",
        "outlineWidth",
        "overflow",
        "overflowAnchor",
        "overflowClipMargin",
        "overflowWrap",
        "overflowX",
        "overflowY",
        "overrideColors",
        "overscrollBehavior",
        "overscrollBehaviorBlock",
        "overscrollBehaviorInline",
        "overscrollBehaviorX",
        "overscrollBehaviorY",
        "pad",
        "padding",
        "paddingBlock",
        "paddingBlockEnd",
        "paddingBlockStart",
        "paddingBottom",
        "paddingInline",
        "paddingInlineEnd",
        "paddingInlineStart",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "page",
        "pageBreakAfter",
        "pageBreakBefore",
        "pageBreakInside",
        "pageOrientation",
        "paintOrder",
        "perspective",
        "perspectiveOrigin",
        "placeContent",
        "placeItems",
        "placeSelf",
        "pointerEvents",
        "position",
        "prefix",
        "quotes",
        "r",
        "range",
        "resize",
        "right",
        "rotate",
        "rowGap",
        "rubyPosition",
        "rx",
        "ry",
        "scale",
        "scrollBehavior",
        "scrollMargin",
        "scrollMarginBlock",
        "scrollMarginBlockEnd",
        "scrollMarginBlockStart",
        "scrollMarginBottom",
        "scrollMarginInline",
        "scrollMarginInlineEnd",
        "scrollMarginInlineStart",
        "scrollMarginLeft",
        "scrollMarginRight",
        "scrollMarginTop",
        "scrollPadding",
        "scrollPaddingBlock",
        "scrollPaddingBlockEnd",
        "scrollPaddingBlockStart",
        "scrollPaddingBottom",
        "scrollPaddingInline",
        "scrollPaddingInlineEnd",
        "scrollPaddingInlineStart",
        "scrollPaddingLeft",
        "scrollPaddingRight",
        "scrollPaddingTop",
        "scrollSnapAlign",
        "scrollSnapStop",
        "scrollSnapType",
        "scrollbarGutter",
        "shapeImageThreshold",
        "shapeMargin",
        "shapeOutside",
        "shapeRendering",
        "size",
        "sizeAdjust",
        "speak",
        "speakAs",
        "src",
        "stopColor",
        "stopOpacity",
        "stroke",
        "strokeDasharray",
        "strokeDashoffset",
        "strokeLinecap",
        "strokeLinejoin",
        "strokeMiterlimit",
        "strokeOpacity",
        "strokeWidth",
        "suffix",
        "symbols",
        "syntax",
        "system",
        "tabSize",
        "tableLayout",
        "textAlign",
        "textAlignLast",
        "textAnchor",
        "textCombineUpright",
        "textDecoration",
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationSkipInk",
        "textDecorationStyle",
        "textDecorationThickness",
        "textEmphasis",
        "textEmphasisColor",
        "textEmphasisPosition",
        "textEmphasisStyle",
        "textIndent",
        "textOrientation",
        "textOverflow",
        "textRendering",
        "textShadow",
        "textSizeAdjust",
        "textTransform",
        "textUnderlineOffset",
        "textUnderlinePosition",
        "top",
        "touchAction",
        "transform",
        "transformBox",
        "transformOrigin",
        "transformStyle",
        "transition",
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction",
        "translate",
        "unicodeBidi",
        "unicodeRange",
        "userSelect",
        "vectorEffect",
        "verticalAlign",
        "viewTransitionName",
        "visibility",
        "webkitAlignContent",
        "webkitAlignItems",
        "webkitAlignSelf",
        "webkitAnimation",
        "webkitAnimationDelay",
        "webkitAnimationDirection",
        "webkitAnimationDuration",
        "webkitAnimationFillMode",
        "webkitAnimationIterationCount",
        "webkitAnimationName",
        "webkitAnimationPlayState",
        "webkitAnimationTimingFunction",
        "webkitAppRegion",
        "webkitAppearance",
        "webkitBackfaceVisibility",
        "webkitBackgroundClip",
        "webkitBackgroundOrigin",
        "webkitBackgroundSize",
        "webkitBorderAfter",
        "webkitBorderAfterColor",
        "webkitBorderAfterStyle",
        "webkitBorderAfterWidth",
        "webkitBorderBefore",
        "webkitBorderBeforeColor",
        "webkitBorderBeforeStyle",
        "webkitBorderBeforeWidth",
        "webkitBorderBottomLeftRadius",
        "webkitBorderBottomRightRadius",
        "webkitBorderEnd",
        "webkitBorderEndColor",
        "webkitBorderEndStyle",
        "webkitBorderEndWidth",
        "webkitBorderHorizontalSpacing",
        "webkitBorderImage",
        "webkitBorderRadius",
        "webkitBorderStart",
        "webkitBorderStartColor",
        "webkitBorderStartStyle",
        "webkitBorderStartWidth",
        "webkitBorderTopLeftRadius",
        "webkitBorderTopRightRadius",
        "webkitBorderVerticalSpacing",
        "webkitBoxAlign",
        "webkitBoxDecorationBreak",
        "webkitBoxDirection",
        "webkitBoxFlex",
        "webkitBoxOrdinalGroup",
        "webkitBoxOrient",
        "webkitBoxPack",
        "webkitBoxReflect",
        "webkitBoxShadow",
        "webkitBoxSizing",
        "webkitClipPath",
        "webkitColumnBreakAfter",
        "webkitColumnBreakBefore",
        "webkitColumnBreakInside",
        "webkitColumnCount",
        "webkitColumnGap",
        "webkitColumnRule",
        "webkitColumnRuleColor",
        "webkitColumnRuleStyle",
        "webkitColumnRuleWidth",
        "webkitColumnSpan",
        "webkitColumnWidth",
        "webkitColumns",
        "webkitFilter",
        "webkitFlex",
        "webkitFlexBasis",
        "webkitFlexDirection",
        "webkitFlexFlow",
        "webkitFlexGrow",
        "webkitFlexShrink",
        "webkitFlexWrap",
        "webkitFontFeatureSettings",
        "webkitFontSmoothing",
        "webkitHighlight",
        "webkitHyphenateCharacter",
        "webkitJustifyContent",
        "webkitLineBreak",
        "webkitLineClamp",
        "webkitLocale",
        "webkitLogicalHeight",
        "webkitLogicalWidth",
        "webkitMarginAfter",
        "webkitMarginBefore",
        "webkitMarginEnd",
        "webkitMarginStart",
        "webkitMask",
        "webkitMaskBoxImage",
        "webkitMaskBoxImageOutset",
        "webkitMaskBoxImageRepeat",
        "webkitMaskBoxImageSlice",
        "webkitMaskBoxImageSource",
        "webkitMaskBoxImageWidth",
        "webkitMaskClip",
        "webkitMaskComposite",
        "webkitMaskImage",
        "webkitMaskOrigin",
        "webkitMaskPosition",
        "webkitMaskPositionX",
        "webkitMaskPositionY",
        "webkitMaskRepeat",
        "webkitMaskRepeatX",
        "webkitMaskRepeatY",
        "webkitMaskSize",
        "webkitMaxLogicalHeight",
        "webkitMaxLogicalWidth",
        "webkitMinLogicalHeight",
        "webkitMinLogicalWidth",
        "webkitOpacity",
        "webkitOrder",
        "webkitPaddingAfter",
        "webkitPaddingBefore",
        "webkitPaddingEnd",
        "webkitPaddingStart",
        "webkitPerspective",
        "webkitPerspectiveOrigin",
        "webkitPerspectiveOriginX",
        "webkitPerspectiveOriginY",
        "webkitPrintColorAdjust",
        "webkitRtlOrdering",
        "webkitRubyPosition",
        "webkitShapeImageThreshold",
        "webkitShapeMargin",
        "webkitShapeOutside",
        "webkitTapHighlightColor",
        "webkitTextCombine",
        "webkitTextDecorationsInEffect",
        "webkitTextEmphasis",
        "webkitTextEmphasisColor",
        "webkitTextEmphasisPosition",
        "webkitTextEmphasisStyle",
        "webkitTextFillColor",
        "webkitTextOrientation",
        "webkitTextSecurity",
        "webkitTextSizeAdjust",
        "webkitTextStroke",
        "webkitTextStrokeColor",
        "webkitTextStrokeWidth",
        "webkitTransform",
        "webkitTransformOrigin",
        "webkitTransformOriginX",
        "webkitTransformOriginY",
        "webkitTransformOriginZ",
        "webkitTransformStyle",
        "webkitTransition",
        "webkitTransitionDelay",
        "webkitTransitionDuration",
        "webkitTransitionProperty",
        "webkitTransitionTimingFunction",
        "webkitUserDrag",
        "webkitUserModify",
        "webkitUserSelect",
        "webkitWritingMode",
        "whiteSpace",
        "widows",
        "width",
        "willChange",
        "wordBreak",
        "wordSpacing",
        "wordWrap",
        "writingMode",
        "x",
        "y",
        "zIndex",
        "zoom"
      ];
      exports.PrefixedCSSPropertyNames = {
        cssAccentColor: "accentColor",
        cssAdditiveSymbols: "additiveSymbols",
        cssAlignContent: "alignContent",
        cssAlignItems: "alignItems",
        cssAlignSelf: "alignSelf",
        cssAlignmentBaseline: "alignmentBaseline",
        cssAll: "all",
        cssAnimation: "animation",
        cssAnimationComposition: "animationComposition",
        cssAnimationDelay: "animationDelay",
        cssAnimationDirection: "animationDirection",
        cssAnimationDuration: "animationDuration",
        cssAnimationFillMode: "animationFillMode",
        cssAnimationIterationCount: "animationIterationCount",
        cssAnimationName: "animationName",
        cssAnimationPlayState: "animationPlayState",
        cssAnimationTimingFunction: "animationTimingFunction",
        cssAppRegion: "appRegion",
        cssAppearance: "appearance",
        cssAscentOverride: "ascentOverride",
        cssAspectRatio: "aspectRatio",
        cssBackdropFilter: "backdropFilter",
        cssBackfaceVisibility: "backfaceVisibility",
        cssBackground: "background",
        cssBackgroundAttachment: "backgroundAttachment",
        cssBackgroundBlendMode: "backgroundBlendMode",
        cssBackgroundClip: "backgroundClip",
        cssBackgroundColor: "backgroundColor",
        cssBackgroundImage: "backgroundImage",
        cssBackgroundOrigin: "backgroundOrigin",
        cssBackgroundPosition: "backgroundPosition",
        cssBackgroundPositionX: "backgroundPositionX",
        cssBackgroundPositionY: "backgroundPositionY",
        cssBackgroundRepeat: "backgroundRepeat",
        cssBackgroundRepeatX: "backgroundRepeatX",
        cssBackgroundRepeatY: "backgroundRepeatY",
        cssBackgroundSize: "backgroundSize",
        cssBasePalette: "basePalette",
        cssBaselineShift: "baselineShift",
        cssBaselineSource: "baselineSource",
        cssBlockSize: "blockSize",
        cssBorder: "border",
        cssBorderBlock: "borderBlock",
        cssBorderBlockColor: "borderBlockColor",
        cssBorderBlockEnd: "borderBlockEnd",
        cssBorderBlockEndColor: "borderBlockEndColor",
        cssBorderBlockEndStyle: "borderBlockEndStyle",
        cssBorderBlockEndWidth: "borderBlockEndWidth",
        cssBorderBlockStart: "borderBlockStart",
        cssBorderBlockStartColor: "borderBlockStartColor",
        cssBorderBlockStartStyle: "borderBlockStartStyle",
        cssBorderBlockStartWidth: "borderBlockStartWidth",
        cssBorderBlockStyle: "borderBlockStyle",
        cssBorderBlockWidth: "borderBlockWidth",
        cssBorderBottom: "borderBottom",
        cssBorderBottomColor: "borderBottomColor",
        cssBorderBottomLeftRadius: "borderBottomLeftRadius",
        cssBorderBottomRightRadius: "borderBottomRightRadius",
        cssBorderBottomStyle: "borderBottomStyle",
        cssBorderBottomWidth: "borderBottomWidth",
        cssBorderCollapse: "borderCollapse",
        cssBorderColor: "borderColor",
        cssBorderEndEndRadius: "borderEndEndRadius",
        cssBorderEndStartRadius: "borderEndStartRadius",
        cssBorderImage: "borderImage",
        cssBorderImageOutset: "borderImageOutset",
        cssBorderImageRepeat: "borderImageRepeat",
        cssBorderImageSlice: "borderImageSlice",
        cssBorderImageSource: "borderImageSource",
        cssBorderImageWidth: "borderImageWidth",
        cssBorderInline: "borderInline",
        cssBorderInlineColor: "borderInlineColor",
        cssBorderInlineEnd: "borderInlineEnd",
        cssBorderInlineEndColor: "borderInlineEndColor",
        cssBorderInlineEndStyle: "borderInlineEndStyle",
        cssBorderInlineEndWidth: "borderInlineEndWidth",
        cssBorderInlineStart: "borderInlineStart",
        cssBorderInlineStartColor: "borderInlineStartColor",
        cssBorderInlineStartStyle: "borderInlineStartStyle",
        cssBorderInlineStartWidth: "borderInlineStartWidth",
        cssBorderInlineStyle: "borderInlineStyle",
        cssBorderInlineWidth: "borderInlineWidth",
        cssBorderLeft: "borderLeft",
        cssBorderLeftColor: "borderLeftColor",
        cssBorderLeftStyle: "borderLeftStyle",
        cssBorderLeftWidth: "borderLeftWidth",
        cssBorderRadius: "borderRadius",
        cssBorderRight: "borderRight",
        cssBorderRightColor: "borderRightColor",
        cssBorderRightStyle: "borderRightStyle",
        cssBorderRightWidth: "borderRightWidth",
        cssBorderSpacing: "borderSpacing",
        cssBorderStartEndRadius: "borderStartEndRadius",
        cssBorderStartStartRadius: "borderStartStartRadius",
        cssBorderStyle: "borderStyle",
        cssBorderTop: "borderTop",
        cssBorderTopColor: "borderTopColor",
        cssBorderTopLeftRadius: "borderTopLeftRadius",
        cssBorderTopRightRadius: "borderTopRightRadius",
        cssBorderTopStyle: "borderTopStyle",
        cssBorderTopWidth: "borderTopWidth",
        cssBorderWidth: "borderWidth",
        cssBottom: "bottom",
        cssBoxShadow: "boxShadow",
        cssBoxSizing: "boxSizing",
        cssBreakAfter: "breakAfter",
        cssBreakBefore: "breakBefore",
        cssBreakInside: "breakInside",
        cssBufferedRendering: "bufferedRendering",
        cssCaptionSide: "captionSide",
        cssCaretColor: "caretColor",
        cssClear: "clear",
        cssClip: "clip",
        cssClipPath: "clipPath",
        cssClipRule: "clipRule",
        cssColor: "color",
        cssColorInterpolation: "colorInterpolation",
        cssColorInterpolationFilters: "colorInterpolationFilters",
        cssColorRendering: "colorRendering",
        cssColorScheme: "colorScheme",
        cssColumnCount: "columnCount",
        cssColumnFill: "columnFill",
        cssColumnGap: "columnGap",
        cssColumnRule: "columnRule",
        cssColumnRuleColor: "columnRuleColor",
        cssColumnRuleStyle: "columnRuleStyle",
        cssColumnRuleWidth: "columnRuleWidth",
        cssColumnSpan: "columnSpan",
        cssColumnWidth: "columnWidth",
        cssColumns: "columns",
        cssContain: "contain",
        cssContainIntrinsicBlockSize: "containIntrinsicBlockSize",
        cssContainIntrinsicHeight: "containIntrinsicHeight",
        cssContainIntrinsicInlineSize: "containIntrinsicInlineSize",
        cssContainIntrinsicSize: "containIntrinsicSize",
        cssContainIntrinsicWidth: "containIntrinsicWidth",
        cssContainer: "container",
        cssContainerName: "containerName",
        cssContainerType: "containerType",
        cssContent: "content",
        cssContentVisibility: "contentVisibility",
        cssCounterIncrement: "counterIncrement",
        cssCounterReset: "counterReset",
        cssCounterSet: "counterSet",
        cssCursor: "cursor",
        cssCx: "cx",
        cssCy: "cy",
        cssD: "d",
        cssDescentOverride: "descentOverride",
        cssDirection: "direction",
        cssDisplay: "display",
        cssDominantBaseline: "dominantBaseline",
        cssEmptyCells: "emptyCells",
        cssFallback: "fallback",
        cssFill: "fill",
        cssFillOpacity: "fillOpacity",
        cssFillRule: "fillRule",
        cssFilter: "filter",
        cssFlex: "flex",
        cssFlexBasis: "flexBasis",
        cssFlexDirection: "flexDirection",
        cssFlexFlow: "flexFlow",
        cssFlexGrow: "flexGrow",
        cssFlexShrink: "flexShrink",
        cssFlexWrap: "flexWrap",
        cssFloat: "float",
        cssFloodColor: "floodColor",
        cssFloodOpacity: "floodOpacity",
        cssFont: "font",
        cssFontDisplay: "fontDisplay",
        cssFontFamily: "fontFamily",
        cssFontFeatureSettings: "fontFeatureSettings",
        cssFontKerning: "fontKerning",
        cssFontOpticalSizing: "fontOpticalSizing",
        cssFontPalette: "fontPalette",
        cssFontSize: "fontSize",
        cssFontStretch: "fontStretch",
        cssFontStyle: "fontStyle",
        cssFontSynthesis: "fontSynthesis",
        cssFontSynthesisSmallCaps: "fontSynthesisSmallCaps",
        cssFontSynthesisStyle: "fontSynthesisStyle",
        cssFontSynthesisWeight: "fontSynthesisWeight",
        cssFontVariant: "fontVariant",
        cssFontVariantAlternates: "fontVariantAlternates",
        cssFontVariantCaps: "fontVariantCaps",
        cssFontVariantEastAsian: "fontVariantEastAsian",
        cssFontVariantLigatures: "fontVariantLigatures",
        cssFontVariantNumeric: "fontVariantNumeric",
        cssFontVariationSettings: "fontVariationSettings",
        cssFontWeight: "fontWeight",
        cssForcedColorAdjust: "forcedColorAdjust",
        cssGap: "gap",
        cssGrid: "grid",
        cssGridArea: "gridArea",
        cssGridAutoColumns: "gridAutoColumns",
        cssGridAutoFlow: "gridAutoFlow",
        cssGridAutoRows: "gridAutoRows",
        cssGridColumn: "gridColumn",
        cssGridColumnEnd: "gridColumnEnd",
        cssGridColumnGap: "gridColumnGap",
        cssGridColumnStart: "gridColumnStart",
        cssGridGap: "gridGap",
        cssGridRow: "gridRow",
        cssGridRowEnd: "gridRowEnd",
        cssGridRowGap: "gridRowGap",
        cssGridRowStart: "gridRowStart",
        cssGridTemplate: "gridTemplate",
        cssGridTemplateAreas: "gridTemplateAreas",
        cssGridTemplateColumns: "gridTemplateColumns",
        cssGridTemplateRows: "gridTemplateRows",
        cssHeight: "height",
        cssHyphenateCharacter: "hyphenateCharacter",
        cssHyphenateLimitChars: "hyphenateLimitChars",
        cssHyphens: "hyphens",
        cssImageOrientation: "imageOrientation",
        cssImageRendering: "imageRendering",
        cssInherits: "inherits",
        cssInitialLetter: "initialLetter",
        cssInitialValue: "initialValue",
        cssInlineSize: "inlineSize",
        cssInset: "inset",
        cssInsetBlock: "insetBlock",
        cssInsetBlockEnd: "insetBlockEnd",
        cssInsetBlockStart: "insetBlockStart",
        cssInsetInline: "insetInline",
        cssInsetInlineEnd: "insetInlineEnd",
        cssInsetInlineStart: "insetInlineStart",
        cssIsolation: "isolation",
        cssJustifyContent: "justifyContent",
        cssJustifyItems: "justifyItems",
        cssJustifySelf: "justifySelf",
        cssLeft: "left",
        cssLetterSpacing: "letterSpacing",
        cssLightingColor: "lightingColor",
        cssLineBreak: "lineBreak",
        cssLineGapOverride: "lineGapOverride",
        cssLineHeight: "lineHeight",
        cssListStyle: "listStyle",
        cssListStyleImage: "listStyleImage",
        cssListStylePosition: "listStylePosition",
        cssListStyleType: "listStyleType",
        cssMargin: "margin",
        cssMarginBlock: "marginBlock",
        cssMarginBlockEnd: "marginBlockEnd",
        cssMarginBlockStart: "marginBlockStart",
        cssMarginBottom: "marginBottom",
        cssMarginInline: "marginInline",
        cssMarginInlineEnd: "marginInlineEnd",
        cssMarginInlineStart: "marginInlineStart",
        cssMarginLeft: "marginLeft",
        cssMarginRight: "marginRight",
        cssMarginTop: "marginTop",
        cssMarker: "marker",
        cssMarkerEnd: "markerEnd",
        cssMarkerMid: "markerMid",
        cssMarkerStart: "markerStart",
        cssMask: "mask",
        cssMaskType: "maskType",
        cssMathDepth: "mathDepth",
        cssMathShift: "mathShift",
        cssMathStyle: "mathStyle",
        cssMaxBlockSize: "maxBlockSize",
        cssMaxHeight: "maxHeight",
        cssMaxInlineSize: "maxInlineSize",
        cssMaxWidth: "maxWidth",
        cssMinBlockSize: "minBlockSize",
        cssMinHeight: "minHeight",
        cssMinInlineSize: "minInlineSize",
        cssMinWidth: "minWidth",
        cssMixBlendMode: "mixBlendMode",
        cssNegative: "negative",
        cssObjectFit: "objectFit",
        cssObjectPosition: "objectPosition",
        cssObjectViewBox: "objectViewBox",
        cssOffset: "offset",
        cssOffsetDistance: "offsetDistance",
        cssOffsetPath: "offsetPath",
        cssOffsetRotate: "offsetRotate",
        cssOpacity: "opacity",
        cssOrder: "order",
        cssOrphans: "orphans",
        cssOutline: "outline",
        cssOutlineColor: "outlineColor",
        cssOutlineOffset: "outlineOffset",
        cssOutlineStyle: "outlineStyle",
        cssOutlineWidth: "outlineWidth",
        cssOverflow: "overflow",
        cssOverflowAnchor: "overflowAnchor",
        cssOverflowClipMargin: "overflowClipMargin",
        cssOverflowWrap: "overflowWrap",
        cssOverflowX: "overflowX",
        cssOverflowY: "overflowY",
        cssOverrideColors: "overrideColors",
        cssOverscrollBehavior: "overscrollBehavior",
        cssOverscrollBehaviorBlock: "overscrollBehaviorBlock",
        cssOverscrollBehaviorInline: "overscrollBehaviorInline",
        cssOverscrollBehaviorX: "overscrollBehaviorX",
        cssOverscrollBehaviorY: "overscrollBehaviorY",
        cssPad: "pad",
        cssPadding: "padding",
        cssPaddingBlock: "paddingBlock",
        cssPaddingBlockEnd: "paddingBlockEnd",
        cssPaddingBlockStart: "paddingBlockStart",
        cssPaddingBottom: "paddingBottom",
        cssPaddingInline: "paddingInline",
        cssPaddingInlineEnd: "paddingInlineEnd",
        cssPaddingInlineStart: "paddingInlineStart",
        cssPaddingLeft: "paddingLeft",
        cssPaddingRight: "paddingRight",
        cssPaddingTop: "paddingTop",
        cssPage: "page",
        cssPageBreakAfter: "pageBreakAfter",
        cssPageBreakBefore: "pageBreakBefore",
        cssPageBreakInside: "pageBreakInside",
        cssPageOrientation: "pageOrientation",
        cssPaintOrder: "paintOrder",
        cssPerspective: "perspective",
        cssPerspectiveOrigin: "perspectiveOrigin",
        cssPlaceContent: "placeContent",
        cssPlaceItems: "placeItems",
        cssPlaceSelf: "placeSelf",
        cssPointerEvents: "pointerEvents",
        cssPosition: "position",
        cssPrefix: "prefix",
        cssQuotes: "quotes",
        cssR: "r",
        cssRange: "range",
        cssResize: "resize",
        cssRight: "right",
        cssRotate: "rotate",
        cssRowGap: "rowGap",
        cssRubyPosition: "rubyPosition",
        cssRx: "rx",
        cssRy: "ry",
        cssScale: "scale",
        cssScrollBehavior: "scrollBehavior",
        cssScrollMargin: "scrollMargin",
        cssScrollMarginBlock: "scrollMarginBlock",
        cssScrollMarginBlockEnd: "scrollMarginBlockEnd",
        cssScrollMarginBlockStart: "scrollMarginBlockStart",
        cssScrollMarginBottom: "scrollMarginBottom",
        cssScrollMarginInline: "scrollMarginInline",
        cssScrollMarginInlineEnd: "scrollMarginInlineEnd",
        cssScrollMarginInlineStart: "scrollMarginInlineStart",
        cssScrollMarginLeft: "scrollMarginLeft",
        cssScrollMarginRight: "scrollMarginRight",
        cssScrollMarginTop: "scrollMarginTop",
        cssScrollPadding: "scrollPadding",
        cssScrollPaddingBlock: "scrollPaddingBlock",
        cssScrollPaddingBlockEnd: "scrollPaddingBlockEnd",
        cssScrollPaddingBlockStart: "scrollPaddingBlockStart",
        cssScrollPaddingBottom: "scrollPaddingBottom",
        cssScrollPaddingInline: "scrollPaddingInline",
        cssScrollPaddingInlineEnd: "scrollPaddingInlineEnd",
        cssScrollPaddingInlineStart: "scrollPaddingInlineStart",
        cssScrollPaddingLeft: "scrollPaddingLeft",
        cssScrollPaddingRight: "scrollPaddingRight",
        cssScrollPaddingTop: "scrollPaddingTop",
        cssScrollSnapAlign: "scrollSnapAlign",
        cssScrollSnapStop: "scrollSnapStop",
        cssScrollSnapType: "scrollSnapType",
        cssScrollbarGutter: "scrollbarGutter",
        cssShapeImageThreshold: "shapeImageThreshold",
        cssShapeMargin: "shapeMargin",
        cssShapeOutside: "shapeOutside",
        cssShapeRendering: "shapeRendering",
        cssSize: "size",
        cssSizeAdjust: "sizeAdjust",
        cssSpeak: "speak",
        cssSpeakAs: "speakAs",
        cssSrc: "src",
        cssStopColor: "stopColor",
        cssStopOpacity: "stopOpacity",
        cssStroke: "stroke",
        cssStrokeDasharray: "strokeDasharray",
        cssStrokeDashoffset: "strokeDashoffset",
        cssStrokeLinecap: "strokeLinecap",
        cssStrokeLinejoin: "strokeLinejoin",
        cssStrokeMiterlimit: "strokeMiterlimit",
        cssStrokeOpacity: "strokeOpacity",
        cssStrokeWidth: "strokeWidth",
        cssSuffix: "suffix",
        cssSymbols: "symbols",
        cssSyntax: "syntax",
        cssSystem: "system",
        cssTabSize: "tabSize",
        cssTableLayout: "tableLayout",
        cssTextAlign: "textAlign",
        cssTextAlignLast: "textAlignLast",
        cssTextAnchor: "textAnchor",
        cssTextCombineUpright: "textCombineUpright",
        cssTextDecoration: "textDecoration",
        cssTextDecorationColor: "textDecorationColor",
        cssTextDecorationLine: "textDecorationLine",
        cssTextDecorationSkipInk: "textDecorationSkipInk",
        cssTextDecorationStyle: "textDecorationStyle",
        cssTextDecorationThickness: "textDecorationThickness",
        cssTextEmphasis: "textEmphasis",
        cssTextEmphasisColor: "textEmphasisColor",
        cssTextEmphasisPosition: "textEmphasisPosition",
        cssTextEmphasisStyle: "textEmphasisStyle",
        cssTextIndent: "textIndent",
        cssTextOrientation: "textOrientation",
        cssTextOverflow: "textOverflow",
        cssTextRendering: "textRendering",
        cssTextShadow: "textShadow",
        cssTextSizeAdjust: "textSizeAdjust",
        cssTextTransform: "textTransform",
        cssTextUnderlineOffset: "textUnderlineOffset",
        cssTextUnderlinePosition: "textUnderlinePosition",
        cssTop: "top",
        cssTouchAction: "touchAction",
        cssTransform: "transform",
        cssTransformBox: "transformBox",
        cssTransformOrigin: "transformOrigin",
        cssTransformStyle: "transformStyle",
        cssTransition: "transition",
        cssTransitionDelay: "transitionDelay",
        cssTransitionDuration: "transitionDuration",
        cssTransitionProperty: "transitionProperty",
        cssTransitionTimingFunction: "transitionTimingFunction",
        cssTranslate: "translate",
        cssUnicodeBidi: "unicodeBidi",
        cssUnicodeRange: "unicodeRange",
        cssUserSelect: "userSelect",
        cssVectorEffect: "vectorEffect",
        cssVerticalAlign: "verticalAlign",
        cssViewTransitionName: "viewTransitionName",
        cssVisibility: "visibility",
        cssWebkitAlignContent: "webkitAlignContent",
        cssWebkitAlignItems: "webkitAlignItems",
        cssWebkitAlignSelf: "webkitAlignSelf",
        cssWebkitAnimation: "webkitAnimation",
        cssWebkitAnimationDelay: "webkitAnimationDelay",
        cssWebkitAnimationDirection: "webkitAnimationDirection",
        cssWebkitAnimationDuration: "webkitAnimationDuration",
        cssWebkitAnimationFillMode: "webkitAnimationFillMode",
        cssWebkitAnimationIterationCount: "webkitAnimationIterationCount",
        cssWebkitAnimationName: "webkitAnimationName",
        cssWebkitAnimationPlayState: "webkitAnimationPlayState",
        cssWebkitAnimationTimingFunction: "webkitAnimationTimingFunction",
        cssWebkitAppRegion: "webkitAppRegion",
        cssWebkitAppearance: "webkitAppearance",
        cssWebkitBackfaceVisibility: "webkitBackfaceVisibility",
        cssWebkitBackgroundClip: "webkitBackgroundClip",
        cssWebkitBackgroundOrigin: "webkitBackgroundOrigin",
        cssWebkitBackgroundSize: "webkitBackgroundSize",
        cssWebkitBorderAfter: "webkitBorderAfter",
        cssWebkitBorderAfterColor: "webkitBorderAfterColor",
        cssWebkitBorderAfterStyle: "webkitBorderAfterStyle",
        cssWebkitBorderAfterWidth: "webkitBorderAfterWidth",
        cssWebkitBorderBefore: "webkitBorderBefore",
        cssWebkitBorderBeforeColor: "webkitBorderBeforeColor",
        cssWebkitBorderBeforeStyle: "webkitBorderBeforeStyle",
        cssWebkitBorderBeforeWidth: "webkitBorderBeforeWidth",
        cssWebkitBorderBottomLeftRadius: "webkitBorderBottomLeftRadius",
        cssWebkitBorderBottomRightRadius: "webkitBorderBottomRightRadius",
        cssWebkitBorderEnd: "webkitBorderEnd",
        cssWebkitBorderEndColor: "webkitBorderEndColor",
        cssWebkitBorderEndStyle: "webkitBorderEndStyle",
        cssWebkitBorderEndWidth: "webkitBorderEndWidth",
        cssWebkitBorderHorizontalSpacing: "webkitBorderHorizontalSpacing",
        cssWebkitBorderImage: "webkitBorderImage",
        cssWebkitBorderRadius: "webkitBorderRadius",
        cssWebkitBorderStart: "webkitBorderStart",
        cssWebkitBorderStartColor: "webkitBorderStartColor",
        cssWebkitBorderStartStyle: "webkitBorderStartStyle",
        cssWebkitBorderStartWidth: "webkitBorderStartWidth",
        cssWebkitBorderTopLeftRadius: "webkitBorderTopLeftRadius",
        cssWebkitBorderTopRightRadius: "webkitBorderTopRightRadius",
        cssWebkitBorderVerticalSpacing: "webkitBorderVerticalSpacing",
        cssWebkitBoxAlign: "webkitBoxAlign",
        cssWebkitBoxDecorationBreak: "webkitBoxDecorationBreak",
        cssWebkitBoxDirection: "webkitBoxDirection",
        cssWebkitBoxFlex: "webkitBoxFlex",
        cssWebkitBoxOrdinalGroup: "webkitBoxOrdinalGroup",
        cssWebkitBoxOrient: "webkitBoxOrient",
        cssWebkitBoxPack: "webkitBoxPack",
        cssWebkitBoxReflect: "webkitBoxReflect",
        cssWebkitBoxShadow: "webkitBoxShadow",
        cssWebkitBoxSizing: "webkitBoxSizing",
        cssWebkitClipPath: "webkitClipPath",
        cssWebkitColumnBreakAfter: "webkitColumnBreakAfter",
        cssWebkitColumnBreakBefore: "webkitColumnBreakBefore",
        cssWebkitColumnBreakInside: "webkitColumnBreakInside",
        cssWebkitColumnCount: "webkitColumnCount",
        cssWebkitColumnGap: "webkitColumnGap",
        cssWebkitColumnRule: "webkitColumnRule",
        cssWebkitColumnRuleColor: "webkitColumnRuleColor",
        cssWebkitColumnRuleStyle: "webkitColumnRuleStyle",
        cssWebkitColumnRuleWidth: "webkitColumnRuleWidth",
        cssWebkitColumnSpan: "webkitColumnSpan",
        cssWebkitColumnWidth: "webkitColumnWidth",
        cssWebkitColumns: "webkitColumns",
        cssWebkitFilter: "webkitFilter",
        cssWebkitFlex: "webkitFlex",
        cssWebkitFlexBasis: "webkitFlexBasis",
        cssWebkitFlexDirection: "webkitFlexDirection",
        cssWebkitFlexFlow: "webkitFlexFlow",
        cssWebkitFlexGrow: "webkitFlexGrow",
        cssWebkitFlexShrink: "webkitFlexShrink",
        cssWebkitFlexWrap: "webkitFlexWrap",
        cssWebkitFontFeatureSettings: "webkitFontFeatureSettings",
        cssWebkitFontSmoothing: "webkitFontSmoothing",
        cssWebkitHighlight: "webkitHighlight",
        cssWebkitHyphenateCharacter: "webkitHyphenateCharacter",
        cssWebkitJustifyContent: "webkitJustifyContent",
        cssWebkitLineBreak: "webkitLineBreak",
        cssWebkitLineClamp: "webkitLineClamp",
        cssWebkitLocale: "webkitLocale",
        cssWebkitLogicalHeight: "webkitLogicalHeight",
        cssWebkitLogicalWidth: "webkitLogicalWidth",
        cssWebkitMarginAfter: "webkitMarginAfter",
        cssWebkitMarginBefore: "webkitMarginBefore",
        cssWebkitMarginEnd: "webkitMarginEnd",
        cssWebkitMarginStart: "webkitMarginStart",
        cssWebkitMask: "webkitMask",
        cssWebkitMaskBoxImage: "webkitMaskBoxImage",
        cssWebkitMaskBoxImageOutset: "webkitMaskBoxImageOutset",
        cssWebkitMaskBoxImageRepeat: "webkitMaskBoxImageRepeat",
        cssWebkitMaskBoxImageSlice: "webkitMaskBoxImageSlice",
        cssWebkitMaskBoxImageSource: "webkitMaskBoxImageSource",
        cssWebkitMaskBoxImageWidth: "webkitMaskBoxImageWidth",
        cssWebkitMaskClip: "webkitMaskClip",
        cssWebkitMaskComposite: "webkitMaskComposite",
        cssWebkitMaskImage: "webkitMaskImage",
        cssWebkitMaskOrigin: "webkitMaskOrigin",
        cssWebkitMaskPosition: "webkitMaskPosition",
        cssWebkitMaskPositionX: "webkitMaskPositionX",
        cssWebkitMaskPositionY: "webkitMaskPositionY",
        cssWebkitMaskRepeat: "webkitMaskRepeat",
        cssWebkitMaskRepeatX: "webkitMaskRepeatX",
        cssWebkitMaskRepeatY: "webkitMaskRepeatY",
        cssWebkitMaskSize: "webkitMaskSize",
        cssWebkitMaxLogicalHeight: "webkitMaxLogicalHeight",
        cssWebkitMaxLogicalWidth: "webkitMaxLogicalWidth",
        cssWebkitMinLogicalHeight: "webkitMinLogicalHeight",
        cssWebkitMinLogicalWidth: "webkitMinLogicalWidth",
        cssWebkitOpacity: "webkitOpacity",
        cssWebkitOrder: "webkitOrder",
        cssWebkitPaddingAfter: "webkitPaddingAfter",
        cssWebkitPaddingBefore: "webkitPaddingBefore",
        cssWebkitPaddingEnd: "webkitPaddingEnd",
        cssWebkitPaddingStart: "webkitPaddingStart",
        cssWebkitPerspective: "webkitPerspective",
        cssWebkitPerspectiveOrigin: "webkitPerspectiveOrigin",
        cssWebkitPerspectiveOriginX: "webkitPerspectiveOriginX",
        cssWebkitPerspectiveOriginY: "webkitPerspectiveOriginY",
        cssWebkitPrintColorAdjust: "webkitPrintColorAdjust",
        cssWebkitRtlOrdering: "webkitRtlOrdering",
        cssWebkitRubyPosition: "webkitRubyPosition",
        cssWebkitShapeImageThreshold: "webkitShapeImageThreshold",
        cssWebkitShapeMargin: "webkitShapeMargin",
        cssWebkitShapeOutside: "webkitShapeOutside",
        cssWebkitTapHighlightColor: "webkitTapHighlightColor",
        cssWebkitTextCombine: "webkitTextCombine",
        cssWebkitTextDecorationsInEffect: "webkitTextDecorationsInEffect",
        cssWebkitTextEmphasis: "webkitTextEmphasis",
        cssWebkitTextEmphasisColor: "webkitTextEmphasisColor",
        cssWebkitTextEmphasisPosition: "webkitTextEmphasisPosition",
        cssWebkitTextEmphasisStyle: "webkitTextEmphasisStyle",
        cssWebkitTextFillColor: "webkitTextFillColor",
        cssWebkitTextOrientation: "webkitTextOrientation",
        cssWebkitTextSecurity: "webkitTextSecurity",
        cssWebkitTextSizeAdjust: "webkitTextSizeAdjust",
        cssWebkitTextStroke: "webkitTextStroke",
        cssWebkitTextStrokeColor: "webkitTextStrokeColor",
        cssWebkitTextStrokeWidth: "webkitTextStrokeWidth",
        cssWebkitTransform: "webkitTransform",
        cssWebkitTransformOrigin: "webkitTransformOrigin",
        cssWebkitTransformOriginX: "webkitTransformOriginX",
        cssWebkitTransformOriginY: "webkitTransformOriginY",
        cssWebkitTransformOriginZ: "webkitTransformOriginZ",
        cssWebkitTransformStyle: "webkitTransformStyle",
        cssWebkitTransition: "webkitTransition",
        cssWebkitTransitionDelay: "webkitTransitionDelay",
        cssWebkitTransitionDuration: "webkitTransitionDuration",
        cssWebkitTransitionProperty: "webkitTransitionProperty",
        cssWebkitTransitionTimingFunction: "webkitTransitionTimingFunction",
        cssWebkitUserDrag: "webkitUserDrag",
        cssWebkitUserModify: "webkitUserModify",
        cssWebkitUserSelect: "webkitUserSelect",
        cssWebkitWritingMode: "webkitWritingMode",
        cssWhiteSpace: "whiteSpace",
        cssWidows: "widows",
        cssWidth: "width",
        cssWillChange: "willChange",
        cssWordBreak: "wordBreak",
        cssWordSpacing: "wordSpacing",
        cssWordWrap: "wordWrap",
        cssWritingMode: "writingMode",
        cssX: "x",
        cssY: "y",
        cssZIndex: "zIndex",
        cssZoom: "zoom"
      };
    }
  });

  // node_modules/@frugal-ui/base/styles/base.css
  var require_base = __commonJS({
    "node_modules/@frugal-ui/base/styles/base.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/@frugal-ui/base/styles/color.css
  var require_color = __commonJS({
    "node_modules/@frugal-ui/base/styles/color.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/@frugal-ui/base/styles/fonts.css
  var require_fonts = __commonJS({
    "node_modules/@frugal-ui/base/styles/fonts.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/@frugal-ui/base/styles/theme.css
  var require_theme = __commonJS({
    "node_modules/@frugal-ui/base/styles/theme.css"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/@frugal-ui/base/index.js
  var require_base2 = __commonJS({
    "node_modules/@frugal-ui/base/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SelectingListItem = exports.Select = exports.ScrollArea = exports.RadioButton = exports.ProgressBar = exports.ProgressBarStates = exports.Popover = exports.Meter = exports.ListItem = exports.List = exports.ListStyles = exports.Link = exports.Label = exports.Input = exports.TimeInputCfg = exports.DateInputCfg = exports.NumberInputCfg = exports.TextInputCfg = exports.Icon = exports.HStack = exports.Header = exports.GroupContainer = exports.Form = exports.Div = exports.Container = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.ButtonStyles = exports.Box = exports.AutoComplete = exports.Accordion = exports.Component = exports.ScreenSizes = exports.unwrapBindable = exports.unwrapValue = exports.ProxyState = exports.ComputedState = exports.State = exports.BindableDummy = exports.BindableObject = exports.CheckSBModel = exports.ValueSBModel = exports.DataSelection = exports.CheckedTBModel = exports.ValueTBModel = exports.GenericTBModel = exports.IdentifiableObjectMap = exports.UUID = exports.buildInterface = void 0;
      exports.TabView = exports.NavigationLink = exports.Stage = exports.GenericScene = exports.SceneTypes = exports.VStack = exports.VisualGroup = exports.Textarea = exports.Text = exports.Submit = exports.Spacer = exports.Slider = exports.Sheet = exports.Separator = void 0;
      require_round();
      var css_property_names_1 = require_css_property_names();
      require_base();
      require_color();
      require_fonts();
      require_theme();
      function buildInterface2(component) {
        document.body.appendChild(component);
      }
      exports.buildInterface = buildInterface2;
      var UUID = class {
        constructor() {
          let uuid = "";
          const chars = "0123456789abcdef";
          for (let i = 0; i < 36; i++) {
            if (i === 8 || i === 13 || i === 18 || i === 23) {
              uuid += "-";
            } else if (i === 14) {
              uuid += "4";
            } else if (i === 19) {
              uuid += chars[Math.random() * 4 | 8];
            } else {
              uuid += chars[Math.random() * 16 | 0];
            }
          }
          this.value = uuid;
        }
        toString() {
          return this.value;
        }
      };
      exports.UUID = UUID;
      var IdentifiableObjectMap = class {
        constructor() {
          this.map = /* @__PURE__ */ new Map();
          this.get = (id) => {
            return this.map.get(id.toString());
          };
          this.set = (value) => {
            this.map.set(value.uuid.toString(), value);
          };
          this.remove = (value) => {
            this.map.delete(value.uuid.toString());
          };
          this.values = () => {
            return Array.from(this.map.values());
          };
          this.getSorted = (compareFn) => {
            return this.values().sort(compareFn);
          };
          this.forEach = (callbackFn) => {
            this.values().forEach(callbackFn);
          };
          this.clear = () => {
            this.map.clear();
          };
        }
        get length() {
          return this.values().length;
        }
      };
      exports.IdentifiableObjectMap = IdentifiableObjectMap;
      var GenericTBModel = class {
        constructor(configuration) {
          this.data = configuration.data;
          this.component = configuration.component;
          this.defaultValue = configuration.fallbackValue;
          this.changeEventName = configuration.changeEventName;
          this.getViewValue = configuration.getViewProperty;
          this.setViewValue = configuration.setViewProperty;
        }
      };
      exports.GenericTBModel = GenericTBModel;
      var ValueTBModel = class extends GenericTBModel {
        constructor(configuration) {
          super({
            data: configuration.data,
            component: configuration.component,
            fallbackValue: configuration.fallbackValue,
            changeEventName: "input",
            getViewProperty: () => {
              var _a;
              return (_a = this.component.value) !== null && _a !== void 0 ? _a : this.defaultValue;
            },
            setViewProperty: (newValue) => {
              this.component.value = newValue;
            }
          });
        }
      };
      exports.ValueTBModel = ValueTBModel;
      var CheckedTBModel = class extends ValueTBModel {
        constructor(configuration) {
          super({
            data: configuration.isChecked,
            component: configuration.component,
            fallbackValue: false
          });
          this.changeEventName = "change";
          this.getViewValue = () => {
            return this.component.checked;
          };
          this.setViewValue = (newValue) => {
            this.component.checked = newValue;
          };
          this.component = configuration.component;
        }
      };
      exports.CheckedTBModel = CheckedTBModel;
      var DataSelection = class {
        constructor() {
          this.uuid = new UUID();
          this.selectedItems = new State2([]);
        }
      };
      exports.DataSelection = DataSelection;
      var ValueSBModel = class {
        constructor(configuration) {
          this.isExclusive = false;
          this.getOwnIndex = () => {
            return this.selection.selectedItems.value.indexOf(this.ownValue);
          };
          this.getData = () => {
            return this.getOwnIndex() != -1;
          };
          this.setData = (isSelected) => {
            if (isSelected) {
              if (this.getOwnIndex() != -1)
                return;
              if (this.isExclusive == true)
                return this.selection.selectedItems.value = [this.ownValue];
              else
                this.selection.selectedItems.value.push(this.ownValue);
            } else {
              if (this.getOwnIndex() == -1)
                return;
              this.selection.selectedItems.value.splice(this.getOwnIndex(), 1);
            }
            this.selection.selectedItems.triggerAll();
          };
          this.component = configuration.component;
          this.selection = configuration.selection;
          this.ownValue = configuration.ownValue;
          this.changeEventName = configuration.changeEventName;
          this.getView = configuration.getView;
          this.setView = configuration.setView;
          if (configuration.isExclusive)
            this.isExclusive = configuration.isExclusive;
        }
      };
      exports.ValueSBModel = ValueSBModel;
      var CheckSBModel = class extends ValueSBModel {
        constructor(configuration) {
          super(Object.assign(Object.assign({}, configuration), { changeEventName: "change", getView: () => {
            return this.component.checked;
          }, setView: (isSelected) => {
            this.component.checked = isSelected;
          } }));
          this.component = configuration.component;
        }
      };
      exports.CheckSBModel = CheckSBModel;
      var BindableObject = class {
        constructor(value) {
          this.uuid = new UUID();
          this.triggerBinding = (binding) => {
          };
          this.triggerAll = () => {
          };
          this.addBinding = (binding) => {
          };
          this.removeBinding = (binding) => {
          };
          this._value = value;
        }
        /* basic */
        get value() {
          return this._value;
        }
        set value(newValue) {
          this._value = newValue;
          this.triggerAll();
        }
      };
      exports.BindableObject = BindableObject;
      var BindableDummy = class extends BindableObject {
        constructor() {
          super(...arguments);
          this.triggerBinding = () => {
            if (this.action)
              this.action(this._value);
          };
          this.triggerAll = () => {
            if (this.action)
              this.action(this._value);
          };
          this.addBinding = (binding) => {
            this.action = binding.action;
          };
        }
      };
      exports.BindableDummy = BindableDummy;
      var State2 = class extends BindableObject {
        constructor() {
          super(...arguments);
          this.bindings = /* @__PURE__ */ new Map();
          this.triggerBinding = (binding) => {
            binding.action(this.value);
          };
          this.triggerAll = () => {
            this.bindings.forEach((action) => {
              action(this.value);
            });
          };
          this.addBinding = (binding) => {
            this.bindings.set(binding.uuid, binding.action);
          };
          this.removeBinding = (binding) => {
            this.bindings.delete(binding.uuid);
          };
        }
      };
      exports.State = State2;
      var ComputedState = class extends State2 {
        constructor(configuration) {
          super(configuration.initialValue);
          const binding = {
            uuid: new UUID(),
            action: () => configuration.compute(this)
          };
          configuration.statesToBind.forEach((bindable) => {
            bindable.addBinding(binding);
            bindable.triggerBinding(binding);
          });
        }
      };
      exports.ComputedState = ComputedState;
      var ProxyState = class extends State2 {
        constructor(configuration) {
          super(configuration.convertFromOriginal(configuration.original.value));
          this.original = configuration.original;
          this.convertFromOriginal = configuration.convertFromOriginal;
          this.convertToOriginal = configuration.convertToOriginal;
          const binding = {
            uuid: new UUID(),
            action: () => {
              this._value = configuration.convertFromOriginal(this.original.value);
              this.triggerAll();
            }
          };
          this.original.addBinding(binding);
          this.original.triggerBinding(binding);
        }
        set value(newValue) {
          this._value = newValue;
          this.original.value = this.convertToOriginal(this.value);
        }
        get value() {
          return this._value;
        }
      };
      exports.ProxyState = ProxyState;
      function unwrapValue(valueObject) {
        if (valueObject instanceof BindableObject)
          return valueObject.value;
        else
          return valueObject;
      }
      exports.unwrapValue = unwrapValue;
      function unwrapBindable(valueObject) {
        if (valueObject instanceof BindableObject)
          return valueObject;
        else
          return new BindableDummy(unwrapValue(valueObject));
      }
      exports.unwrapBindable = unwrapBindable;
      var ScreenSizes;
      (function(ScreenSizes2) {
        ScreenSizes2["Mobile"] = "screen-mobile";
        ScreenSizes2["Tablet"] = "screen-tablet";
        ScreenSizes2["Desktop"] = "screen-desktop";
      })(ScreenSizes || (exports.ScreenSizes = ScreenSizes = {}));
      function Component(tagName) {
        const component = document.createElement(tagName);
        Object.keys(css_property_names_1.PrefixedCSSPropertyNames).forEach((componentProperty) => {
          const cssProperty = css_property_names_1.PrefixedCSSPropertyNames[componentProperty];
          component[componentProperty] = (value) => {
            component.setStyle(cssProperty, value);
            return component;
          };
        });
        component.access = (fn) => {
          fn(component);
          return component;
        };
        component.focusOnCreate = () => {
          setTimeout(() => component.focus(), 100);
          return component;
        };
        component.focusOnChange = (state, matchingValue) => {
          component.createBinding(state, (newValue) => {
            if (newValue == matchingValue)
              setTimeout(() => component.focus(), 100);
          });
          return component;
        };
        component.setAccessibilityCurrentState = (state, shouldApply) => {
          component.createBinding(shouldApply, (shouldApply2) => {
            component.setAttr("aria-current", shouldApply2 ? state : "");
          });
          return component;
        };
        component.setAccessibilityLabel = (label) => {
          component.setAttr("aria-label", label);
          return component;
        };
        component.setAccessibilityRole = (roleName) => {
          component.setAttr("role", roleName);
          return component;
        };
        component.allowKeyboardFocus = () => {
          component.setAttr("tabIndex", 0);
          return component;
        };
        function prepareAnimation() {
          const width = component.offsetWidth;
          const height = component.offsetHeight;
          component.style.setProperty("--element-width", `${width}px`);
          component.style.setProperty("--element-height", `${height}px`);
        }
        component.animateIn = (animationName = "standard") => {
          const shouldAnimate = window.matchMedia("(prefers-reduced-motion)").matches == false;
          if (shouldAnimate) {
            document.body.appendChild(component);
            prepareAnimation();
            component.remove();
            component.addToClass(`animation-${animationName}`).addToClass("in-hidden-animation-state").addToClass("animating-in");
            setTimeout(() => component.removeFromClass("in-hidden-animation-state"), 1);
            setTimeout(() => component.removeFromClass("animating-in"), 300);
          }
          return component;
        };
        component.animateOut = () => {
          return new Promise((resolve) => {
            function remove() {
              component.remove();
              resolve();
            }
            const shouldAnimate = window.matchMedia("(prefers-reduced-motion)").matches == false;
            if (shouldAnimate) {
              prepareAnimation();
              component.addToClass("animating-out").addToClass("in-hidden-animation-state");
              setTimeout(() => remove(), 300);
            } else {
              remove();
            }
          });
        };
        component.setID = (id) => {
          component.id = id.toString();
          return component;
        };
        component.setAttr = (key, value = "") => {
          const bindable = unwrapBindable(value);
          component.createBinding(bindable, (newValue) => {
            component.setAttribute(key, newValue.toString());
          }).updateBinding(bindable);
          return component;
        };
        component.rmAttr = (key) => {
          component.removeAttribute(key);
          return component;
        };
        component.toggleAttr = (key, condition) => {
          const bindable = unwrapBindable(condition);
          component.createBinding(bindable, (newValue) => {
            if (newValue == true)
              component.setAttribute(key, "");
            else
              component.removeAttribute(key);
          }).updateBinding(bindable);
          return component;
        };
        component.resetClasses = () => {
          component.className = "";
          return component;
        };
        component.removeFromClass = (className) => {
          component.classList.remove(className);
          return component;
        };
        component.addToClass = (className) => {
          component.classList.add(className);
          return component;
        };
        component.addToClassConditionally = (className, condition) => {
          const bindable = unwrapBindable(condition);
          component.createBinding(bindable, (newValue) => {
            component.classList.toggle(className, newValue);
          }).updateBinding(bindable);
          return component;
        };
        component.setStyle = (property, value) => {
          component.style[property] = value.toString();
          return component;
        };
        component.addItems = (...children) => {
          children.forEach((child) => {
            component.appendChild(child);
          });
          return component;
        };
        component.addItemsBefore = (...children) => {
          children.forEach((child) => {
            component.insertBefore(child, component.firstChild);
          });
          return component;
        };
        component.clear = () => {
          component.innerHTML = "";
          return component;
        };
        component.setItems = (children) => {
          const bindable = unwrapBindable(children);
          component.createBinding(bindable, (children2) => {
            component.clear().addItems(...children2);
          }).updateBinding(bindable);
          return component;
        };
        component.setText = (text) => {
          const bindable = unwrapBindable(text);
          component.createBinding(bindable, (newValue) => {
            component.innerText = newValue.toString();
          }).updateBinding(bindable);
          return component;
        };
        component.setValue = (value) => {
          const bindable = unwrapBindable(value);
          component.createBinding(bindable, (newValue) => {
            component.value = newValue;
          }).updateBinding(bindable);
          return component;
        };
        component.setHTML = (text) => {
          const bindable = unwrapBindable(text);
          component.createBinding(bindable, (newValue) => {
            component.innerHTML = newValue;
          }).updateBinding(bindable);
          return component;
        };
        component.listen = (eventName, handler) => {
          component.addEventListener(eventName, handler);
          return component;
        };
        component.ignore = (eventName, handler) => {
          component.addEventListener(eventName, handler);
          return component;
        };
        component.registerKeyboardShortcuts = (...shortcuts) => {
          component.listen("keydown", (rawEvent) => {
            const ev = rawEvent;
            A:
              for (const shortcut of shortcuts) {
                if (shortcut.modifiers)
                  for (const modifier of shortcut.modifiers) {
                    if (modifier == "commandOrControl") {
                      if (ev.ctrlKey == false && ev.metaKey == false)
                        continue A;
                    } else if (ev[modifier] == false) {
                      continue A;
                    }
                  }
                if (ev.key == shortcut.key) {
                  shortcut.action(ev);
                }
              }
          });
          return component;
        };
        component.hideConditionally = (isHidden) => {
          component.toggleAttr("hidden", isHidden);
          component.setAttr("aria-hidden", isHidden);
          return component;
        };
        component.setVisibleIfMatch = (a, b) => {
          const bindableA = unwrapBindable(a);
          const bindableB = unwrapBindable(b);
          function update() {
            component.hideConditionally(bindableA.value != bindableB.value);
          }
          component.createBinding(bindableA, update).updateBinding(bindableA).createBinding(bindableB, update).updateBinding(bindableB);
          return component;
        };
        component.bindings = /* @__PURE__ */ new Map();
        component.createBinding = (bindable, action) => {
          const binding = {
            uuid: new UUID(),
            action
          };
          bindable.addBinding(binding);
          component.bindings.set(bindable.uuid.toString(), binding);
          return component;
        };
        component.createTightBinding = (model) => {
          component.createBinding(model.data, (newValue) => {
            model.setViewValue(newValue);
          }).updateBinding(model.data).listen(model.changeEventName, () => {
            model.data.value = model.getViewValue();
          });
          return component;
        };
        component.createSelectionBinding = (model) => {
          component.createBinding(model.selection.selectedItems, () => {
            const isSelected = model.getOwnIndex() != -1;
            model.setView(isSelected);
          }).updateBinding(model.selection.selectedItems).listen(model.changeEventName, () => {
            const isSelectedInView = model.getView();
            model.setData(isSelectedInView);
          });
          return component;
        };
        component.removeBinding = (bindable) => {
          const binding = component.bindings.get(bindable.uuid.toString());
          if (!binding) {
            console.error(`Failed to unbind ${bindable.uuid.toString()} but bindable is unknown.`);
            return component;
          }
          bindable.removeBinding(binding);
          component.bindings.delete(bindable.uuid.toString());
          return component;
        };
        component.updateBinding = (bindable) => {
          const binding = component.bindings.get(bindable.uuid.toString());
          if (!binding) {
            console.error(`Failed to update on bindable ${bindable.uuid.toString()} but bindable is unknown.`);
            return component;
          }
          bindable.triggerBinding(binding);
          return component;
        };
        component.forceDefaultStyles = () => {
          component.addToClass("forcing-default-styles");
          return component;
        };
        component.hideOnScreenSize = (size) => {
          component.addToClass("hides-responsively").addToClass(size);
          return component;
        };
        component.useDefaultPadding = () => {
          component.addToClass("using-default-padding");
          return component;
        };
        component.useDefaultSpacing = () => {
          component.cssGap("var(--gap)");
          return component;
        };
        component.useMutedColor = () => {
          component.cssOpacity(0.6);
          return component;
        };
        return component;
      }
      exports.Component = Component;
      function Accordion(label, ...children) {
        return Container("details", Text2(label, "summary"), ...children);
      }
      exports.Accordion = Accordion;
      function AutoComplete(optionData, input) {
        const uuid = new UUID();
        const optionViews = new ComputedState({
          statesToBind: [optionData],
          initialValue: [],
          compute: (self) => {
            self.value = optionData.value.map((option) => Text2(option, "option"));
          }
        });
        return Div(Component("datalist").setID(uuid).setItems(optionViews), input.setAttr("list", uuid));
      }
      exports.AutoComplete = AutoComplete;
      function Box(...children) {
        return Div(...children).addToClass("boxes");
      }
      exports.Box = Box;
      var ButtonStyles;
      (function(ButtonStyles2) {
        ButtonStyles2["Transparent"] = "buttons-transparent";
        ButtonStyles2["Normal"] = "buttons-normal";
        ButtonStyles2["Primary"] = "buttons-primary";
        ButtonStyles2["Destructive"] = "buttons-destructive";
        ButtonStyles2["Pressed"] = "buttons-pressed";
      })(ButtonStyles || (exports.ButtonStyles = ButtonStyles = {}));
      function Button(configuration) {
        var _a, _b, _c;
        return Component("button").addItems(Icon((_a = configuration.iconName) !== null && _a !== void 0 ? _a : ""), Text2((_b = configuration.text) !== null && _b !== void 0 ? _b : "").addToClass("button-texts")).setAttr("aria-label", configuration.accessibilityLabel).addToClass("buttons").addToClass((_c = configuration.style) !== null && _c !== void 0 ? _c : ButtonStyles.Normal).listen("click", (e) => {
          e.stopPropagation();
          configuration.action(e);
        });
      }
      exports.Button = Button;
      function ButtonGroup(...buttons) {
        return Div(...buttons).addToClass("button-groups");
      }
      exports.ButtonGroup = ButtonGroup;
      function Checkbox(configuration) {
        return Text2(configuration.label, "label").addItemsBefore(Input2({
          type: "checkbox",
          fallbackValue: void 0,
          value: void 0,
          placeholder: void 0,
          toValueType: (inputValue) => inputValue,
          valueToString: (inputValue) => inputValue
        }).addToClass("checkable-items").access((self) => {
          self.createTightBinding(new CheckedTBModel({
            isChecked: configuration.isChecked,
            component: self
          }));
          if (configuration.isIndeterminate != void 0)
            self.createTightBinding(new GenericTBModel({
              component: self,
              data: configuration.isIndeterminate,
              fallbackValue: false,
              changeEventName: "change",
              getViewProperty: () => self.indeterminate,
              setViewProperty: (newValue) => self.indeterminate = newValue
            }));
        }));
      }
      exports.Checkbox = Checkbox;
      function Container(tagName, ...children) {
        return Component(tagName).addItems(...children);
      }
      exports.Container = Container;
      function Div(...children) {
        return Container("div", ...children);
      }
      exports.Div = Div;
      function Form2(configuration, ...children) {
        return Container("form", ...children).setAttr("action", configuration.action).setAttr("method", configuration.method);
      }
      exports.Form = Form2;
      function GroupContainer2(label, ...children) {
        return VStack2(Text2(label, "h5").useMutedColor(), VStack2(...children).cssFlex(0).cssAlignItems("start").cssJustifyContent("start")).useDefaultSpacing().cssJustifyContent("start").cssMarginTop("1rem").cssFlex(0);
      }
      exports.GroupContainer = GroupContainer2;
      function Header(configuration, ...actions) {
        return HStack().access((self) => {
          if (configuration.parentScene)
            self.addItems(Button({
              style: ButtonStyles.Transparent,
              iconName: "chevron_left",
              accessibilityLabel: "go back",
              action: configuration.parentScene.close
            }).access((self2) => {
              if (!configuration.forceShowBackButton == true)
                self2.hideOnScreenSize(ScreenSizes.Desktop);
            }));
        }).addItems(Text2(configuration.text, "h5").access((self) => {
          if (configuration.hideTextOnMobile == true)
            self.hideOnScreenSize(ScreenSizes.Mobile);
        }), Spacer(), ...actions).cssFlex(0).useDefaultSpacing().addToClass("headers");
      }
      exports.Header = Header;
      function HStack(...children) {
        return Div(...children).addToClass("stacks-horizontal");
      }
      exports.HStack = HStack;
      function Icon(iconName) {
        return Text2(iconName).addToClass("icons").addToClass("material-icons-round");
      }
      exports.Icon = Icon;
      var TextInputCfg2 = class {
        constructor(value, placeholder = "") {
          this.type = "text";
          this.toValueType = (inputValue) => inputValue;
          this.valueToString = (value2) => value2;
          this.fallbackValue = value.value;
          this.value = value;
          this.placeholder = placeholder;
        }
      };
      exports.TextInputCfg = TextInputCfg2;
      var NumberInputCfg = class {
        constructor(value, placeholder = "") {
          this.type = "number";
          this.toValueType = (inputValue) => parseFloat(inputValue);
          this.valueToString = (value2) => value2.toString();
          this.fallbackValue = value.value;
          this.value = value;
          this.placeholder = placeholder;
        }
      };
      exports.NumberInputCfg = NumberInputCfg;
      var DateInputCfg = class {
        constructor(value, placeholder = "") {
          this.type = "date";
          this.toValueType = (inputValue) => new Date(inputValue);
          this.valueToString = (value2) => {
            const day = value2.toLocaleString("en-US", {
              day: "2-digit"
            });
            const month = value2.toLocaleString("en-US", {
              month: "2-digit"
            });
            const year = value2.getFullYear();
            return `${year}-${month}-${day}`;
          };
          this.fallbackValue = value.value;
          this.value = value;
          this.placeholder = placeholder;
        }
      };
      exports.DateInputCfg = DateInputCfg;
      var TimeInputCfg = class extends DateInputCfg {
        constructor() {
          super(...arguments);
          this.type = "time";
          this.toValueType = (inputValue) => {
            const date = /* @__PURE__ */ new Date();
            const [hours, minutes] = inputValue.split(":");
            date.setHours(parseInt(hours));
            date.setMinutes(parseInt(minutes));
            return date;
          };
          this.valueToString = (value) => {
            const hour = value.getHours().toString().padStart(2, "0");
            const minute = value.getMinutes().toString().padStart(2, "0");
            return `${hour}:${minute}`;
          };
        }
      };
      exports.TimeInputCfg = TimeInputCfg;
      function Input2(configuration) {
        return Component("input").addToClass("inputs").access((self) => {
          var _a;
          self.setAttr("type", configuration.type).setAttr("placeholder", (_a = configuration.placeholder) !== null && _a !== void 0 ? _a : "");
          if (configuration.value != void 0 && configuration.fallbackValue != void 0)
            self.createTightBinding({
              data: configuration.value,
              component: self,
              defaultValue: configuration.fallbackValue,
              changeEventName: "input",
              getViewValue: () => configuration.toValueType(self.value),
              setViewValue: (newValue) => self.value = configuration.valueToString(newValue)
            });
        });
      }
      exports.Input = Input2;
      function Label(labelText, labeledItem) {
        return Component("label").setText(labelText).addItems(labeledItem).addToClass("labels");
      }
      exports.Label = Label;
      function Link(label, href) {
        return Text2(label, "a").setAttr("href", href);
      }
      exports.Link = Link;
      var ListStyles;
      (function(ListStyles2) {
        ListStyles2["Normal"] = "list";
        ListStyles2["Group"] = "list";
        ListStyles2["Box"] = "listbox";
      })(ListStyles || (exports.ListStyles = ListStyles = {}));
      function List(configuration, compute) {
        var _a;
        let draggedComponent = void 0;
        let draggedData = void 0;
        let dragStartTimeout = void 0;
        function cleanIndices() {
          configuration.listData.value.values().sort((a, b) => a.index.value - b.index.value).forEach((item, i) => item.index.value = i);
        }
        function startDrag(e, data, component) {
          document.body.addEventListener("mouseup", stopDrag);
          document.body.addEventListener("touchend", stopDrag);
          dragStartTimeout = setTimeout(() => {
            draggedData = data;
            draggedComponent = component.addToClass("dragging");
          }, 200);
        }
        function handleDragMove(e) {
          if (draggedData == void 0)
            return;
          function getCoordinate(e2, axis) {
            if ("touches" in e2) {
              return e2.touches[0][axis];
            } else if (axis in e2) {
              return e2[axis];
            }
            return 0;
          }
          const elementUnderCursor = document.elementFromPoint(getCoordinate(e, "clientX"), getCoordinate(e, "clientY"));
          if (elementUnderCursor == null)
            return;
          const data = configuration.listData.value.get(elementUnderCursor.id);
          if (data == null)
            return;
          const ownIndex = data.index.value;
          const currentDraggedIndex = draggedData.index.value;
          draggedData.index.value = ownIndex;
          data.index.value = currentDraggedIndex;
        }
        function stopDrag() {
          if (dragStartTimeout)
            clearTimeout(dragStartTimeout);
          if (draggedData == void 0)
            return;
          document.body.removeEventListener("mouseup", stopDrag);
          document.body.removeEventListener("touchend", stopDrag);
          draggedData = void 0;
          cleanIndices();
          if (draggedComponent == void 0)
            return;
          draggedComponent.removeFromClass("dragging");
          draggedComponent = void 0;
        }
        const style = (_a = configuration.style) !== null && _a !== void 0 ? _a : ListStyles.Normal;
        return VStack2().setAccessibilityRole(style).listen("touchmove", (e) => handleDragMove(e)).listen("mousemove", (e) => handleDragMove(e)).access((listView) => {
          if (style == ListStyles.Box)
            listView.addToClass("boxes");
          if (style == ListStyles.Group)
            listView.addToClass("visual-groups");
          listView.createBinding(configuration.listData, (listData) => {
            function removeItemView(itemView) {
              var _a2;
              const removeFn = (_a2 = itemView.animateOut) !== null && _a2 !== void 0 ? _a2 : itemView.remove;
              removeFn();
            }
            configuration.listData.value.forEach((itemData, i) => {
              const oldItemView = document.getElementById(itemData.uuid.toString());
              if (oldItemView != null)
                return;
              const newItemView = compute(itemData).setID(itemData.uuid).access((self) => {
                self.createBinding(unwrapBindable(itemData.index), (newIndex) => {
                  self.cssOrder(newIndex.toString());
                });
                if (configuration.sortable == true)
                  self.addToClass("draggable-items").addToClass("rearrangable-items").listen("mousedown", (e) => startDrag(e, itemData, self)).listen("touchstart", (e) => startDrag(e, itemData, self));
              }).animateIn("list-item");
              if (i > listView.children.length) {
                listView.append(newItemView);
              } else {
                const referenceNode = listView.children[i];
                listView.insertBefore(newItemView, referenceNode);
              }
            });
            Array.from(listView.children).forEach((itemView) => {
              const matchingDataEntry = listData.get(itemView.id);
              if (matchingDataEntry != void 0)
                return;
              removeItemView(itemView);
            });
          }).updateBinding(configuration.listData);
        });
      }
      exports.List = List;
      function ListItem(...children) {
        return Div(...children).addToClass("list-items").setAccessibilityRole("listitem").animateIn("list-item");
      }
      exports.ListItem = ListItem;
      function Meter(value, options = {}) {
        var _a, _b, _c, _d;
        const min = (_a = options.min) !== null && _a !== void 0 ? _a : 0;
        const max = (_b = options.max) !== null && _b !== void 0 ? _b : 1;
        const low = (_c = options.low) !== null && _c !== void 0 ? _c : min;
        const high = (_d = options.high) !== null && _d !== void 0 ? _d : max;
        return Component("meter").setValue(value).setAttr("min", min).setAttr("max", max).setAttr("low", low).setAttr("high", high);
      }
      exports.Meter = Meter;
      function Popover(configuration) {
        const PADDING = ".5rem";
        resetPosition();
        const rectOfToggle = () => configuration.toggle.getBoundingClientRect();
        let rectOfContent = () => configuration.content.getBoundingClientRect();
        let rectOfWindow = () => document.body.getBoundingClientRect();
        function checkIsOK() {
          const isOK = !(rectOfContent().top < rectOfWindow().top || rectOfContent().left < rectOfWindow().left || rectOfContent().right > rectOfWindow().right || rectOfContent().bottom > rectOfWindow().bottom);
          return isOK;
        }
        function resetPosition() {
          configuration.content.cssTop("unset").cssLeft("unset").cssRight("unset").cssBottom("unset").cssMaxHeight("unset").cssMaxWidth("unset");
        }
        function alignToRightFromLeftEdge() {
          configuration.content.cssLeft(`${rectOfToggle().left}px`);
        }
        function alignToRightFromRightEdge() {
          configuration.content.cssLeft(`${rectOfToggle().right}px`);
        }
        function alignToLeftFromLeftEdge() {
          configuration.content.cssLeft(`${rectOfToggle().left - rectOfContent().width}px`);
        }
        function alignToLeftFromRightEdge() {
          configuration.content.cssLeft(`${rectOfToggle().right - rectOfContent().width}px`);
        }
        function tryXAxisFix() {
          alignToRightFromLeftEdge();
          if (checkIsOK() == true)
            return;
          alignToLeftFromRightEdge();
        }
        function alignY() {
          resetPosition();
          configuration.content.cssTop(`${rectOfToggle().bottom}px`);
          if (checkIsOK() == true)
            return;
          tryXAxisFix();
          if (checkIsOK() == true)
            return;
          resetPosition();
          configuration.content.cssTop(`${rectOfToggle().top - rectOfContent().height}px`);
          if (checkIsOK() == true)
            return;
          tryXAxisFix();
        }
        function alignX() {
          resetPosition();
          alignToRightFromRightEdge();
          if (checkIsOK() == true)
            return;
          resetPosition();
          alignToLeftFromLeftEdge();
        }
        function applyFallbackAlignment() {
          resetPosition();
          configuration.content.cssBottom(PADDING).cssMaxHeight(`calc(100% - 2*${PADDING})`).cssMaxWidth(`calc(100% - 2*${PADDING})`).cssLeft(PADDING).cssRight(PADDING);
        }
        function updateContentPosition() {
          if (configuration.isOpen.value == false)
            return;
          const alignmentFunctions = [alignY, alignX, applyFallbackAlignment];
          for (let i = 0; i < alignmentFunctions.length; i++) {
            alignmentFunctions[i]();
            if (checkIsOK() == true)
              return;
          }
        }
        function closePopover() {
          configuration.isOpen.value = false;
        }
        configuration.isOpen.addBinding({
          uuid: new UUID(),
          action: (wasOpened) => {
            if (wasOpened) {
              document.body.addEventListener("click", closePopover);
              updateContentPosition();
            } else {
              document.body.removeEventListener("click", closePopover);
            }
          }
        });
        return Div(configuration.toggle, configuration.content.addToClass("popover-contents").setAttr("aria-modal", "true").setAccessibilityLabel(configuration.accessibilityLabel).allowKeyboardFocus().focusOnChange(configuration.isOpen, true)).listen("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
        }).addToClass("popover-containers").toggleAttr("open", configuration.isOpen);
      }
      exports.Popover = Popover;
      var ProgressBarStates;
      (function(ProgressBarStates2) {
        ProgressBarStates2[ProgressBarStates2["Normal"] = 0] = "Normal";
        ProgressBarStates2[ProgressBarStates2["Indeterminate"] = 1] = "Indeterminate";
      })(ProgressBarStates || (exports.ProgressBarStates = ProgressBarStates = {}));
      function ProgressBar(value, state) {
        return Component("progress").setValue(value).access((self) => {
          if (state)
            self.createBinding(state, (state2) => {
              const isIndeterminate = state2 == ProgressBarStates.Indeterminate;
              if (isIndeterminate)
                self.rmAttr("value");
              else
                self.value = value.value;
            }).updateBinding(state);
        });
      }
      exports.ProgressBar = ProgressBar;
      function RadioButton(configuration) {
        return Text2(configuration.label, "label").addItemsBefore(Input2({
          type: "radio",
          fallbackValue: void 0,
          value: void 0,
          placeholder: void 0,
          toValueType: (inputValue) => inputValue,
          valueToString: (inputValue) => inputValue
        }).access((self) => self.createSelectionBinding(new CheckSBModel({
          selection: configuration.selectionCfg,
          component: self,
          ownValue: configuration.value,
          isExclusive: true
        }))).setAttr("name", configuration.selectionCfg.uuid));
      }
      exports.RadioButton = RadioButton;
      function ScrollArea(...children) {
        return Div(...children).addToClass("scroll-areas");
      }
      exports.ScrollArea = ScrollArea;
      function Select(value, options) {
        const optionViews = new ComputedState({
          statesToBind: [options],
          initialValue: [],
          compute: (self) => {
            self.value = options.value.map((option) => Text2(option.label, "option").setValue(option.value));
          }
        });
        return Component("select").setItems(optionViews).addToClass("selects").access((self) => self.createTightBinding(new ValueTBModel({
          component: self,
          data: value,
          fallbackValue: ""
        })));
      }
      exports.Select = Select;
      function SelectingListItem(configuration, ...children) {
        return ListItem(...children).setAccessibilityRole("option").access((self) => {
          var _a;
          const bindingModel = new ValueSBModel({
            component: self,
            selection: configuration.selection,
            getView: () => {
              return self.getAttribute("aria-selected") == "true";
            },
            setView: (isSelected) => {
              self.setAttr("aria-selected", isSelected);
            },
            isExclusive: (_a = configuration.isExclusive) !== null && _a !== void 0 ? _a : true,
            ownValue: configuration.ownValue,
            changeEventName: "click"
          });
          self.createSelectionBinding(bindingModel);
          self.listen("click", () => {
            const isChecked = configuration.isExclusive == true ? !bindingModel.getView() : true;
            bindingModel.setData(isChecked);
          });
        });
      }
      exports.SelectingListItem = SelectingListItem;
      function Separator() {
        return Component("hr").addToClass("separators");
      }
      exports.Separator = Separator;
      function Sheet(configuration, ...children) {
        return Container("dialog", Div(...children).addToClass("sheet-contents").listen("click", (e) => e.stopPropagation()).setAccessibilityLabel(configuration.accessibilityLabel).allowKeyboardFocus().focusOnChange(configuration.isOpen, true)).addToClass("sheet-containers").toggleAttr("open", configuration.isOpen).listen("click", () => {
          configuration.isOpen.value = false;
        });
      }
      exports.Sheet = Sheet;
      function Slider(value, options = {}) {
        return Input2({
          type: "range",
          fallbackValue: 0,
          value,
          placeholder: void 0,
          toValueType: (inputValue) => parseInt(inputValue),
          valueToString: (inputValue) => inputValue.toString()
        }).access((self) => {
          var _a, _b, _c;
          return self.setAttr("min", (_a = options.min) !== null && _a !== void 0 ? _a : 0).setAttr("max", (_b = options.max) !== null && _b !== void 0 ? _b : 100).setAttr("step", (_c = options.step) !== null && _c !== void 0 ? _c : 1);
        });
      }
      exports.Slider = Slider;
      function Spacer() {
        return Div().addToClass("spacers");
      }
      exports.Spacer = Spacer;
      function Submit2(text) {
        return Component("input").addToClass("submits").setAttr("value", text).setAttr("type", "submit");
      }
      exports.Submit = Submit2;
      function Text2(value, tagName = "span") {
        return Component(tagName).setText(value);
      }
      exports.Text = Text2;
      function Textarea(value, placeholder) {
        return Component("textarea").addToClass("textareas").access((self) => self.createTightBinding(new ValueTBModel({
          component: self,
          data: value,
          fallbackValue: ""
        })).setAttr("placeholder", placeholder));
      }
      exports.Textarea = Textarea;
      function VisualGroup2(...children) {
        return VStack2(...children).addToClass("visual-groups");
      }
      exports.VisualGroup = VisualGroup2;
      function VStack2(...children) {
        return Div(...children).addToClass("stacks-vertical");
      }
      exports.VStack = VStack2;
      var SceneTypes;
      (function(SceneTypes2) {
        SceneTypes2["Column"] = "scenes-column";
        SceneTypes2["Content"] = "scenes-content";
        SceneTypes2["Full"] = "scenes-full";
        SceneTypes2["Navigation"] = "scenes-navigation";
      })(SceneTypes || (exports.SceneTypes = SceneTypes = {}));
      var GenericScene = class {
        constructor(depth, stage, data) {
          this.linkSelection = new DataSelection();
          this.type = SceneTypes.Full;
          this.close = () => {
            this.stage.goBackTo(this.depth - 1);
          };
          this.depth = depth;
          this.stage = stage;
          this.view = this.generateView(data);
          this.stage.depth.addBinding({
            uuid: new UUID(),
            action: (stageDepth) => {
              if (stageDepth > depth + 1)
                return;
              this.linkSelection.selectedItems.value = [];
            }
          });
        }
        generateView(data) {
          var _a;
          const main2 = Div(this.draw(data)).addToClass("scenes").addToClass(this.type).animateIn("scene").setAccessibilityLabel((_a = this.accessibilityLabel) !== null && _a !== void 0 ? _a : "").allowKeyboardFocus().focusOnCreate();
          if (this.accessibilityLabel == void 0)
            console.warn("Scene does not have an accessibilityLabel.", this);
          return main2;
        }
        draw(data) {
          return Text2("Hello, world!");
        }
        setup(data) {
        }
        get isOpen() {
          if (!this.view)
            return false;
          return this.view.parentNode != null;
        }
      };
      exports.GenericScene = GenericScene;
      function Stage(initialScene, initialSceneData) {
        return Div().addToClass("stages").access((self) => {
          let persistingChildren = [];
          function getPersistingChildren() {
            persistingChildren = Array.from(self.children).filter((child) => !child.classList.contains("animating-out"));
            return persistingChildren;
          }
          function getDepth() {
            return getPersistingChildren().length;
          }
          function updateDepth() {
            const depth = getDepth();
            self.depth.value = depth;
          }
          self.depth = new State2(0);
          self.addScene = (Scene, data, depth = getDepth()) => {
            const scene = new Scene(depth, self, data);
            self.addItems(scene.view);
            scene.setup(data);
            return self;
          };
          self.replaceScene = (Scene, data, depth) => __awaiter(this, void 0, void 0, function* () {
            yield self.goBackTo(depth - 1, false);
            self.addScene(Scene, data, depth);
            updateDepth();
            return self;
          });
          self.goBackTo = (depth, shouldUpdate = true) => __awaiter(this, void 0, void 0, function* () {
            while (getPersistingChildren().length > depth + 1) {
              const child = persistingChildren[persistingChildren.length - 1];
              const isColumnScene = child.classList.contains(SceneTypes.Column);
              if (child.animateOut && !isColumnScene)
                yield child.animateOut();
              else
                child.remove();
            }
            if (shouldUpdate)
              updateDepth();
            return self;
          });
          self.addScene(initialScene, initialSceneData);
        });
      }
      exports.Stage = Stage;
      function NavigationLink(configuration, ...children) {
        const stage = configuration.parentScene.stage;
        const depth = configuration.parentScene.depth;
        const uuid = new UUID();
        function openScene() {
          stage.replaceScene(configuration.destination, configuration.data, depth + 1);
        }
        if (configuration.initiallySelected == true) {
          configuration.parentScene.linkSelection.selectedItems.value = [uuid];
        }
        const isSelected = new ComputedState({
          statesToBind: [configuration.parentScene.linkSelection.selectedItems],
          initialValue: false,
          compute(self) {
            self.value = configuration.parentScene.linkSelection.selectedItems.value.indexOf(uuid) > -1;
          }
        });
        return SelectingListItem({
          ownValue: uuid,
          selection: configuration.parentScene.linkSelection
        }, HStack(...children), Spacer(), Icon("chevron_right").cssOpacity(0.6)).addToClass("navigation-links").setAccessibilityRole("link").setAccessibilityLabel(configuration.accessibilityLabel).setAccessibilityCurrentState("page", isSelected).allowKeyboardFocus().listen("click", openScene).access((self) => self.registerKeyboardShortcuts({
          key: " ",
          action: () => self.click()
        }, {
          key: "Enter",
          action: () => self.click()
        }, {
          key: "ArrowRight",
          action: () => self.click()
        }));
      }
      exports.NavigationLink = NavigationLink;
      function TabView(...configuration) {
        const visibleTabIndex = new State2(0);
        return VStack2(HStack(ButtonGroup(...configuration.map((tab, i) => Button({
          iconName: tab.iconName,
          text: tab.text,
          accessibilityLabel: tab.text,
          action: () => visibleTabIndex.value = i
        }).access((self) => {
          const isPressed = new ComputedState({
            statesToBind: [visibleTabIndex],
            initialValue: false,
            compute(self2) {
              self2.value = visibleTabIndex.value == i;
            }
          });
          return self.setAccessibilityRole("link").setAccessibilityCurrentState("page", isPressed).addToClassConditionally("buttons-pressed", isPressed);
        }))).setAccessibilityRole("navigation")).cssFlex(0), Div(...configuration.map((tab, i) => tab.view.setVisibleIfMatch(i, visibleTabIndex).setAccessibilityLabel(tab.text).allowKeyboardFocus().focusOnChange(visibleTabIndex, i)))).addToClass("tab-views");
      }
      exports.TabView = TabView;
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    main: () => main
  });
  var import_base = __toESM(require_base2());
  function main() {
    const username = new import_base.State("");
    const password = new import_base.State("");
    (0, import_base.buildInterface)(
      (0, import_base.VStack)(
        (0, import_base.Form)(
          {
            action: "/login",
            method: "POST"
          },
          (0, import_base.GroupContainer)(
            "Log in",
            (0, import_base.VisualGroup)(
              (0, import_base.Input)(
                new import_base.TextInputCfg(username, "Username")
              ).setAccessibilityLabel("username"),
              (0, import_base.Input)(new import_base.TextInputCfg(password, "Password")).setAccessibilityLabel("password").setAttr("type", "password"),
              (0, import_base.Submit)("Log in")
            )
          )
        ).cssWidth("100%").cssMaxWidth("16em")
      ).useDefaultPadding().useDefaultSpacing().cssAlignItems("center")
    );
  }
  return __toCommonJS(src_exports);
})();
