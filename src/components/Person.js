import React from 'react';
import useGetPerson from '../hooks/useGetPerson';

const Person = ({ id }) => {
  const { data, loading, error } = useGetPerson(id);
  if (loading) return <h1>loading...</h1>;
  if (error)
    return (
      <>
        <h1>Error</h1>
        <p>{`${error.message}`}</p>
      </>
    );
  return <h1>{`Hello ${data.name}`}</h1>;
};

export default Person;
