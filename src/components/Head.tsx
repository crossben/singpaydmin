export function Head() {
    return (
        <>
            <header className="bg-[#070438]">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-4 lg:px-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-white sm:text-3xl">SingPay Admin</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div style={{ background : "#5a67ba"}} className="w-8 h-8 rounded-full  flex items-center justify-center text-white">
                                    G
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
