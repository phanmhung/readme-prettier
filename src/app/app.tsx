import { Icon } from "@iconify/react";
import { useEffect, useState } from "preact/hooks";
import { PreviewUI } from "widgets/preview-ui";
import { Settings } from "widgets/settings";
import { APP_NAME } from "shared/constants";
import { useLocalStorage } from "shared/hooks";
import { useAppStore } from "entities/store/app.store";
import { disableCache } from "@iconify/react";
import { ToolkitSelector } from "widgets/toolkit-selector";
import { StickyGenerateButton } from "widgets/sticky-generate-button";

disableCache("all");

export function App() {
  const [activeToolkit, setActiveToolkit] = useState<boolean>(false);
  const [activeConfig, setActiveConfig] = useState<boolean>(false);
  const { sections } = useAppStore();

  useEffect(() => {
    useLocalStorage.set(APP_NAME, sections);
  }, [sections]);

  return (
    <main class="h-screen py-6 px-4">
      <div class="flex max-w-screen-2xl mx-auto gap-4 h-[calc(100%_-_25px)] sm:h-[calc(100%_-_10px)]">
        {activeToolkit ? null : (
          <button
            class="fixed -left-1 top-10 border border-white/20 rounded p-1 bg-primary lg:hidden"
            onClick={() => {
              setActiveToolkit(true);
              setActiveConfig(false);
            }}
          >
            <Icon icon="icon-park-solid:right-one" height={20} />
          </button>
        )}
        {activeConfig ? null : (
          <button
            class="fixed -right-1 top-10 border border-white/20 rounded p-1 bg-primary lg:hidden"
            onClick={() => {
              setActiveConfig(true);
              setActiveToolkit(false);
            }}
          >
            <Icon icon="icon-park-solid:left-one" height={20} />
          </button>
        )}
        <ToolkitSelector
          active={activeToolkit}
          onClose={() => setActiveToolkit(false)}
        />
        <PreviewUI />
        <Settings
          active={activeConfig}
          onClose={() => setActiveConfig(false)}
        />
      </div>
      <StickyGenerateButton />
      <p class="text-red-500 py-2 px-4 text-center text-xs">
        Some features may not work properly, turn off your{" "}
        <strong>AdBlocks</strong> and try again!
      </p>
    </main>
  );
}
