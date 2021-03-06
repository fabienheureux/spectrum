// @flow
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    background-color: #ffffff;
    color: #16171a;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body {
    display: flex;
    box-sizing: border-box;
    flex: auto;
    align-self: stretch;
    max-width: 100%;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  ::-moz-selection {
    /* Code for Firefox */
    background: #3818e5;
    color: #ffffff;
  }

  ::selection {
    background: #3818e5;
    color: #ffffff;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #a3afbf;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a3afbf;
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a3afbf;
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a3afbf;
  }

  #root {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .markdown {
    font-size: 16px;
    line-height: 24px;
    color: #16171a;
  }

  .markdown p {
    color: inherit;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    display: block;
  }

  .markdown p + p {
    margin-top: 16px;
  }

  .markdown > *:first-of-type {
    margin-top: 16px;
  }

  .markdown img {
    margin-top: 16px;
    max-width: 100%;
    display: inline;
    border-radius: 4px;
    transition: box-shadow 0.2s;
    display: block;
    margin: 12px 0;
  }

  .markdown img:hover {
    cursor: pointer;
    transition: box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .markdown em {
    color: inherit;
    font-size: inherit;
    font-style: italic;
  }

  .markdown strong {
    color: inherit;
    font-size: inherit;
    font-weight: 700;
  }

  .markdown ul,
  .markdown ol {
    color: inherit;
    margin: 8px 0;
    margin-left: 16px;
  }

  .markdown li {
    color: inherit;
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 400;
  }

  .markdown blockquote {
    color: #828c99;
    border-left: 4px solid #7b16ff;
    padding: 4px 8px 4px 16px;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.4;
    margin: 16px 0;
  }

  .markdown blockquote p {
    margin-top: 0;
  }

  .markdown a {
    color: #3818e5;
    font-weight: 500;
    text-decoration: none;
    font-size: inherit;
    word-wrap: break-word;
    line-height: inherit;
  }

  .markdown a:hover {
    text-decoration: underline;
  }

  .markdown a:visited {
    opacity: 0.6;
    transition: opacity 0.2s ease-in;
  }

  .markdown code {
    font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    background-color: #f5f8fc;
    padding: 2px 4px;
    display: inline;
    width: 100%;
    border: 1px solid #dfe7ef;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .markdown pre {
    margin: 16px 0;
    display: block;
  }

  .markdown pre code {
    padding: 8px 16px;
    display: block;
    white-space: pre-wrap;
    position: relative;
  }

  .markdown div[data-block='true'] {
    margin-top: 12px;
  }

  .markdown div[data-block='true']:first-of-type {
    margin-top: 0;
  }

  .markdown span[data-text='true'] {
    line-height: 1.4;
  }

  .markdown code span {
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .markdown iframe {
    margin: 1rem 0;
  }

  .markdown hr {
    width: 100%;
    height: 1px;
    background: #dfe7ef;
    display: block;
    margin: 32px 0;
  }

  .markdown h1 {
    font-size: 24px;
    line-height: 40px;
    border-bottom: 1px solid #dfe7ef;
    font-weight: 800;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .markdown h2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .markdown h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .markdown h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .markdown h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .markdown h6 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .hljs {
    display: block;
    background: white;
    padding: 0.5em;
    color: #333333;
    overflow-x: auto;
  }

  .hljs-comment,
  .hljs-meta {
    color: #969896;
  }

  .hljs-string,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-strong,
  .hljs-emphasis,
  .hljs-quote {
    color: #df5000;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-type {
    color: #a71d5d;
  }

  .hljs-literal,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-attribute {
    color: #0086b3;
  }

  .hljs-section,
  .hljs-name {
    color: #63a35c;
  }

  .hljs-tag {
    color: #333333;
  }

  .hljs-title,
  .hljs-attr,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #795da3;
  }

  .hljs-addition {
    color: #55a532;
    background-color: #eaffea;
  }

  .hljs-deletion {
    color: #bd2c00;
    background-color: #ffecec;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .StripeElement {
    background-color: white;
    height: 40px;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #DFE7EF;
    -webkit-transition: border 150ms ease;
    transition: border 150ms ease;
  }

  .StripeElement--focus {
    border: 1px solid #7B16FF;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
`;

// NOTE(@mxstbr): This is necessary to make sure the placeholder is aligned
// and stuff like that. We have to import the raw CSS file and inject it with
// styled-components to make sure it works when we SSR.
/* eslint-disable import/first */
/* eslint-disable import/no-webpack-loader-syntax */
// $FlowIssue
import draftGlobalCSS from '!!raw-loader!draft-js/dist/Draft.css';
// $FlowIssue
injectGlobal`${draftGlobalCSS}`;
// $FlowIssue
import prismGlobalCSS from '!!raw-loader!./components/rich-text-editor/prism-theme.css';
// $FlowIssue
injectGlobal`${prismGlobalCSS}`;
