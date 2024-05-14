import { EAlign } from 'shared/enums/share.enum';
import { useSectionProps } from 'shared/hooks';
import { useAppStore } from 'entities/store/app.store';
import CustomInput from 'shared/ui/CustomInput';
import CustomInputNumber from 'shared/ui/CustomInputNumber';
import CustomSelect from 'shared/ui/CustomSelect';
import { IImageSetting } from '../default';

const Setting = ({ id, hideUrl }: { id: string; hideUrl?: boolean }) => {
  const props = useSectionProps<IImageSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      {!hideUrl && (
        <CustomInput
          className="mb-4"
          value={props.url}
          label="Image URL"
          onChange={(url) => editSection({ ...props, url })}
        />
      )}
      <CustomSelect
        className="mt-0"
        value={props.align}
        label="Align"
        options={Object.values(EAlign)}
        onChange={(align) => editSection({ ...props, align })}
      />
      <CustomInputNumber
        value={props.width}
        label="Width"
        onChange={(width) => editSection({ ...props, width })}
      />
    </>
  );
};

export default Setting;
