import clsx from "clsx";

export default function ChatMessage({message,role,createTime}) {
    return (
        <div className={clsx('cursor-default border-2 text-sm sm:text-base space-y-3 max-w-[65%] p-4 rounded-3xl flex flex-col justify-between',role=='کاربر'?'primary-bg mr-auto rounded-bl-md':'primary-bg from-[#01619d] to-[#0076bf] border-[#1b97d1] rounded-br-sm')}>
            <p>{message}</p>
            <div className={clsx(role=='کاربر'?'mr-auto':'')}>{createTime}</div>
        </div>
    );
}
