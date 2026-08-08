import { FiX } from "react-icons/fi";
import { Navigate, useNavigate, useOutletContext, useParams } from "react-router";
import ChatMessage from "../../components/ChatMessage";
export default function page() {
    const navigate=useNavigate()
    // const { AllTickets } = useOutletContext();
    const {AllDataProject}=useOutletContext()
    const { id } = useParams();
    const ticket = AllDataProject.AllTickets.find((i) => i.id == id);
    if (ticket) {
        return (
            <section className="pb-20">
                <div className="flex items-center justify-between bg-white p-4 rounded-xl border-2 border-zinc-200 shadow-xl">
                    <div className="flex items-center gap-3">
                        <img className="size-13 rounded-full inline-block" src={`${import.meta.env.BASE_URL}${"/images/profile-avatar.jpg".replace(/^\/+/, "")}`} alt="i cant open this photo" />
                        <div>
                            <p className="font-bold text-lg">{ticket.sender}</p>
                            <p className="text-sm text-gray-500">{ticket.title}</p>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/tickets')} className="flex-center border-2 border-zinc-300 hover:bg-[#019d79] hover:text-white transition cursor-pointer active:scale-110 rounded-full size-7"><FiX></FiX></button>
                </div>
                <div className="bg-white p-5 space-y-5 rounded-xl border-2 border-zinc-200 shadow-xl max-w-2xl mx-auto mt-15">
                  {ticket.chat.map(i=>{
                    return <ChatMessage key={crypto.randomUUID()} createTime={i.createTime} message={i.message} role={i.role}/>
                  })}
                </div>
            </section>
        );
    } else if (!ticket&&AllDataProject.AllTickets.length!==0) {
      return <Navigate to={"/not-found"} />
    };
}
