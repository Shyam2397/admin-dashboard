import { useNavigate } from "react-router-dom";
import NavSideBar from "../component/NavSideBar";

export default function NoPage() {
    const navigate = useNavigate()
  return (
    <NavSideBar>
            <div className="p-10 text-3xl text-center self-center font-bold">404!ERROR <div>
                <button
                    onClick={()=>navigate("/")}
                className="btn btn-primary w-32 m-5">Dashboard</button>
                </div></div>
            
    </NavSideBar>
    )
}
