import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useFilters, Ranking, Position } from './filters.store';

export function DataFilters() {
  const [{ ranking, position, notes }, { setFilters }] = useFilters();
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      ranking,
      position,
      notes,
    },
  });
  const formValues = getValues();

  const onSubmit = (data: typeof formValues) => {
    setFilters(data);
  };

  return (
    <div>
      <h2>Data Form State</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" placeholder="Notes" {...register('notes')} />
        <select {...register('ranking')}>
          <option value={Ranking.Gold}>Gold</option>
          <option value={Ranking.Silver}>Silver</option>
          <option value={Ranking.Bronze}>Bronze</option>
        </select>
        <select {...register('position')}>
          <option value={Position.Keeper}>Keeper</option>
          <option value={Position.Defense}>Defense</option>
          <option value={Position.Mid}>Mid</option>
          <option value={Position.Attack}>Attack</option>
        </select>

        <input type="submit" />
      </form>

      <pre>{JSON.stringify(getValues(), null, 2)}</pre>
    </div>
  );
}

export function DateFilters() {
  const [{ fromDate, toDate }, { setFilters }] = useFilters();

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      fromDate: format(fromDate, 'yyyy-MM-dd'),
      toDate: format(toDate, 'yyyy-MM-dd'),
    },
  });

  const formValues = getValues();

  const onSubmit = (data: typeof formValues) => {
    setFilters({
      fromDate: new Date(data.fromDate),
      toDate: new Date(data.toDate),
    });
  };

  return (
    <div>
      <h2>Dates Form State</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="date" placeholder="Start date" {...register('fromDate')} />
        <input type="date" placeholder="End date" {...register('toDate')} />

        <input type="submit" />
      </form>

      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}
