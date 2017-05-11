/* @flow */

type DocumentNodeType<T: 'query' | 'mutation', I, P> = {
  type: T,
  input: I,
  payload: P,
};
type QueryType<I, P> = DocumentNodeType<'query', I, P>;
type MutationType<I, P> = DocumentNodeType<'mutation', I, P>;

declare module 'graphql-tag' {
  declare function gql(
    literals: Array<string>,
    ...placeholders: Array<any>
  ): DocumentNodeType<any, any, any>;
  declare function resetCaches(): void;
  declare function disableFragmentWarnings(): void;

  /* :: declare export var resetCaches: typeof resetCaches; */
  /* :: declare export var disableFragmentWarnings: typeof disableFragmentWarnings; */
  /* :: declare export default typeof gql; */
}

/* Global helper types */
declare type gql$QueryType<I, T> = QueryType<I, T>;
declare type gql$MutationType<I, T> = MutationType<I, T>;
