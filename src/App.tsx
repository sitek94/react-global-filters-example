import './styles.css';
import { useFilters } from './filters.store';
import { DataFilters, DateFilters } from './Filters';

const CounterApp = () => {
  const [state] = useFilters();
  return (
    <div>
      <h1>My Filters</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div className="forms">
        <DateFilters />
        <DataFilters />
      </div>
    </div>
  );
};

export default CounterApp;
