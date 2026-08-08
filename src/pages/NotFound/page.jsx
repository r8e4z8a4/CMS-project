import { Link } from "react-router";
const page = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden " dir="rtl">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 size-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 size-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="text-center px-6 relative">
                    <h1 className="text-[180px] md:text-[240px] text-transparent bg-clip-text bg-linear-to-b from-teal-500 to-teal-200 leading-none select-none mb-8">404</h1>
                <div className="space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl text-gray-200">صفحه مورد نظر یافت نشد</h2>
                    <p className="text-lg md:text-xl text-gray-400">متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.</p>
                </div>
                <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 group">
                    <span>بازگشت به صفحه اصلی</span>
                    <svg className="size-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l-5 5 5 5" />
                    </svg>
                </Link>
                <div className="mt-16 flex justify-center gap-2">
                    <div className="size-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="size-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="size-2 bg-teal-500 rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

export default page;
