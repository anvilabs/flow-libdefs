/* @flow */

/* graphql-tag */
type DocumentNodeType<T: 'query' | 'mutation', I, P> = {
  __type__: T,
  __input__: I,
  __payload__: P,
};
type QueryType<I, P> = DocumentNodeType<'query', I, P>;
type MutationType<I, P> = DocumentNodeType<'mutation', I, P>;

/* Query */
type FetchPolicyType =
  | 'cache-first'
  | 'cache-and-network'
  | 'network-only'
  | 'cache-only';
type ErrorType = Error & {
  graphQLErrors: Array<Error>,
  networkError: ?Error,
};
type FetchMoreUpdateQueryOptionsType<I, T> = {|
  fetchMoreResult: T,
  queryVariables: I,
|};
type FetchMoreOptionsType<I, T> = {|
  variables?: $Shape<I>,
  updateQuery: (
    previousQueryResult: T,
    options: FetchMoreUpdateQueryOptionsType<I, T>,
  ) => Object,
|};
type QueryOptionsType<I> = {|
  variables?: I,
  fetchPolicy?: FetchPolicyType,
  pollInterval?: number,
  notifyOnNetworkStatusChange?: boolean,
  reducer?: (
    previousResult: Object,
    action: Object,
    variables: Object,
  ) => Object,
|};
type QueryResultType<T> = {
  data: T,
  loading: boolean,
  networkStatus: number,
  stale: boolean,
};
type QueryPropsType<OP, I, T> = {
  ownProps: OP,
  data: {
    /* :: ...$Exact<T>, */
    loading: boolean,
    networkStatus: number,
    error: ?ErrorType,
    refetch: (variables?: $Shape<I>) => Promise<{data: T}>,
    fetchMore: (options: FetchMoreOptionsType<I, T>) => Promise<{data: T}>,
    startPolling: (pollInterval: number) => void,
    stopPolling: () => void,
  },
};

/* Mutate */
type MutateUpdateQueriesOptionsType<I, T> = {
  mutationResult: {data: T},
  queryVariables: I,
  queryName: string,
};
type MutateOptionsType<I, T> = {|
  variables?: I,
  optimisticResponse?: T,
  update?: (proxy: any, response: {data: T}) => any,
  refetchQueries?: Array<string | Object>,
  updateQueries?: {
    [queryName: string]: (
      previousData: {[key: string]: any},
      options: MutateUpdateQueriesOptionsType<I, T>,
    ) => Object,
  },
|};
type MutatePropsType<OP, I, T> = {
  ownProps: OP,
  mutate: (options?: MutateOptionsType<I, T>) => Promise<{data: T}>,
};

/* Core */
type ApolloClientType = {|
  watchQuery: any,
  query: <I, T>(options: {|
    query: QueryType<I, T>,
    /* :: ...QueryOptionsType<I>, */
  |}) => Promise<QueryResultType<T>>,
  mutate: <I, T>(options: {
    mutation: MutationType<I, T>,
    /* :: ...MutateOptionsType<I, T>, */
  }) => Promise<QueryResultType<T>>,
  readQuery: (options: any) => any,
  readFragment: (options: any) => any,
  writeQuery: (options: any) => void,
  writeFragment: (options: any) => void,
  reducer: () => any,
  middleware: () => any,
  initStore: () => void,
  setStore: (store: any) => void,
  resetStore: () => void,
|};

/* Client management */
type ApolloProviderPropsType = {|
  client: Object,
  store?: Object,
|};

/* HOCs */
type ClassComponentType<D, P, S> = Class<React$Component<D, P, S>>;
type StatelessComponentType<P> = (props: P) => ?React$Element<any>;
type ComponentType<D, P> =
  | StatelessComponentType<P>
  | ClassComponentType<D, P, any>;
type HocType<OP, P, D = *> = (
  component: ComponentType<D, P>,
) => ClassComponentType<D, OP, void>;

declare module 'react-apollo' {
  /* Client management */
  declare var ApolloProvider: Class<
    React$Component<void, ApolloProviderPropsType, void>,
  >;

  /* HOCs */
  declare function graphql<I, T, OP, P>(
    query: QueryType<I, T>,
    config: {|
      options?: (ownProps: OP) => QueryOptionsType<I>,
      props?: (result: QueryPropsType<OP, I, T>) => P,
      skip?: (ownProps: OP) => boolean,
      name?: string,
      withRef?: boolean,
      alias?: string,
    |},
  ): HocType<OP, $Supertype<P & OP>>;
  declare function graphql<I, T, OP, P>(
    query: MutationType<I, T>,
    config: {|
      options?: (ownProps: OP) => MutateOptionsType<I, T>,
      props?: (result: MutatePropsType<OP, I, T>) => P,
      skip?: (ownProps: OP) => boolean,
      name?: string,
      withRef?: boolean,
      alias?: string,
    |},
  ): HocType<OP, $Supertype<P & OP>>;
  declare function withApollo<D, OP>(
    component: ComponentType<
      D,
      $Supertype<{
        /* :: ...$Exact<OP>, */
        client: ApolloClientType,
      }>,
    >,
  ): ClassComponentType<D, OP, void>;

  /* SSR */
  declare function getDataFromTree(jsx: React$Element<any>): Promise<void>;
}

/* Global helper types */
declare type Apollo$QueryType<I, T> = QueryType<I, T>;
declare type Apollo$MutationType<I, T> = MutationType<I, T>;
declare type Apollo$ErrorType = ErrorType;
