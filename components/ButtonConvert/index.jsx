'use client';
import { ArrowRightLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import {
    checkGrammar,
    clear,
    filterLowercase,
    generateStrings,
} from '../../utils/regex';
import { route } from 'nextjs-routes';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ScanBarcode } from 'lucide-react';
import { useGrammar } from '../store';

const ButtonConvert = () => {
    const pathName = usePathname();
    const router = useRouter();
    const { setResultCheck, setGrammarShape, setStringSets, setPaths } =
        useGrammar();
    const { getValues } = useFormContext();
    const handleConvert = async () => {
        const regex = getValues('regex');
        const string = getValues('string');
        const start = getValues('start');
        const grammar = clear(regex);
        // kiểm tra đầu vào
        if (!start) return toast.error('Vui lòng nhập chuỗi bắt đầu');
        if (!Object.keys(grammar).length)
            return toast.error('Vui lòng nhập quy luật sinh');
        if (!string) return toast.error('Vui lòng nhập chuỗi kiểm tra');
        const path = [];
        const result = await checkGrammar(grammar, start, string, path);

        const V = Object.keys(grammar).map((k) => k);
        const P = [];
        for (const [key, value] of Object.entries(grammar)) {
            const str = `${key} -> ${value.join(' | ')}`;
            P.push(str);
        }
        const grammarShape = {
            V,
            T: filterLowercase(grammar),
            P,
            S: start,
        };

        setGrammarShape(grammarShape);
        setPaths(path);
        setResultCheck(result);
    };
    return (
        <div
            role="button"
            className="flex flex-col bg-green-100 hover:bg-green-200 transition-full duration-150 ease-in-out px-7 py-3 rounded-full  w-fit justify-center items-center"
            onClick={handleConvert}>
            <ScanBarcode />
            <span>Kiểm tra</span>
        </div>
    );
};

export default ButtonConvert;
