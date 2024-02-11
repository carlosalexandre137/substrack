import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
	--color-purple-dark: #451952;
  --color-black-dark: #181616;
  --color-brown-dark: #662549;
  --color-brown-medium: #66254c;
	--color-red-dark: #f87171;

  --color-white-light: #FFFBF5;
  --color-pink-light: #E2CFCF;
  --color-purple-light: #74647C;
  --color-green-light: #A4DB5E;

  --font-default: 'Roboto', sans-serif;
  --font-title: 'Montserrat', sans-serif;

	--theme-background-primary: #2563eb;
	--theme-color-primary: #fff;
	--theme-background-cyan: #0891b2;
	--theme-color-cyan: #fff;
}
.icon-xl {
	width: 16px;
	height: 16px;
}
.icon-sm {
	width: 24px;
	height: 24px;
}
.icon-md {
	width: 30px;
	height: 30px;
}
* {
	box-sizing: border-box;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: var(--font-default);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyles;
