import StyleDictionary from "style-dictionary";
import { formatLessVariables } from "./scripts/less-format.mjs";

StyleDictionary.registerFormat({
  name: "ttcom/less-variables",
  format: ({ dictionary }) => formatLessVariables(dictionary.allTokens)
});

export default {
  source: ["src/tokens/**/*.json"],
  platforms: {
    less: {
      transformGroup: "less",
      buildPath: "dist/less/",
      files: [
        {
          destination: "tokens.less",
          format: "ttcom/less-variables"
        }
      ]
    }
  }
};
