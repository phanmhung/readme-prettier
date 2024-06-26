import { useAppStore } from 'entities/store/app.store';
import CustomCheckbox from 'shared/ui/CustomCheckbox';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IStatsSetting } from '../../default';
import {
  EAdditionStats,
  EGithubReadmeStatsLocale,
  EGithubReadmeStatsTheme,
  EHideStats,
  ERankIcon,
} from '../../stats.enum';

const Stats = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Icon"
        options={Object.values(ERankIcon)}
        value={props.stats.rankIcon}
        onChange={(rankIcon) =>
          editSection({
            ...props,
            stats: {
              ...props.stats,
              rankIcon,
            },
          })
        }
      />
      <CustomSelect
        label="Locale"
        options={Object.values(EGithubReadmeStatsLocale)}
        value={props.stats.lang}
        onChange={(lang) =>
          editSection({
            ...props,
            stats: {
              ...props.stats,
              lang,
            },
          })
        }
      />
      <CustomSelect
        label="Theme"
        options={Object.values(EGithubReadmeStatsTheme)}
        value={props.stats.theme}
        onChange={(theme) =>
          editSection({
            ...props,
            stats: {
              ...props.stats,
              theme,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-2">
        <CustomSwitch
          isActive={props.stats.hideBorder}
          label="Hide Border"
          onChange={(hideBorder) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                hideBorder,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.icon}
          label="Show Icons"
          onChange={(icon) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                icon,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.rank}
          label="Hide Rank"
          onChange={(rank) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                rank,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.hideTitle}
          label="Hide Title"
          onChange={(hideTitle) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                hideTitle,
              },
            });
          }}
        />
        <CustomSwitch
          isActive={props.stats.animation}
          label="Animation"
          onChange={(animation) => {
            editSection({
              ...props,
              stats: {
                ...props.stats,
                animation,
              },
            });
          }}
        />
      </div>
      <h4 class="mt-4 mb-2">Display options</h4>
      <div class="grid grid-cols-2 gap-x-2 gap-y-3">
        {Object.values(EHideStats).map((opt) => (
          <CustomCheckbox
            label={opt}
            isActive={!props.stats.hideOpts.includes(opt)}
            onChange={(checked) =>
              editSection({
                ...props,
                stats: {
                  ...props.stats,
                  hideOpts: checked
                    ? props.stats.hideOpts.concat(opt)
                    : props.stats.hideOpts.filter((o) => o !== opt),
                },
              })
            }
          />
        ))}
        {Object.values(EAdditionStats).map((opt) => (
          <CustomCheckbox
            label={opt}
            isActive={props.stats.additionOpts.includes(opt)}
            onChange={(checked) =>
              editSection({
                ...props,
                stats: {
                  ...props.stats,
                  additionOpts: checked
                    ? props.stats.additionOpts.concat(opt)
                    : props.stats.additionOpts.filter((o) => o !== opt),
                },
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export default Stats;
