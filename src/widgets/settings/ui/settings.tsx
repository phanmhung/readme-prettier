import { Icon } from '@iconify/react';
import { EToolkitType } from 'shared/enums/share.enum';
import { useSectionProps } from 'shared/hooks';
import { useAppStore } from 'entities/store/app.store';
import DevSocialSetting from 'features/dev-social/ui/Setting';
import IconSetting from 'features/icon/ui/Setting';
import ImageSetting from 'features/image/ui/Setting';
import QuoteSetting from 'features/quote/ui/Setting';
import StatsSetting from 'features/stats/ui/Setting';
import TextSetting from 'features/text/ui/Setting';
import ViewsSetting from 'features/views/ui/Setting';

export const Settings = ({
  active,
  onClose,
}: {
  active: boolean;
  onClose: () => void;
}) => {
  const { sectionId } = useAppStore();

  if (!sectionId)
    return (
      <div
        class={`bg-primary amd-border max-w-80 lg:max-w-72 w-full fixed inset-y-4 right-4 z-10 lg:static lg:block ${
          active ? 'block' : 'hidden'
        }`}
      >
        <button
          class="absolute -left-5 top-6 border border-white/20 rounded p-1 bg-primary lg:hidden"
          onClick={onClose}
        >
          <Icon icon="icon-park-solid:right-one" height={20} />
        </button>
      </div>
    );

  const section = useSectionProps<any>(sectionId);

  return (
    <div
      class={`bg-primary max-w-80 lg:max-w-72 w-full fixed inset-y-4 right-4 z-10 lg:static lg:block ${
        active ? 'block' : 'hidden'
      }`}
    >
      <button
        class="absolute -left-5 top-6 border border-white/20 rounded p-1 bg-primary lg:hidden"
        onClick={onClose}
      >
        <Icon icon="icon-park-solid:right-one" height={20} />
      </button>
      <div class="flex-1 px-4 pt-2.5 pb-5 overflow-auto h-full amd-border">
        {section.type === EToolkitType.TEXT && <TextSetting id={sectionId} />}
        {section.type === EToolkitType.TECH && <IconSetting id={sectionId} />}
        {section.type === EToolkitType.SOCIAL && <IconSetting id={sectionId} />}
        {section.type === EToolkitType.STATS && <StatsSetting id={sectionId} />}
        {section.type === EToolkitType.VIEWS && <ViewsSetting id={sectionId} />}
        {section.type === EToolkitType.IMAGE && <ImageSetting id={sectionId} />}
        {section.type === EToolkitType.MEME && (
          <ImageSetting id={sectionId} hideUrl />
        )}
        {section.type === EToolkitType.QUOTE && <QuoteSetting id={sectionId} />}
        {section.type === EToolkitType.DEV_SOCIAL && (
          <DevSocialSetting id={sectionId} />
        )}
      </div>
    </div>
  );
};
