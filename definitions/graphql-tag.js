/* @flow */

declare class gql$DocumentNode<K: 'query' | 'mutation', I, T> {} // eslint-disable-line no-unused-vars

declare type gql$QueryType<I, T> = gql$DocumentNode<'query', I, T>;
declare type gql$MutationType<I, T> = gql$DocumentNode<'mutation', I, T>;

declare module 'graphql-tag' {
  declare function gql(
    literals: Array<string>,
    ...placeholders: Array<any>
  ): gql$DocumentNode<any, any, any>;
  declare function resetCaches(): void;
  declare function disableFragmentWarnings(): void;

  /* :: declare export var resetCaches: typeof resetCaches; */
  /* :: declare export var disableFragmentWarnings: typeof disableFragmentWarnings; */
  /* :: declare export default typeof gql; */
}
