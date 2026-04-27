import { existsSync, watch } from "node:fs";
import { resolve } from "node:path";
import StyleDictionary from "style-dictionary";
import config from "../style-dictionary.config.mjs";

const watchTargets = ["src/tokens", "scripts", "style-dictionary.config.mjs"];

let buildInProgress = false;
let buildQueued = false;
let watcherReady = false;
/** @type {ReturnType<typeof setTimeout> | undefined} */
let debounceTimer;

async function runBuild() {
  if (buildInProgress) {
    buildQueued = true;
    return;
  }

  buildInProgress = true;

  try {
    const styleDictionary = new StyleDictionary(config);
    await styleDictionary.buildAllPlatforms();
  } catch (error) {
    console.error(error);
  } finally {
    buildInProgress = false;

    if (buildQueued) {
      buildQueued = false;
      void runBuild();
    }
  }
}

function scheduleBuild() {
  if (!watcherReady) {
    return;
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    void runBuild();
  }, 100);
}

for (const target of watchTargets) {
  const absoluteTarget = resolve(target);

  if (!existsSync(absoluteTarget)) {
    continue;
  }

  watch(absoluteTarget, { recursive: true }, scheduleBuild);
}

console.log("Watching token sources. Press Ctrl+C to stop.");
void runBuild();
setTimeout(() => {
  watcherReady = true;
}, 500);
