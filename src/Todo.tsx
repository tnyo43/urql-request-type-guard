import React from 'react';
import { useQuery } from 'urql';
import { graphql } from './gql';

const TodosQuery = graphql(`
  query getTodos {
    todos {
      id
      title
    }
  }
`);

const Todos = () => {
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (!data) return <p>Something happens :(</p>;

  return (
    <ul>
      {data.todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
