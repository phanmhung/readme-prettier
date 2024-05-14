import { EAlign } from 'shared/enums/share.enum';
import { useSectionProps } from 'shared/hooks';
import { useAppStore } from 'entities/store/app.store';
import CustomSelect from 'shared/ui/CustomSelect';
import { IDevSocialSetting } from '../../default';
import { EDevSocialProvider } from '../../dev-social.enum';
import LeetcodeSetting from './Leetcode';
import StackoverflowSetting from './Stackoverflow';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IDevSocialSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomSelect
        className="mt-0"
        label="Provider"
        value={props.provider}
        options={Object.values(EDevSocialProvider)}
        onChange={(provider) =>
          editSection({
            ...props,
            provider,
          })
        }
      />
      <CustomSelect
        label="Align"
        value={props.align}
        options={Object.values(EAlign)}
        onChange={(align) =>
          editSection({
            ...props,
            align,
          })
        }
      />
      {props.provider === EDevSocialProvider.LEETCODE && (
        <LeetcodeSetting {...props} />
      )}
      {props.provider === EDevSocialProvider.STACKOVERFLOW && (
        <StackoverflowSetting {...props} />
      )}
    </>
  );
};

export default Setting;
