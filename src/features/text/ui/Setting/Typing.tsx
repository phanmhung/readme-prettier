import { useAppStore } from "entities/store/app.store";
import { hexToOpacity } from "shared/utils";
import CustomColorPicker from "shared/ui/CustomColorPicker";
import CustomInput from "shared/ui/CustomInput";
import CustomInputNumber from "shared/ui/CustomInputNumber";
import CustomSwitch from "shared/ui/CustomSwitch";
import { ITextSetting } from "../../default";

const Typing = (props: ITextSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomInput
        value={props.typing.font}
        label="Font"
        capitalize
        subtitle={
          <>
            Name from{" "}
            <a
              class="text-emerald-500"
              target="blank"
              href="https://fonts.google.com"
              rel="noopener noreferer"
            >
              Google Fonts
            </a>
          </>
        }
        onChange={(font) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              font,
            },
          })
        }
      />
      <CustomColorPicker
        className="my-4"
        value={props.typing.color}
        initOpacity={hexToOpacity(props.typing.color.slice(-2))}
        label="Color"
        onChange={(color) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              color,
            },
          })
        }
      />
      <CustomColorPicker
        value={props.typing.background}
        label="Background"
        initOpacity={hexToOpacity(props.typing.background.slice(-2))}
        onChange={(background) =>
          editSection({
            ...props,
            typing: {
              ...props.typing,
              background,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-x-5">
        <CustomSwitch
          label="Repeat"
          isActive={props.typing.repeat}
          onChange={(repeat) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                repeat,
              },
            })
          }
        />
        <CustomSwitch
          label="Multiline"
          isActive={props.typing.multiline}
          onChange={(multiline) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                multiline,
              },
            })
          }
        />
      </div>
      <div class="grid grid-cols-2 gap-x-5">
        <CustomInputNumber
          label="Font size"
          value={props.typing.fontSize}
          onChange={(fontSize) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                fontSize,
              },
            })
          }
        />
        <CustomInputNumber
          label="Duration"
          min={1}
          value={props.typing.duration}
          onChange={(duration) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                duration,
              },
            })
          }
        />
        <CustomInputNumber
          label="Wait"
          value={props.typing.pause}
          onChange={(pause) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                pause,
              },
            })
          }
        />
        <CustomInputNumber
          label="Width"
          value={props.typing.width}
          onChange={(width) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                width,
              },
            })
          }
        />
        <CustomInputNumber
          label="Height"
          value={props.typing.height}
          onChange={(height) =>
            editSection({
              ...props,
              typing: {
                ...props.typing,
                height,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Typing;
