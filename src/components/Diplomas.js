import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();

  return (
    <div className="container">
      <h1>Diplomas Offered</h1>

      <ul className="categories">
        {diplomas.map(dip => (
          <li key={dip.id}>
            <NavLink to={dip.id}>
              {dip.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
