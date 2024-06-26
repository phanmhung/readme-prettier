import { useAppStore } from 'entities/store/app.store';
import CustomCheckbox from 'shared/ui/CustomCheckbox';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IStatsSetting } from '../../default';
import { ETrophyTitle, ETroyphyStatsTheme } from '../../stats.enum';

const Trophy = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSwitch
        isActive={props.trophy.hideBorder}
        label="Hide Border"
        onChange={(hideBorder) =>
          editSection({
            ...props,
            trophy: {
              ...props.trophy,
              hideBorder,
            },
          })
        }
      />
      <CustomSelect
        label="Theme"
        options={Object.values(ETroyphyStatsTheme)}
        value={props.trophy.theme}
        onChange={(theme) =>
          editSection({
            ...props,
            trophy: {
              ...props.trophy,
              theme,
            },
          })
        }
      />
      <h4 class="mt-4 mb-2">Trophies</h4>
      <div class="grid grid-cols-2 gap-x-2 gap-y-3">
        {Object.values(ETrophyTitle).map((title) => (
          <CustomCheckbox
            label={title}
            isActive={props.trophy.titles.includes(title)}
            onChange={(checked) =>
              editSection({
                ...props,
                trophy: {
                  ...props.trophy,
                  titles: checked
                    ? props.trophy.titles.filter((t) => t !== title)
                    : props.trophy.titles.concat(title),
                },
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export default Trophy;
