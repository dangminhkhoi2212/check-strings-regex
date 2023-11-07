import React from 'react';
import { useForm, useFormContext } from 'react-hook-form';

const FormAddString = () => {
    const { register } = useFormContext();
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="string" className="font-medium">
                Nhập chuỗi
            </label>
            <textarea
                id="string"
                type="text"
                {...register('string')}
                rows={4}
                className="ring-1 rounded-lg p-4"
            />
        </div>
    );
};

export default FormAddString;
