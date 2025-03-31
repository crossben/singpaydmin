import logo from '../assets/logo/logo_singpay.png';

export function Head() {
    return (
        <>
            <header className="bg-[#070438]">
                <div className="max-w-screen-xl sm:px-6 sm:py-4">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center justify-between">
                        <div className='flex items-center gap-4'>
                            <div className="flex items-center gap-4">
                                <img src={logo} alt="Logo" className="w-10 h-10" />
                            </div>
                            <h1 className="text-2xl font-bold text-white sm:text-3xl">SingPay Admin</h1>
                        </div>
                        <div className="ml-auto flex items-center gap-4">
                            <div className="flex gap-4">
                                <a href="/login" style={{ background: "#5a67ba" }} className="w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    G
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
