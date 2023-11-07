'use client';
import ButtonConvert from '@/components/ButtonConvert';
import FormAddRegex from '@/components/FormAddRegex';
import FormAddString from '@/components/FormAddString';
import { ArrowRightLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Badge } from '@/components/ui/badge';
import { Smile } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Frown } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import Result from '@/components/Result';
export const valueChildren = { left: '', right: '' };
export const defaultValues = {
    start: '',
    regex: [valueChildren],
    string: '',
};
const Home = () => {
    const router = useRouter();
    const methods = useForm({
        defaultValues,
    });
    const searchParams = useSearchParams();
    const handleClear = () => {
        methods.reset();
        router.replace('/');
    };
    return (
        <FormProvider {...methods}>
            <div className="grid md:grid-cols-12 grid-cols-1 mx-20 gap-5">
                <div className="md:col-span-5  rounded-lg h-fit flex flex-col gap-5 p-4 border-4 border-dashed">
                    <FormAddRegex />
                    <FormAddString />
                    <div>
                        <div
                            role="button"
                            className="px-3 py-2 rounded-lg bg-slate-300 text-center w-20 float-right"
                            onClick={() => handleClear()}>
                            Clear
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 place-self-center  sticky top-5">
                    <ButtonConvert />
                </div>

                <div className="md:col-span-5  rounded-lg ring-1 ring-gray-200 overflow-hidden">
                    <h1 className="font-medium text-xl text-center bg-pink-100 py-1 rounded-md">
                        Kết quả
                    </h1>
                    <Result />
                </div>
            </div>
        </FormProvider>
    );
};

export default Home;
