/**
 * @typedef {object} DesignToken
 * @property {string[]} path
 * @property {string | number=} value
 */

/**
 * @param {string[]} path
 */
export function toLessVariableName(path) {
  return `@${path.join("-")}`;
}

/**
 * @param {DesignToken[]} tokens
 */
export function formatLessVariables(tokens) {
  return `${tokens
    .map((token) => `${toLessVariableName(token.path)}: ${token.value};`)
    .join("\n")}\n`;
}
