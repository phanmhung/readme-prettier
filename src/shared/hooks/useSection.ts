import {
  socialSetting,
  techSetting,
} from 'features/icon/default';
import {
  imageSetting,
  memeSetting,
} from 'features/image/default';
import { statsSetting } from 'features/stats/default';
import { textSetting } from 'features/text/default';
import { viewsSetting } from 'features/views/default';
import { quoteSetting } from 'features/quote/default';
import { devSocialSetting } from 'features/dev-social/default';
import { EToolkitType } from '../enums/share.enum';

const useSection = (type: EToolkitType) => {
  const id = crypto.randomUUID();
  switch (type) {
    case EToolkitType.TEXT:
      return { ...textSetting, type, id };
    case EToolkitType.TECH:
      return { ...techSetting, type, id };
    case EToolkitType.SOCIAL:
      return { ...socialSetting, type, id };
    case EToolkitType.STATS:
      return { ...statsSetting, type, id };
    case EToolkitType.VIEWS:
      return { ...viewsSetting, type, id };
    case EToolkitType.IMAGE:
      return { ...imageSetting, type, id };
    case EToolkitType.MEME:
      return { ...memeSetting, type, id };
    case EToolkitType.QUOTE:
      return { ...quoteSetting, type, id };
    case EToolkitType.DEV_SOCIAL:
      return { ...devSocialSetting, type, id };
    default:
      return null;
  }
};

export default useSection;
