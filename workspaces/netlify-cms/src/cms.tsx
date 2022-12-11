import CMS from "netlify-cms-app";
// @ts-expect-error
import { markdownToHtml } from "netlify-cms-widget-markdown/dist/esm/serializers";

// @ts-expect-error
window.CMS = CMS;

const css = (strings: TemplateStringsArray, ...values: any[]) => {
  const style = document.createElement("style");
  style.innerHTML = String.raw({ raw: strings }, ...values);
  return style;
};

const mainMenuStyles = css`
  /* custom css for main menu settings page */
`;

function onLocationChange() {
  if (window.location.hash === "#/collections/settings/entries/main-menu") {
    document.body.appendChild(mainMenuStyles);
  } else {
    if (document.body === mainMenuStyles.parentElement) {
      document.body.removeChild(mainMenuStyles);
    }
  }
}

window.addEventListener("hashchange", onLocationChange);
onLocationChange();

CMS.registerEditorComponent({
  // Internal id of the component
  id: "collapsible-note",
  // Visible label
  label: "Collapsible Note",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: "summary",
      label: "Summary",
      widget: "string",
    },
    {
      name: "details",
      label: "Details",
      widget: "markdown",
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern: /^<details>$\s*?<summary>(.*?)<\/summary>\n\n(.*?)\n^<\/details>$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    return {
      summary: match[1],
      details: match[2],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (data) {
    return `
<details>
<summary>${data.summary}</summary>

${data.details}

</details>
  `;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (data) {
    return `
<details>
<summary>${data.summary}</summary>

${markdownToHtml(data.details)}

</details>
  `;
  },
});
CMS.registerEditorComponent({
  id: "two-columns",
  label: "Two Columns",
  fields: [
    {
      name: "left",
      label: "Left Column",
      widget: "markdown",
    },
    {
      name: "right",
      label: "Right Column",
      widget: "markdown",
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern:
    /^<Grid>$\n<Grid.Column>\n(.*?)\n<\/Grid.Column>\n<Grid.Column>\n(.*?)\n<\/Grid.Column>\n^<\/Grid>$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    return {
      left: match[1],
      right: match[2],
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (data) {
    return `<Grid>
<Grid.Column>
${data.left}
</Grid.Column>
<Grid.Column>
${data.right}
</Grid.Column>
</Grid>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (data) {
    return `
<div style="display: flex; gap: 15px">
<div style="width: 100%">${markdownToHtml(data.left)}</div>
<div style="width: 100%">${markdownToHtml(data.right)}</div>
</div>
  `;
  },
});

function parse(text: string) {
  try {
    return JSON.parse(text);
  } catch (err) {}
}

CMS.registerEditorComponent({
  id: "custom-card",
  label: "Custom Card",
  fields: [
    {
      name: "title",
      label: "Title",
      widget: "string",
    },
    {
      name: "desc",
      label: "Description",
      widget: "string",
    },
    {
      name: "price",
      label: "Price",
      widget: "number",
    },
  ],
  // Regex pattern used to search for instances of this block in the markdown document.
  // Patterns are run in a multline environment (against the entire markdown document),
  // and so generally should make use of the multiline flag (`m`). If you need to capture
  // newlines in your capturing groups, you can either use something like
  // `([\S\s]*)`, or you can additionally enable the "dot all" flag (`s`),
  // which will cause `(.*)` to match newlines as well.
  //
  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.
  // `(.*?)` vs `(.*)`), especially if matching against newline characters.
  pattern:
    /^<CustomCard$\n\s*?title=(".*?")\n\s*?desc=(".*?")\n\s*?price=\{(.*?)\}\n^\/>$/ms,
  // Given a RegExp Match object
  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),
  // return an object with one property for each field defined in `fields`.
  //
  // This is used to populate the custom widget in the markdown editor in the CMS.
  fromBlock: function (match) {
    if (match == null) {
      return null;
    }
    return {
      title: parse(match[1]) ?? "",
      desc: parse(match[2]) ?? "",
      price: parse(match[3]) ?? 0,
    };
  },
  // Given an object with one property for each field defined in `fields`,
  // return the string you wish to be inserted into your markdown.
  //
  // This is used to serialize the data from the custom widget to the
  // markdown document
  toBlock: function (data) {
    return `<CustomCard
  title=${JSON.stringify(data.title ?? "")}
  desc=${JSON.stringify(data.desc ?? "")}
  price={${JSON.stringify(data.price ?? 0)}}
/>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (data) {
    return `
<div style="">
<h3 style=""><b>title:</b> ${data.title}</h3>
<p style=""><b>desc:</b> ${data.desc}</p>
<p style=""><b>price:</b> ${data.price}</p>
</div>
`;
  },
});

import config from './config.yml'

CMS.init({
  config
})
