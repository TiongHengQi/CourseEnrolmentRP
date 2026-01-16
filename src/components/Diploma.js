import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  return (
    <>
    <ul className="session-list">
      {diploma.modules.map(mod => (
        <li className="session" key={mod.id}>
          <NavLink to={mod.id}>
            <p className="session-name">{mod.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>


      <Outlet />
    </>
  );
}
