/**
 *
 * @param {string} name
 */
export const nameToUrl = (name) => name.replaceAll(" ", "_");

/**
 *
 * @param {string} name
 */
export const urlToName = (name) => name.replaceAll("_", " ");
