import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { useFilters } from './filters.store';
import { DataFilters, DateFilters } from './Filters';
import Nav from './Nav';

function Home() {
  return (
    <div className="wrap">
      <DateFilters />
      <DataFilters />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="wrap">
      <DateFilters />
    </div>
  );
}

function Shop() {
  return (
    <div>
      <DataFilters />
    </div>
  );
}

function Whatever() {
  return (
    <div>
      <h1>Whatever</h1>
    </div>
  );
}

export const routes = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'whatever',
    element: <Whatever />,
  },
];

export default function App() {
  const [state] = useFilters();
  return (
    <div>
      <div className="devtools">
        <p>Filters Store</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <div className="app">
        <Nav />
        <div className="forms">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
