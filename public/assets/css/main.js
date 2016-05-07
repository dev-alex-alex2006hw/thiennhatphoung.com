import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "13.5pt",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontFamily": "'Vietnamese', sans-serif",
        "lineHeight": 1.85,
        "WebkitTextSizeAdjust": "none",
        "background": "#D4D9DD url(\"images/bg03.jpg\")",
        "color": "#474f51",
        "fontWeight": 300
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "textDecoration": "underline"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "center": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "none"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "none"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "*": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "container": {
        "marginLeft": "auto",
        "marginRight": "auto",
        "width": 960
    },
    "container\\31 25\\25": {
        "width": "100%",
        "maxWidth": 1200,
        "minWidth": 960
    },
    "container\\37 5\\25": {
        "width": 720
    },
    "container\\35 0\\25": {
        "width": 480
    },
    "container\\32 5\\25": {
        "width": 240
    },
    "row": {
        "borderBottom": "solid 1px transparent",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -40
    },
    "row > *": {
        "float": "left",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "row:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "row:before": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "rowuniform > * > :first-child": {
        "marginTop": 0
    },
    "rowuniform > * > :last-child": {
        "marginBottom": 0
    },
    "row\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "row\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rowuniform\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform > *": {
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 40
    },
    "rowuniform": {
        "marginTop": -40,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -40
    },
    "row\\32 00\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 80
    },
    "row\\32 00\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -80
    },
    "rowuniform\\32 00\\25 > *": {
        "paddingTop": 80,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 80
    },
    "rowuniform\\32 00\\25": {
        "marginTop": -80,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -80
    },
    "row\\31 50\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 60
    },
    "row\\31 50\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -60
    },
    "rowuniform\\31 50\\25 > *": {
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 60
    },
    "rowuniform\\31 50\\25": {
        "marginTop": -60,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -60
    },
    "row\\35 0\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "row\\35 0\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -20
    },
    "rowuniform\\35 0\\25 > *": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "rowuniform\\35 0\\25": {
        "marginTop": -20,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -20
    },
    "row\\32 5\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "row\\32 5\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -10
    },
    "rowuniform\\32 5\\25 > *": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "rowuniform\\32 5\\25": {
        "marginTop": -10,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -10
    },
    "\\31 2u": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u\\24": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u\\24": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u\\24": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u\\24": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u\\24": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u\\24": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u\\24": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u\\24": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u\\24": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u\\24": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u\\24": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24 + *": {
        "clear": "left"
    },
    "\\31 1u\\24 + *": {
        "clear": "left"
    },
    "\\31 0u\\24 + *": {
        "clear": "left"
    },
    "\\39 u\\24 + *": {
        "clear": "left"
    },
    "\\38 u\\24 + *": {
        "clear": "left"
    },
    "\\37 u\\24 + *": {
        "clear": "left"
    },
    "\\36 u\\24 + *": {
        "clear": "left"
    },
    "\\35 u\\24 + *": {
        "clear": "left"
    },
    "\\34 u\\24 + *": {
        "clear": "left"
    },
    "\\33 u\\24 + *": {
        "clear": "left"
    },
    "\\32 u\\24 + *": {
        "clear": "left"
    },
    "\\31 u\\24 + *": {
        "clear": "left"
    },
    "\\-11u": {
        "marginLeft": "91.66667%"
    },
    "\\-10u": {
        "marginLeft": "83.33333%"
    },
    "\\-9u": {
        "marginLeft": "75%"
    },
    "\\-8u": {
        "marginLeft": "66.66667%"
    },
    "\\-7u": {
        "marginLeft": "58.33333%"
    },
    "\\-6u": {
        "marginLeft": "50%"
    },
    "\\-5u": {
        "marginLeft": "41.66667%"
    },
    "\\-4u": {
        "marginLeft": "33.33333%"
    },
    "\\-3u": {
        "marginLeft": "25%"
    },
    "\\-2u": {
        "marginLeft": "16.66667%"
    },
    "\\-1u": {
        "marginLeft": "8.33333%"
    },
    "input": {
        "color": "#474f51",
        "fontSize": "13.5pt",
        "fontFamily": "'Vietnamese', sans-serif",
        "lineHeight": 1.85,
        "fontWeight": 300
    },
    "textarea": {
        "color": "#474f51",
        "fontSize": "13.5pt",
        "fontFamily": "'Vietnamese', sans-serif",
        "lineHeight": 1.85,
        "fontWeight": 300
    },
    "select": {
        "color": "#474f51",
        "fontSize": "13.5pt",
        "fontFamily": "'Vietnamese', sans-serif",
        "lineHeight": 1.85,
        "fontWeight": 300
    },
    "a:hover": {
        "textDecoration": "none"
    },
    "section > :last-child": {
        "marginBottom": "0 !important"
    },
    "last-child": {
        "marginBottom": "0 !important"
    },
    "link-list li": {
        "paddingTop": 0.2,
        "paddingRight": 0,
        "paddingBottom": 0.2,
        "paddingLeft": 0
    },
    "link-list li:first-child": {
        "paddingTop": "0 !important",
        "borderTop": "0 !important"
    },
    "link-list li:last-child": {
        "paddingBottom": "0 !important",
        "borderBottom": "0 !important"
    },
    "quote-list li": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "quote-list li:first-child": {
        "paddingTop": "0 !important",
        "borderTop": "0 !important"
    },
    "quote-list li:last-child": {
        "paddingBottom": "0 !important",
        "borderBottom": "0 !important"
    },
    "quote-list li img": {
        "float": "left"
    },
    "quote-list li p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 90,
        "fontSize": 1.2,
        "fontStyle": "italic"
    },
    "quote-list li span": {
        "display": "block",
        "marginLeft": 90,
        "fontSize": 0.9,
        "fontWeight": 400
    },
    "check-list li": {
        "paddingTop": 0.7,
        "paddingRight": 0,
        "paddingBottom": 0.7,
        "paddingLeft": 45,
        "fontSize": 1.2,
        "background": "url(\"images/icon-checkmark.png\") 0px 1.05em no-repeat"
    },
    "check-list li:first-child": {
        "paddingTop": "0 !important",
        "borderTop": "0 !important",
        "backgroundPosition": "0 0.3em"
    },
    "check-list li:last-child": {
        "paddingBottom": "0 !important",
        "borderBottom": "0 !important"
    },
    "feature-image": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "outline": 0
    },
    "feature-image img": {
        "display": "block",
        "width": "100%"
    },
    "bordered-feature-image": {
        "display": "block",
        "background": "#fff url(\"images/bg04.png\")",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "boxShadow": "3px 3px 3px 1px rgba(0, 0, 0, 0.15)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.5,
        "marginLeft": 0,
        "outline": 0
    },
    "bordered-feature-image img": {
        "display": "block",
        "width": "100%"
    },
    "button-big": {
        "backgroundImage": "linear-gradient(top, #ed391b, #ce1a00)",
        "display": "inline-block",
        "backgroundColor": "#ed391b",
        "color": "#fff",
        "textDecoration": "none",
        "fontSize": 1.75,
        "fontWeight": 300,
        "paddingTop": 15,
        "paddingRight": 45,
        "paddingBottom": 15,
        "paddingLeft": 45,
        "outline": 0,
        "borderRadius": 10,
        "boxShadow": "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.75), inset 0px 2px 0px 0px rgba(255, 192, 192, 0.5), inset 0px 0px 0px 2px rgba(255, 96, 96, 0.85), 3px 3px 3px 1px rgba(0, 0, 0, 0.15)",
        "textShadow": "-1px -1px 1px rgba(0, 0, 0, 0.5)"
    },
    "button-big:hover": {
        "backgroundImage": "linear-gradient(top, #fd492b, #de2a10)",
        "backgroundColor": "#fd492b",
        "boxShadow": "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.75), inset 0px 2px 0px 0px rgba(255, 192, 192, 0.5), inset 0px 0px 0px 2px rgba(255, 96, 96, 0.85), 3px 3px 3px 1px rgba(0, 0, 0, 0.15)"
    },
    "button-big:active": {
        "backgroundImage": "linear-gradient(top, #ce1a00, #ed391b)",
        "backgroundColor": "#ce1a00",
        "boxShadow": "inset 0px 0px 0px 1px rgba(0, 0, 0, 0.75), inset 0px 2px 0px 0px rgba(255, 192, 192, 0.5), inset 0px 0px 0px 2px rgba(255, 96, 96, 0.85), 3px 3px 3px 1px rgba(0, 0, 0, 0.15)"
    },
    "content quote-list li": {
        "borderBottom": "solid 1px #e2e6e8"
    },
    "content link-list li": {
        "borderBottom": "solid 1px #e2e6e8"
    },
    "content check-list li": {
        "borderBottom": "solid 1px #e2e6e8"
    },
    "footer quote-list li": {
        "borderTop": "solid 1px #e0e4e6",
        "borderBottom": "solid 1px #b5bec3"
    },
    "footer link-list li": {
        "borderTop": "solid 1px #e0e4e6",
        "borderBottom": "solid 1px #b5bec3"
    },
    "footer check-list li": {
        "borderTop": "solid 1px #e0e4e6",
        "borderBottom": "solid 1px #b5bec3"
    },
    "navPanel": {
        "display": "none"
    },
    "titleBar": {
        "display": "none"
    }
});