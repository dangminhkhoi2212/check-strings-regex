'use client';
import { defaultValues, valueChildren } from '@/app/page';
import { PlusCircle } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';

const FormAddRegex = () => {
    const { register, control, handleSubmit, reset, watch, resetField } =
        useFormContext();
    const { fields, append, prepend, remove, swap, move, insert, replace } =
        useFieldArray({
            control,
            name: 'regex',
        });
    return (
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <label htmlFor="start" className="font-medium">
                    Thêm kí tự bắt đầu
                </label>
                <input
                    id="start"
                    {...register(`start`)}
                    className="ring-1 rounded-md px-2 py-1 max-w-xs"
                />
            </div>
            <div className="flex justify-between">
                <h1 className="font-medium">Thêm quy luật sinh</h1>
                <section className="flex gap-2  rounded-lg">
                    <button
                        type="button"
                        className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                        onClick={() => {
                            append(valueChildren);
                        }}>
                        <PlusCircle />
                    </button>

                    <button
                        type="button"
                        className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                        onClick={() => {
                            resetField('regex', {
                                defaultValue: [],
                            });
                        }}>
                        <RotateCcw />
                    </button>
                </section>
            </div>
            <ul className="flex flex-col gap-2">
                {fields.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                        <input
                            {...register(`regex.${index}.left`)}
                            className="ring-1 rounded-md px-2 py-1  w-28 md:w-[200px]"
                        />
                        <div className="w-8">
                            <MoveRight />
                        </div>
                        <input
                            {...register(`regex.${index}.right`)}
                            className="ring-1 rounded-md px-2 py-1  w-28 md:w-[200px]"
                        />
                        <button
                            type="button"
                            className="rounded-full bg-sky-50 p-1 hover:bg-sky-100"
                            onClick={() => {
                                remove(index);
                            }}>
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default FormAddRegex;
