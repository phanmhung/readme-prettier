import { useAppStore } from 'entities/store/app.store';
import CustomInputNumber from 'shared/ui/CustomInputNumber';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IStatsSetting } from '../../default';
import {
  EGithubReadmeStatsLocale,
  EGithubReadmeStatsTheme,
  ELanguageLayout,
} from '../../stats.enum';

const Languages = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Layout"
        value={props.languages.layout}
        options={Object.values(ELanguageLayout)}
        onChange={(layout) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              layout,
            },
          })
        }
      />
      <CustomSelect
        label="Theme"
        value={props.languages.theme}
        options={Object.values(EGithubReadmeStatsTheme)}
        onChange={(theme) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              theme,
            },
          })
        }
      />
      <CustomSelect
        label="Language"
        options={Object.values(EGithubReadmeStatsLocale)}
        value={props.languages.lang}
        onChange={(lang) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              lang,
            },
          })
        }
      />
      <CustomInputNumber
        label="Langs Count"
        min={1}
        max={20}
        value={props.languages.langCount}
        onChange={(langCount) =>
          editSection({
            ...props,
            languages: {
              ...props.languages,
              langCount,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-2">
        <CustomSwitch
          isActive={props.languages.hideBorder}
          label="Hide Border"
          onChange={(hideBorder) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                hideBorder,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.animation}
          label="Animation"
          onChange={(animation) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                animation,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.hideTitle}
          label="Hide Title"
          onChange={(hideTitle) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                hideTitle,
              },
            })
          }
        />
        <CustomSwitch
          isActive={props.languages.progressBar}
          label="Progress Bars"
          onChange={(progressBar) =>
            editSection({
              ...props,
              languages: {
                ...props.languages,
                progressBar,
              },
            })
          }
        />
      </div>
    </>
  );
};

export default Languages;
