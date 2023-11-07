'use client';
import { Smile } from 'lucide-react';
import React from 'react';
import { Badge } from '../ui/badge';
import { Frown } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { useGrammar } from '../store';

const Result = ({}) => {
    const { getValues } = useFormContext();
    const string = getValues('string');
    const { resultCheck, grammarShape, paths } = useGrammar();

    const grammarShapeTemp = [
        { name: 'V', value: grammarShape.V.join(', ') },
        { name: 'T', value: grammarShape.T.join(', ') },
        { name: 'P', value: grammarShape.P.join(', ') },
        { name: 'S', value: grammarShape.S },
    ];
    return (
        <>
            {string ? (
                <div className="flex flex-col gap-3 m-3">
                    <div className="mx-5">
                        <p className="font-medium">Thành phần văn phạm:</p>
                        {grammarShapeTemp.map((grm, index) => (
                            <p key={index}>
                                <span className="font-medium">
                                    {grm.name}:{' '}
                                </span>{' '}
                                {grm.value}
                            </p>
                        ))}
                    </div>
                    {paths.length !== 0 && (
                        <>
                            <hr />
                            <div className="mx-5 overflow-auto max-h-[300px]">
                                <p className="font-medium">
                                    Dẫn xuất trực tiếp:{' '}
                                </p>
                                <div className="flex flex-col ">
                                    {paths.map((path, index) => (
                                        <span key={index}>
                                            {index + 1}. <span>{path}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    <hr />

                    <div className=" flex justify-center items-center ">
                        {resultCheck ? (
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <Smile className="w-20 h-20 stroke-green-300" />
                                </div>
                                <Badge className="bg-green-100 text-green-400  text-lg md:text-2xl ">
                                    Chuỗi được sinh ra từ văn phạm
                                </Badge>
                            </div>
                        ) : (
                            <div className=" flex flex-col justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <Frown className="w-20 h-20 stroke-red-300" />
                                </div>
                                <Badge className="bg-red-100 text-red-400  text-lg md:text-2xl ">
                                    Chuỗi không được sinh ra từ văn phạm
                                </Badge>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className=" h-full flex flex-col justify-center items-center m-3">
                    <div className="flex justify-center items-center">
                        <PackageSearch className="w-20 h-20 stroke-sky-300" />
                    </div>
                    <Badge className="bg-sky-100 text-sky-400 text-lg md:text-2xl">
                        Chưa có dữ liệu. Hãy nhập vào form.
                    </Badge>
                </div>
            )}
        </>
    );
};

export default Result;
