import { useAppStore } from 'entities/store/app.store';
import CustomInput from 'shared/ui/CustomInput';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IDevSocialSetting } from '../../default';
import { ELeetcodeExtension, ELeetcodeTheme } from '../../dev-social.enum';

const Leetcode = (props: IDevSocialSetting) => {
    const { editSection } = useAppStore();

    return (
        <>
            <CustomInput
                value={props.leetcodeStats.username}
                label='Username'
                onChange={(username) =>
                    editSection({
                        ...props,
                        leetcodeStats: {
                            ...props.leetcodeStats,
                            username,
                        },
                    })
                }
            />
            <CustomSelect
                label='Theme'
                value={props.leetcodeStats.theme}
                options={Object.values(ELeetcodeTheme)}
                onChange={(theme) =>
                    editSection({
                        ...props,
                        leetcodeStats: {
                            ...props.leetcodeStats,
                            theme,
                        },
                    })
                }
            />
            <CustomInput
                value={props.leetcodeStats.font}
                label='Font'
                capitalize
                subtitle={
                    <>
                        Name from{' '}
                        <a
                            class='text-emerald-500'
                            target='blank'
                            href='https://fonts.google.com'
                            rel='noopener noreferer'
                        >
                            Google Fonts
                        </a>
                    </>
                }
                onChange={(font) =>
                    editSection({
                        ...props,
                        leetcodeStats: {
                            ...props.leetcodeStats,
                            font,
                        },
                    })
                }
            />
            <CustomSelect
                label='Extension'
                value={props.leetcodeStats.ext}
                options={Object.values(ELeetcodeExtension)}
                onChange={(ext) =>
                    editSection({
                        ...props,
                        leetcodeStats: {
                            ...props.leetcodeStats,
                            ext,
                        },
                    })
                }
            />
            <div class='grid grid-cols-2 gap-4'>
                <CustomSwitch
                    label='Show Border'
                    isActive={props.leetcodeStats.border}
                    onChange={(border) =>
                        editSection({
                            ...props,
                            leetcodeStats: {
                                ...props.leetcodeStats,
                                border,
                            },
                        })
                    }
                />
                <CustomSwitch
                    label='Animation'
                    isActive={props.leetcodeStats.animation}
                    onChange={(animation) =>
                        editSection({
                            ...props,
                            leetcodeStats: {
                                ...props.leetcodeStats,
                                animation,
                            },
                        })
                    }
                />
            </div>
        </>
    );
};

export default Leetcode;
