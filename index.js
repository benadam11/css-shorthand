import { shorthands } from "./shorthands";

const whitelist = [
  "padding",
  "margin",
  "borderColor",
  "borderStyle",
  "borderWidth"
];

const cammelcase = /([A-Z][a-z0-9]+)+/;

export function expandShorthand(key, val) {
  const values = val.split(" ");
  const keys = Object.keys(shorthands[key]);
  const keyValues = Object.values(shorthands[key]);

  if (whitelist.includes(key)) {
    const [prefix, suffix] = key.split(cammelcase);
    return {
      [`${prefix}Top${suffix || ""}`]: values[0],
      [`${prefix}Right${suffix || ""}`]: values[1] || values[0],
      [`${prefix}Bottom${suffix || ""}`]: values[2] || values[0],
      [`${prefix}Left${suffix || ""}`]: values[3] || values[1] || values[0]
    };
  }

  return keys.reduce((obj, key, i) => {
    obj[key] = values[i] || keyValues[i];
    return obj;
  }, {});
}
