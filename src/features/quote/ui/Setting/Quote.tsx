import { useAppStore } from 'entities/store/app.store';
import CustomInput from 'shared/ui/CustomInput';
import CustomSelect from 'shared/ui/CustomSelect';
import CustomSwitch from 'shared/ui/CustomSwitch';
import { IQuoteSetting } from '../../default';
import { EQuoteTheme, EQuoteType } from '../../quote.enum';
import CustomButton from 'shared/ui/CustomButton';

const Quote = (props: IQuoteSetting) => {
    const { editSection } = useAppStore();

    return (
        <>
            <CustomSelect
                className='m-0'
                label='Theme'
                value={props.quote.theme}
                options={Object.values(EQuoteTheme)}
                onChange={(theme) =>
                    editSection({
                        ...props,
                        quote: {
                            ...props.quote,
                            theme,
                        },
                    })
                }
            />
            <CustomSelect
                label='Type'
                value={props.quote.viewType}
                options={Object.values(EQuoteType)}
                onChange={(viewType) =>
                    editSection({
                        ...props,
                        quote: {
                            ...props.quote,
                            viewType,
                        },
                    })
                }
            />
            <CustomButton
                onClick={() =>
                    editSection({
                        ...props,
                        quote: {
                            ...props.quote,
                            quote: 'new quote',
                        },
                    })
                }
            >
                Reload Quote
            </CustomButton>
            <div class='grid grid-cols-2 gap-4'>
                <CustomSwitch
                    label='Show Border'
                    isActive={props.quote.border}
                    onChange={(border) =>
                        editSection({
                            ...props,
                            quote: {
                                ...props.quote,
                                border,
                            },
                        })
                    }
                />
                <CustomSwitch
                    label='Custom Quote'
                    isActive={props.quote.customQuote}
                    onChange={(customQuote) =>
                        editSection({
                            ...props,
                            quote: {
                                ...props.quote,
                                customQuote,
                            },
                        })
                    }
                />
            </div>
            {props.quote.customQuote && (
                <>
                    <CustomInput
                        label='Quote'
                        value={props.quote.quote}
                        onChange={(customQuote) =>
                            editSection({
                                ...props,
                                quote: {
                                    ...props.quote,
                                    quote: customQuote,
                                },
                            })
                        }
                    />
                    <CustomInput
                        label='Author'
                        value={props.quote.author}
                        onChange={(author) =>
                            editSection({
                                ...props,
                                quote: {
                                    ...props.quote,
                                    author,
                                },
                            })
                        }
                    />
                </>
            )}
        </>
    );
};

export default Quote;
