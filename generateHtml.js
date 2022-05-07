const fs = require('fs');

const open = (tagName, attributes = '') => {
  return "<" + tagName + " " + attributes + ">"
};

const close = (tagName) => "</" + tagName + ">";
const attribute = (key, value) => key + "='" + value + "'";
const tag = (tagName, content, attributes = '') => {
  return open(tagName, attributes) + content + close(tagName)
};

const title = (content, attributes) => tag("title", content, attributes);
const div = (content, attributes) => tag("div", content, attributes);
const head = (content) => tag("head", content);
const body = (content, attributes) => tag("body", content, attributes);
const link = (rel, href) => "<link rel='" + rel + "' href='" + href + "'/>";

const html = (headContent, bodyContent) => {
  return tag("html", head(headContent) + body(bodyContent))
};

const generateHtml = function () {
  const headContent = title("Sample page") + link("stylesheet", "style.css");
  return html(headContent, div("Html generation", attribute("class", "block")));
};

const writeToFile = (filename, content) => {
  try {
    fs.writeFileSync(filename, content);
    console.log("Generated successfully");
  } catch (error) {
    console.log("Generation failed");
  }
};

writeToFile("index.html", generateHtml());
