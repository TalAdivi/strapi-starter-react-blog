import gql from "graphql-tag";

export const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export const TITLE_QUERY = gql`
query Title {
  title {
    title
    id
    summary
  }
}
`;

// export default ARTICLES_QUERY;
