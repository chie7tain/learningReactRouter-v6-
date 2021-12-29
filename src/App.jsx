import { Link, Outlet,useLocation,NavLink } from "react-router-dom";

function QueryNavLink({to, ...props}){
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}/>
}
export default function App() {
  return (
    <div>
      <h1>Bookkepper!</h1>
      <nav style={{ borderBottom: "solif 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />

    </div>
  );
}
