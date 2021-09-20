import { Link, useLocation } from 'react-router-dom';
import { routes } from './App';
export default function Nav() {
  const location = useLocation();
  return (
    <nav>
      <h4 className="location">{location.pathname}</h4>
      <div>
        {routes.map(({ path }) => (
          <Link key={path} to={`/${path}`}>
            {path}
          </Link>
        ))}
      </div>
    </nav>
  );
}
