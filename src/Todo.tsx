import { graphql } from './gql';

const TodosQuery = graphql(`
  query getTodos {
    todos {
      id
      title
    }
  }
`);
