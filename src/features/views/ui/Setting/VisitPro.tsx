import { useAppStore } from 'entities/store/app.store';
import { getEnumKey } from 'shared/utils';
import { getEnumValue } from 'shared/utils/enums';
import CustomInput from 'shared/ui/CustomInput';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IViewsSetting } from '../../default';
import { EVisitProIcon, EVisitProTheme } from '../../views.enum';

const VisitPro = (props: IViewsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Theme"
        options={Object.keys(EVisitProTheme).filter((k) => isNaN(+k))}
        value={
          getEnumKey(
            EVisitProTheme,
            props.visitProCounter.color
          )?.toLowerCase() || ''
        }
        onChange={(color) =>
          editSection({
            ...props,
            visitProCounter: {
              ...props.visitProCounter,
              color: getEnumValue(EVisitProTheme, color),
            },
          })
        }
      />
      <CustomSelect
        label="Icon"
        options={Object.keys(EVisitProIcon).filter((k) => isNaN(+k))}
        value={
          getEnumKey(
            EVisitProIcon,
            props.visitProCounter.icon
          )?.toLowerCase() || ''
        }
        onChange={(icon) =>
          editSection({
            ...props,
            visitProCounter: {
              ...props.visitProCounter,
              icon: getEnumValue(EVisitProIcon, icon),
            },
          })
        }
      />
      <CustomInput
        label="Label"
        value={props.visitProCounter.label}
        onChange={(label) =>
          editSection({
            ...props,
            visitProCounter: {
              ...props.visitProCounter,
              label,
            },
          })
        }
      />
      <CustomSwitch
        label="Format Number"
        vertical={false}
        isActive={props.visitProCounter.pretty}
        onChange={(pretty) =>
          editSection({
            ...props,
            visitProCounter: {
              ...props.visitProCounter,
              pretty,
            },
          })
        }
      />
    </>
  );
};

export default VisitPro;
