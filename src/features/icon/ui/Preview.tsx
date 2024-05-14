import { Icon } from '@iconify/react';
import { useSectionProps } from 'shared/hooks';
import { alignImageStyle } from 'shared/utils';
import { IIconSetting } from '../default';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IIconSetting>(id);

  if (!props) return null;
  const { settings, icons } = props;

  return (
    <div
      class="flex flex-wrap gap-y-2.5 w-max"
      style={alignImageStyle(settings.position)}
    >
      {icons.map((icon) => (
        <>
          <Icon
            key={icon}
            icon={icon.name}
            width={settings.size}
            height={settings.size}
          />
          <img width={settings.gap} class="invisible last:hidden" />
        </>
      ))}
    </div>
  );
};

export default Preview;
