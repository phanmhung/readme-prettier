import { IImageSetting } from "features/image/default";

const imageToMarkdown = (props: IImageSetting) => {
  return `<div align="${props.align}">
    <img src="${props.url}" width="${props.width}" />
</div>`;
};

export default imageToMarkdown;
