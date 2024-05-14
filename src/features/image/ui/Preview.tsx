import { useEffect, useState } from 'preact/hooks';
import { useSectionProps } from 'shared/hooks';
import { alignImageStyle } from 'shared/utils';
import { UNAVAIABLE_IMAGE } from 'shared/constants';
import { IImageSetting } from '../default';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IImageSetting>(id);
  if (!props) return null;

  const [imageUrl, setImageUrl] = useState<string>(props.url);

  useEffect(() => {
    setImageUrl(props.url);
  }, [props.url]);

  return (
    <img
      src={imageUrl}
      width={props.width}
      style={alignImageStyle(props.align)}
      onError={() => setImageUrl(UNAVAIABLE_IMAGE)}
    />
  );
};

export default Preview;
