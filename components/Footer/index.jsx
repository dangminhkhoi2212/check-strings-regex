import React from 'react';

const Footer = () => {
    return (
        <div className=" w-full flex flex-col items-center">
            <div className="grid place-items-center bg-sky-50 h-20 w-full">
                <p className="font-medium">
                    Designed by:{' '}
                    <span className="italic">
                        Đặng Minh Khôi, Trần Lâm Huy, Nguyễn Lê Văn
                    </span>
                </p>
            </div>
            <div className="grid place-items-center h-20 w-full">
                <p className="text-center text-2xl font-semibold ">
                    Báo cáo đồ án Tin học lý thuyết 2023
                </p>
            </div>
        </div>
    );
};

export default Footer;
