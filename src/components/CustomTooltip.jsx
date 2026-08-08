
export default function CustomTooltip({payload}) {
  return (
    <div className='p-2 text-sm font-bold bg-white border-2 shadow rounded'>
        <p className='lable'>تعداد{`${payload[0]?.payload?.name} : ${payload[0]?.payload?.value}`}</p>
    </div>
  )
}
