/* eslint-disable react/display-name */
import React, { useState, useEffect, Fragment, forwardRef } from 'react';
import { CheckIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Listbox, Transition } from '@headlessui/react';
import { cn } from '../../../lib/utills';

const SimpleSelectMenu = forwardRef(
    (
        {
            titleSx,
            title,
            placeholder,
            targetProperty,
            optionsData,
            sx,
            onChangeValue,
            removeSelected,
            hideSelectedValue,
            hasError,
            selectedValue,
            valuePropertyName,
            disabled,
            showChipOnly,
            showOnTop,
            hideArrows,
            defaultOpen,
            onBlur,
            noCapitalize,
            onChangeValidation,
            getItemIcon,
            selectedSx = '',
            getSelectedIcon
        },
        ref
    ) => {
        const [selected, setSelected] = useState(null);

        const [data, setData] = useState([]);

        useEffect(() => {
            if (selectedValue === '') {
                setSelected(null);
            } else {
                if (valuePropertyName) {
                    const selectedObj = data.find((obj) => {
                        if (!obj) {
                            console.error('Object is null or undefined');
                            return false;
                        }
                        if (!(valuePropertyName in obj)) {
                            console.error('valuePropertyName does not exist in the object');
                            return false;
                        }
                        if (obj[valuePropertyName] === selectedValue) {
                            return true;
                        }
                    });
                    setSelected(selectedObj || null);
                }
            }
        }, [selectedValue, data]);

        useEffect(() => {
            setData(optionsData);
        }, [optionsData]);

        const handleOnChane = async (e) => {
            if (onChangeValidation) {
                const isValidate = await onChangeValidation(e);
                if (!isValidate) {
                    return false;
                }
            }

            setSelected(e);

            onChangeValue(e);
            if (removeSelected) {
                const filteredData = data?.filter((item) => item[targetProperty] !== e[targetProperty]);
                setData(filteredData);
            }
        };
        return (
            <div className="default-forms w-full">
                <Listbox
                    ref={ref}
                    onBlur={onBlur}
                    value={selected}
                    onChange={handleOnChane}
                    autoFocus
                    disabled={disabled}
                >
                    {({ open }) => (
                        <>
                            {title && (
                                <Listbox.Label className={cn('block  buttons-font leading-6 ', titleSx ? titleSx : '')}>
                                    {title}
                                </Listbox.Label>
                            )}
                            <div className={cn('relative', title ? 'mt-2' : '')}>
                                <Listbox.Button
                                    className={cn(
                                        hasError ? '!ring-red-400' : '',
                                        'relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left shadow-sm ring-1 ring-inset ring-gray-400 focus:outline-none focus:ring-1 focus:ring-slate-500 sm:text-sm sm:leading-6',
                                        selected ? 'text-gray-900' : 'text-secondarybg',
                                        showChipOnly ? (selected ? '!p-2' : '!p-3') : !hideArrows ? 'pr-10' : '',
                                        sx ? sx : '',
                                        disabled && '!bg-gray-200 !border-none !cursor-no-drop !ring-0'
                                    )}
                                >
                                    {showChipOnly ? (
                                        <div className="flex flex-col gap-2 justify-center">
                                            {!hideSelectedValue && selected ? (
                                                <div className="flex p-1.5 items-center bg-third rounded-lg justify-between overflow-hidden">
                                                    <span className="ml-1 flex-1 whitespace-nowrap break-all overflow-hidden overflow-ellipsis text-white text-custom !capitalize">
                                                        {selected ? selected[targetProperty] : placeholder}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="ml-2 p-[2px] rounded-full bg-white text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white"
                                                        onClick={() => {
                                                            handleOnChane(null);
                                                        }}
                                                    >
                                                        <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex w-full">
                                                    <span
                                                        className={cn(
                                                            'block truncate text-custom',
                                                            noCapitalize ? '' : '!capitalize'
                                                        )}
                                                    >
                                                        {!hideSelectedValue && selected
                                                            ? selected[targetProperty]
                                                            : placeholder}
                                                    </span>
                                                    {!disabled && (
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                            <ChevronDownIcon
                                                                className="h-5 w-5 text-[#979797]"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className={`flex w-full ${getItemIcon || getSelectedIcon ? 'gap-2 items-center' : ''}`}>
                                            {getItemIcon && selected && getItemIcon(selected)}
                                            {getSelectedIcon && getSelectedIcon(selected)}

                                            <span
                                                className={cn(
                                                    'block truncate text-custom',
                                                    noCapitalize ? '' : '!capitalize',
                                                    selectedSx ? selectedSx : ''
                                                )}
                                            >
                                                {!hideSelectedValue && selected
                                                    ? selected[targetProperty]
                                                    : placeholder}
                                            </span>
                                            {!disabled && !hideArrows && (
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-[#979797]"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </Listbox.Button>

                                <Transition
                                    show={defaultOpen ? defaultOpen : open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        className={cn(
                                            'absolute z-[9999] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ',
                                            showOnTop && 'bottom-[100%]'
                                        )}
                                    >
                                        {data?.map((obj, ind) => (
                                            <Listbox.Option
                                                key={'select_menu_' + ind}
                                                className={({ active }) =>
                                                    cn(
                                                        active ? 'bg-third text-white' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 ',
                                                        !hideArrows ? 'pr-9 pl-3' : 'px-1',
                                                        getItemIcon && 'flex gap-2 items-center cursor-pointer',
                                                    )
                                                }
                                                value={obj}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                    {getItemIcon && getItemIcon(obj)}
                                                        <span
                                                            className={cn(
                                                                selected ? 'font-semibold' : 'font-[500]',
                                                                'block truncate text-custom',
                                                                noCapitalize ? '' : '!capitalize'
                                                            )}
                                                        >
                                                            {obj[targetProperty]}
                                                        </span>

                                                        {!hideArrows && selected ? (
                                                            <span
                                                                className={cn(
                                                                    active ? 'text-white' : 'text-third',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>
        );
    }
);

export default SimpleSelectMenu;