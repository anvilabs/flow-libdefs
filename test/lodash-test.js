/* @flow */

import _ from 'lodash/fp';

/* ARRAY */

/**
 * _.chunk
 */
(_.chunk(2, ['a', 'b', 'c', 'd']): Array<Array<string>>);
(_.chunk(2)(['a', 'b', 'c', 'd']): Array<Array<string>>);
(_.chunk(2, null): Array<Array<any>>);
// $ExpectError
(_.chunk(2, ['a', 'b', 'c', 'd']): Array<Array<void>>);
// $ExpectError
(_.chunk(2)(['a', 'b', 'c', 'd']): Array<Array<void>>);
// $ExpectError
(_.chunk(2, null): Object);

/**
 * _.compact
 */
(_.compact((['a', 'b', null]: Array<?string>)): Array<string>);
(_.compact((['a', 'b', null, false]: Array<?string | false>)): Array<string>);
// $ExpectError
(_.compact((['a', 'b', null]: Array<?string>)): Array<void>);
// $ExpectError
(_.compact((['a', 'b', null, false]: Array<?string | false>)): Array<void>);

/**
 * _.concat
 */
(_.concat(['a', 'b', 'c'], 'd'): Array<string>);
(_.concat(['a', 'b', 'c'])('d'): Array<string>);
(_.concat(['a', 'b', 'c'], ['d']): Array<string>);
(_.concat(null, 'd'): Array<?string>);
(_.concat(['a', 'b', 'c'], null): Array<?string>);
(_.concat(null, null): Array<any>);
// $ExpectError
(_.concat(['a', 'b', 'c'], 'd'): Array<void>);
// $ExpectError
(_.concat(['a', 'b', 'c'])('d'): Array<void>);
// $ExpectError
(_.concat(['a', 'b', 'c'], ['d']): Array<void>);
// $ExpectError
(_.concat(null, 'd'): Array<void>);
// $ExpectError
(_.concat(['a', 'b', 'c'], null): Array<void>);
// $ExpectError
(_.concat(null, null): Object);

/**
 * _.findIndex
 */
(_.findIndex(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): number);
(_.findIndex(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): number);
(_.findIndex({val: 'a'}, [{val: 'a'}, {val: 'b'}]): number);
(_.findIndex(['val', 'a'], [{val: 'a'}, {val: 'b'}]): number);
(_.findIndex('val', [{val: 'a'}, {val: 'b'}]): number);
// $ExpectError
(_.findIndex(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.findIndex(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.findIndex(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): number);

/**
 * _.flatten
 */
(_.flatten([['a', 'b'], ['c', 'd']]): Array<string>);
(_.flatten(null): Array<any>);
// $ExpectError
(_.flatten([['a', 'b'], ['c', 'd']]): Array<void>);
// $ExpectError
(_.flatten([['a', 'b'], ['c', ['d']]]): Array<string>);
// $ExpectError
(_.flatten(null): Object);

/**
 * _.fromPairs
 */
(_.fromPairs([['val', 'a'], ['val', 'b']]): {+[key: string]: string});
(_.fromPairs([['val', 'a'], ['val', 'b']]): {+[key: 'val']: string});
(_.fromPairs(null): {+[key: any]: any});
// $ExpectError
(_.fromPairs([['val', 'a'], ['val', 'b']]): {+[key: string]: void});
// $ExpectError
(_.fromPairs([['val', 'a'], ['val', 'b']]): {+[key: void]: string});
// $ExpectError
(_.fromPairs(null): Array<any>);

/**
 * _.head
 */
(_.head(['a', 'b', 'c']): ?string);
// $ExpectError
(_.head(['a', 'b', 'c']): string);
// $ExpectError
(_.head(['a', 'b', 'c']): void);

/**
 * _.intersection
 */
(_.intersection(['a', 'b'], ['c', 'd']): Array<string>);
(_.intersection(['a', 'b'])(['c', 'd']): Array<string>);
(_.intersection(['a', 'b'], null): Array<string>);
(_.intersection(null, ['c', 'd']): Array<string>);
(_.intersection(null, null): Array<any>);
// $ExpectError
(_.intersection(['a', 'b'], ['c', 'd']): Array<void>);
// $ExpectError
(_.intersection(['a', 'b'])(['c', 'd']): Array<void>);
// $ExpectError
(_.intersection(['a', 'b'], null): Array<void>);
// $ExpectError
(_.intersection(null, ['c', 'd']): Array<void>);
// $ExpectError
(_.intersection(null, null): Object);

/**
 * _.join
 */
(_.join(',', ['a', 'b', 'c']): string);
(_.join(',')(['a', 'b', 'c']): string);
// $ExpectError
(_.join(',', ['a', 'b', 'c']): void);
// $ExpectError
(_.join(',')(['a', 'b', 'c']): void);

/**
 * _.pull
 */
(_.pull('a', ['a', 'b', 'c']): Array<string>);
(_.pull('a')(['a', 'b', 'c']): Array<string>);
(_.pull('a', null): Array<string>);
// $ExpectError
(_.pull('a', ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pull('a')(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pull('a', null): Array<void>);

/**
 * _.pullAll
 */
(_.pullAll(['a'], ['a', 'b', 'c']): Array<string>);
(_.pullAll(['a'])(['a', 'b', 'c']): Array<string>);
(_.pullAll(['a'], null): Array<string>);
// $ExpectError
(_.pullAll(['a'], ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pullAll(['a'])(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pullAll(['a'], null): Array<void>);

/**
 * _.pullAt
 */
(_.pullAt([0], ['a', 'b', 'c']): Array<string>);
(_.pullAt([0])(['a', 'b', 'c']): Array<string>);
(_.pullAt([0], null): Array<any>);
// $ExpectError
(_.pullAt([0], ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pullAt([0])(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.pullAt([0], null): Object);

/**
 * _.slice
 */
(_.slice(0, 1, ['a', 'b', 'c']): Array<string>);
(_.slice(0, 1)(['a', 'b', 'c']): Array<string>);
(_.slice(0)(1)(['a', 'b', 'c']): Array<string>);
(_.slice(0, 1, null): Array<any>);
// $ExpectError
(_.slice(0, 1, ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.slice(0, 1)(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.slice(0)(1)(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.slice(0, 1, null): Object);

/**
 * _.tail
 */
(_.tail(['a', 'b', 'c']): Array<string>);
// $ExpectError
(_.tail(['a', 'b', 'c']): Array<void>);

/**
 * _.last
 */
(_.last(['a', 'b', 'c']): string);
// $ExpectError
(_.last(['a', 'b', 'c']): void);

/**
 * _.uniq
 */
(_.uniq(['a', 'b', 'c']): Array<string>);
(_.uniq(null): Array<any>);
// $ExpectError
(_.uniq(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.uniq(null): Object);

/**
 * _.uniqBy
 */
(_.uniqBy(el => el.val, [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.uniqBy(el => el.val)([{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.uniqBy('val', [{val: 'a'}, {val: 'b'}]): Array<Object>);
// $ExpectError
(_.uniqBy(el => el.val, [{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.uniqBy(el => el.val)([{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.uniqBy(el => el.notval, [{val: 'a'}, {val: 'b'}]): Array<Object>);

/* COLLECTION */

/**
 * _.every
 */
(_.every(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): boolean);
(_.every(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): boolean);
(_.every({val: 'a'}, [{val: 'a'}, {val: 'b'}]): boolean);
(_.every(['val', 'a'], [{val: 'a'}, {val: 'b'}]): boolean);
(_.every('val', [{val: 'a'}, {val: 'b'}]): boolean);
(_.every('val', null): boolean);
// $ExpectError
(_.every(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.every(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.every('val', null): void);
// $ExpectError
(_.every(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): boolean);

/**
 * _.filter
 */
(_.filter(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.filter(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.filter({val: 'a'}, [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.filter(['val', 'a'], [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.filter('val', [{val: 'a'}, {val: 'b'}]): Array<Object>);
// $ExpectError
(_.filter(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.filter(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.filter(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): Array<Object>);

/**
 * _.find
 */
(_.find(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): ?Object);
(_.find(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): ?Object);
(_.find({val: 'a'}, [{val: 'a'}, {val: 'b'}]): ?Object);
(_.find(['val', 'a'], [{val: 'a'}, {val: 'b'}]): ?Object);
(_.find('val', [{val: 'a'}, {val: 'b'}]): ?Object);
(_.find('val', null): void);
// $ExpectError
(_.find(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): Array<any>);
// $ExpectError
(_.find(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): Array<any>);
// $ExpectError
(_.find(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): ?Object);

/**
 * _.flatMap
 */
(_.flatMap(el => [el, el], ['a', 'b', 'c']): Array<string>);
(_.flatMap(el => [el, el])(['a', 'b', 'c']): Array<string>);
(_.flatMap(el => el, ['a', 'b', 'c']): Array<string>);
(_.flatMap(el => [el, el], null): Array<any>);
// $ExpectError
(_.flatMap(el => [el, el], ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.flatMap(el => [el, el])(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.flatMap(el => el, ['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.flatMap(el => [el, el], null): Object);

/**
 * _.includes
 */
(_.includes('a', ['a', 'b', 'c']): boolean);
(_.includes('a')(['a', 'b', 'c']): boolean);
(_.includes('a', 'abc'): boolean);
(_.includes('a', null): boolean);
// $ExpectError
(_.includes('a', ['a', 'b', 'c']): void);
// $ExpectError
(_.includes('a')(['a', 'b', 'c']): void);
// $ExpectError
(_.includes('a', 'abc'): void);
// $ExpectError
(_.includes('a', null): void);

/**
 * _.map
 */
(_.map(el => el.val, [{val: 'a'}, {val: 'b'}]): Array<string>);
(_.map(el => el.val)([{val: 'a'}, {val: 'b'}]): Array<string>);
(_.map('val', [{val: 'a'}, {val: 'b'}]): Array<string>);
(_.map(el => el.val, null): Array<any>);
// $ExpectError
(_.map(el => el.val, [{val: 'a'}, {val: 'b'}]): Array<void>);
// $ExpectError
(_.map(el => el.val)([{val: 'a'}, {val: 'b'}]): Array<void>);
// $ExpectError
(_.map('val', [{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.map(el => el.val, null): Object);

/**
 * _.reduce
 */
(_.reduce((acc, val) => acc + val, 0, [1, 2, 3]): number);
(_.reduce((acc, val) => acc + val, 0)([1, 2, 3]): number);
(_.reduce((acc, val) => acc + val)(0)([1, 2, 3]): number);
(_.reduce((acc, val) => acc + val, 0, null): number);
// $ExpectError
(_.reduce((acc, val) => acc + val, 0, [1, 2, 3]): void);
// $ExpectError
(_.reduce((acc, val) => acc + val, 0)([1, 2, 3]): void);
// $ExpectError
(_.reduce((acc, val) => acc + val)(0)([1, 2, 3]): void);
// $ExpectError
(_.reduce((acc, val) => acc + val, 0, null): void);

/**
 * _.reject
 */
(_.reject(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.reject(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.reject({val: 'a'}, [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.reject(['val', 'a'], [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.reject('val', [{val: 'a'}, {val: 'b'}]): Array<Object>);
// $ExpectError
(_.reject(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.reject(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.reject(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): Array<Object>);

/**
 * _.shuffle
 */
(_.shuffle(['a', 'b', 'c']): Array<string>);
(_.shuffle({a: 'a', b: 'b', c: 'c'}): {+[key: string]: string});
// $ExpectError
(_.shuffle(['a', 'b', 'c']): Array<void>);
// $ExpectError
(_.shuffle({a: 'a', b: 'b', c: 'c'}): {+[key: string]: void});

/**
 * _.size
 */
(_.size(['a', 'b', 'c']): number);
(_.size({a: 'a', b: 'b', c: 'c'}): number);
(_.size('abc'): number);
// $ExpectError
(_.size(['a', 'b', 'c']): void);
// $ExpectError
(_.size({a: 'a', b: 'b', c: 'c'}): void);
// $ExpectError
(_.size('abc'): void);

/**
 * _.some
 */
(_.some(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): boolean);
(_.some(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): boolean);
(_.some({val: 'a'}, [{val: 'a'}, {val: 'b'}]): boolean);
(_.some(['val', 'a'], [{val: 'a'}, {val: 'b'}]): boolean);
(_.some('val', [{val: 'a'}, {val: 'b'}]): boolean);
(_.some('val', null): boolean);
// $ExpectError
(_.some(el => el.val === 'a', [{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.some(el => el.val === 'a')([{val: 'a'}, {val: 'b'}]): void);
// $ExpectError
(_.some('val', null): void);
// $ExpectError
(_.some(el => el.notval === 'a', [{val: 'a'}, {val: 'b'}]): boolean);

/**
 * _.sortBy
 */
(_.sortBy(el => el.val, [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.sortBy(el => el.val)([{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.sortBy('val', [{val: 'a'}, {val: 'b'}]): Array<Object>);
(_.sortBy([el => el.val, el => el.val], [{val: 'a'}, {val: 'b'}]): Array<
  Object,
>);
// $ExpectError
(_.sortBy(el => el.val, [{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.sortBy(el => el.val)([{val: 'a'}, {val: 'b'}]): Object);
// $ExpectError
(_.sortBy(el => el.notval, [{val: 'a'}, {val: 'b'}]): Array<Object>);
// $ExpectError
(_.sortBy([el => el.notval, el => el.val], [{val: 'a'}, {val: 'b'}]): Array<
  Object,
>);

/* FUNCTION */

/**
 * _.debounce
 */
(_.debounce(1000, () => 'a'): () => string);
(_.debounce(1000)(() => 'a'): () => string);
// $ExpectError
(_.debounce(1000, () => 'a'): () => void);
// $ExpectError
(_.debounce(1000)(() => 'a'): () => void);

/**
 * _.negate
 */
(_.negate(() => true): () => boolean);
// $ExpectError
(_.negate(() => true): () => void);

/**
 * _.debounce
 */
(_.throttle(1000, () => 'a'): () => string);
(_.throttle(1000)(() => 'a'): () => string);
// $ExpectError
(_.throttle(1000, () => 'a'): () => void);
// $ExpectError
(_.throttle(1000)(() => 'a'): () => void);

/* LANG */

/**
 * _.eq
 */
(_.eq('a', 'b'): boolean);
(_.eq('a')('b'): boolean);
// $ExpectError
(_.eq('a', 'b'): void);
// $ExpectError
(_.eq('a')('b'): void);

/**
 * _.isArray
 */
(_.isArray([]): boolean);
// $ExpectError
(_.isArray([]): void);

/**
 * _.isEqual
 */
(_.isEqual({a: 'a'}, {b: 'b'}): boolean);
(_.isEqual({a: 'a'})({b: 'b'}): boolean);
// $ExpectError
(_.isEqual({a: 'a'}, {b: 'b'}): void);
// $ExpectError
(_.isEqual({a: 'a'})({b: 'b'}): void);

/**
 * _.isEmpty
 */
(_.isEmpty('a'): boolean);
// $ExpectError
(_.isEmpty('a'): void);

/**
 * _.isNaN
 */
(_.isNaN('a'): boolean);
// $ExpectError
(_.isNaN('a'): void);

/**
 * _.isNil
 */
(_.isNil('a'): boolean);
// $ExpectError
(_.isNil('a'): void);

/* MATH */

/**
 * _.sum
 */
(_.sum([1, 2, 3]): number);
(_.sum(null): number);
// $ExpectError
(_.sum(['a', 'b', 'c']): number);
// $ExpectError
(_.sum([1, 2, 3]): void);
// $ExpectError
(_.sum(null): void);

/* NUMBER */

/**
 * _.random
 */
(_.random(1, 2): number);
// $ExpectError
(_.random('a', 'b'): number);
// $ExpectError
(_.random(1, 2): void);

/* OBJECT */

/**
 * _.assign
 */
(_.assign({a: 'a'}, {b: 'b'}): {a: 'a', b: 'b'});
(_.assign({a: 'a'})({b: 'b'}): {a: 'a', b: 'b'});
(_.assign({a: 'a'}, {a: 'b', b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.assign({a: 'a'}, {b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.assign({a: 'a'})({b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.assign({a: 'a'}, {a: 'b', b: 'b'}): {a: 'a', b: 'b'});

/**
 * _.assignAll
 */
(_.assignAll([{a: 'a'}, {b: 'b'}]): {+[key: string]: string});
// $ExpectError
(_.assignAll([{a: 'a'}, {b: 'b'}]): {+[key: string]: number});
// $ExpectError
(_.assignAll([{a: 'a'}, {b: 'b'}]): {+[key: number]: string});

/**
 * _.get
 */
_.get('a', {a: 'a'});
_.get('a')({a: 'a'});
// $ExpectError
_.get(null, {a: 'a'});
// $ExpectError
_.get('a', []);

/**
 * _.getOr
 */
_.getOr('a', 'a', {a: 'a'});
_.getOr('a', 'a')({a: 'a'});
_.getOr('a')('a')({a: 'a'});
// $ExpectError
_.getOr('a', null, {a: 'a'});
// $ExpectError
_.getOr('a', 'a', []);

/**
 * _.invert
 */
(_.invert({a: 1, b: 2, c: 3}): {+[key: number]: string});
(_.invert(null): {+[key: any]: any});
// $ExpectError
(_.invert({a: 1, b: 2, c: 3}): {+[key: number]: number});
// $ExpectError
(_.invert({a: 1, b: 2, c: 3}): {+[key: string]: string});
// $ExpectError
(_.invert(null): Array<any>);

/**
 * _.keys
 */
(_.keys({a: 'a', b: 'b', c: 'c'}): Array<'a' | 'b' | 'c'>);
// $ExpectError
(_.keys({a: 'a', b: 'b', c: 'c'}): Array<'a' | 'b' | 'c' | 'd'>);
// $ExpectError
(_.keys({a: 'a', b: 'b', c: 'c'}): Array<void>);
// $ExpectError
(_.keys(null): Array<void>);

/**
 * _.mapKeys
 */
(_.mapKeys(key => 'a', {a: 'a', b: 'b'}): {+[key: 'a']: string});
(_.mapKeys(key => 'a')({a: 'a', b: 'b'}): {+[key: 'a']: string});
(_.mapKeys(key => 'a', null): {+[key: 'a']: any});
// $ExpectError
(_.mapKeys(key => 'a', {a: 'a', b: 'b'}): {+[key: 'b']: string});
// $ExpectError
(_.mapKeys(key => 'a')({a: 'a', b: 'b'}): {+[key: 'b']: string});
// $ExpectError
(_.mapKeys(key => 'a', null): {+[key: 'b']: any});
// $ExpectError
(_.mapKeys(key => 'a', {a: 'a', b: 'b'}): {+[key: 'a']: number});

/**
 * _.merge
 */
(_.merge({a: 'a'}, {b: 'b'}): {a: 'a', b: 'b'});
(_.merge({a: 'a'})({b: 'b'}): {a: 'a', b: 'b'});
(_.merge({a: 'a'}, {a: 'b', b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.merge({a: 'a'}, {b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.merge({a: 'a'})({b: 'b'}): {a: 'b', b: 'b'});
// $ExpectError
(_.merge({a: 'a'}, {a: 'b', b: 'b'}): {a: 'a', b: 'b'});

/**
 * _.mergeAll
 */
(_.mergeAll([{a: 'a'}, {b: 'b'}]): {+[key: string]: string});
// $ExpectError
(_.mergeAll([{a: 'a'}, {b: 'b'}]): {+[key: string]: number});
// $ExpectError
(_.mergeAll([{a: 'a'}, {b: 'b'}]): {+[key: number]: string});

/**
 * _.omit
 */
(_.omit(['a'], {a: 'a', b: 'b', c: 'c'}): Object);
(_.omit(['a'])({a: 'a', b: 'b', c: 'c'}): Object);
(_.omit(['a'], null): Object);
// $ExpectError
(_.omit(['a'], {a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.omit(['a'])({a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.omit(['a'], null): Array<any>);
// $ExpectError
(_.omit(['d'], {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.omit([1], {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.omit(['a'], {a: 'a', b: 'b', c: 'c'}): Array<any>);

/**
 * _.omitBy
 */
(_.omitBy(val => val === 'a', {a: 'a', b: 'b', c: 'c'}): Object);
(_.omitBy(val => val === 'a')({a: 'a', b: 'b', c: 'c'}): Object);
(_.omitBy(val => val === 'a', null): Object);
// $ExpectError
(_.omitBy(val => val === 'a', {a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.omitBy(val => val === 'a')({a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.omitBy(val => val === 'a', null): Array<any>);
// $ExpectError
(_.omitBy(val => val, {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.omitBy((val: number) => val === 'a', {a: 'a', b: 'b', c: 'c'}): Object);

/**
 * _.pick
 */
(_.pick(['a'], {a: 'a', b: 'b', c: 'c'}): Object);
(_.pick(['a'])({a: 'a', b: 'b', c: 'c'}): Object);
(_.pick(['a'], null): Object);
// $ExpectError
(_.pick(['a'], {a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.pick(['a'])({a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.pick(['a'], null): Array<any>);
// $ExpectError
(_.pick(['d'], {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.pick([1], {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.pick(['a'], {a: 'a', b: 'b', c: 'c'}): Array<any>);

/**
 * _.pickBy
 */
(_.pickBy(val => val === 'a', {a: 'a', b: 'b', c: 'c'}): Object);
(_.pickBy(val => val === 'a')({a: 'a', b: 'b', c: 'c'}): Object);
(_.pickBy(val => val === 'a', null): Object);
// $ExpectError
(_.pickBy(val => val === 'a', {a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.pickBy(val => val === 'a')({a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.pickBy(val => val === 'a', null): Array<any>);
// $ExpectError
(_.pickBy(val => val, {a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.pickBy((val: number) => val === 'a', {a: 'a', b: 'b', c: 'c'}): Object);

/**
 * _.update
 */
(_.update('a', el => el, {a: 'a', b: 'b', c: 'c'}): Object);
(_.update('a', el => el)({a: 'a', b: 'b', c: 'c'}): Object);
(_.update('a')(el => el)({a: 'a', b: 'b', c: 'c'}): Object);
(_.update('a', el => el, null): Object);
// $ExpectError
(_.update('a', el => el, {a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.update('a', el => el)({a: 'a', b: 'b', c: 'c'}): Array<any>);
// $ExpectError
(_.update('a')(el => el)({a: 'a', b: 'b', c: 'c'}): Array<any>);

/**
 * _.values
 */
(_.values({a: 'a', b: 'b', c: 'c'}): Array<string>);
(_.values(null): Array<any>);
// $ExpectError
(_.values({a: 'a', b: 'b', c: 'c'}): Array<void>);
// $ExpectError
(_.values(null): Object);

/**
 * _.toPairs
 */
(_.toPairs({a: 'a', b: 'b', c: 'c'}): Array<['a' | 'b' | 'c', string]>);
(_.toPairs(null): Array<[any, any]>);
// $ExpectError
(_.toPairs({a: 'a', b: 'b', c: 'c'}): Object);
// $ExpectError
(_.toPairs({a: 'a', b: 'b', c: 'c'}): Array<['a' | 'b' | 'c' | 'd', string]>);
// $ExpectError
(_.toPairs(null): Object);

/**
 * _.has
 */
(_.has('a', {a: 'a', b: 'b', c: 'c'}): boolean);
(_.has('a')({a: 'a', b: 'b', c: 'c'}): boolean);
(_.has('a', null): boolean);
// $ExpectError
(_.has('a', {a: 'a', b: 'b', c: 'c'}): void);
// $ExpectError
(_.has('a')({a: 'a', b: 'b', c: 'c'}): void);
// $ExpectError
(_.has('a', null): void);

/* STRING */

/**
 * _.camelCase
 */
(_.camelCase('a'): string);
(_.camelCase(null): string);
// $ExpectError
(_.camelCase('a'): void);
// $ExpectError
(_.camelCase(null): void);

/**
 * _.capitalize
 */
(_.capitalize('a'): string);
(_.capitalize(null): string);
// $ExpectError
(_.capitalize('a'): void);
// $ExpectError
(_.capitalize(null): void);

/**
 * _.padCharsStart
 */
(_.padCharsStart('a', 5, 'a'): string);
(_.padCharsStart('a', 5)('a'): string);
(_.padCharsStart('a')(5)('a'): string);
(_.padCharsStart('a', 5, null): string);
// $ExpectError
(_.padCharsStart('a', 5, 'a'): void);
// $ExpectError
(_.padCharsStart('a', 5)('a'): void);
// $ExpectError
(_.padCharsStart('a')(5)('a'): void);
// $ExpectError
(_.padCharsStart('a', 5, null): void);
// $ExpectError
(_.padCharsStart(null, 5, 'a'): string);
// $ExpectError
(_.padCharsStart('a', null, 'a'): string);

/**
 * _.replace
 */
(_.replace('a', 'A', 'abc'): string);
(_.replace('a', 'A')('abc'): string);
(_.replace('a')('A')('abc'): string);
(_.replace(/a/, 'A', 'abc'): string);
(_.replace('a', 'A', null): string);
// $ExpectError
(_.replace('a', 'A', 'abc'): void);
// $ExpectError
(_.replace('a', 'A')('abc'): void);
// $ExpectError
(_.replace('a')('A')('abc'): void);
// $ExpectError
(_.replace(/a/, 'A', 'abc'): void);
// $ExpectError
(_.replace('a', 'A', null): void);
// $ExpectError
(_.replace(null, 'A', 'abc'): string);
// $ExpectError
(_.replace('a', null, 'abc'): string);

/**
 * _.snakeCase
 */
(_.snakeCase('a'): string);
(_.snakeCase(null): string);
// $ExpectError
(_.snakeCase('a'): void);
// $ExpectError
(_.snakeCase(null): void);

/**
 * _.split
 */
(_.split(' ', 'a b c'): Array<string>);
(_.split(' ')('a b c'): Array<string>);
(_.split(' ', null): Array<string>);
// $ExpectError
(_.split(' ', 'a b c'): Object);
// $ExpectError
(_.split(' ')('a b c'): Object);
// $ExpectError
(_.split(' ', null): Object);
// $ExpectError
(_.split(null, 'a b c'): Array<string>);

/**
 * _.toString
 */
(_.toString(1): string);
(_.toString(true): string);
(_.toString(null): string);

/**
 * _.toUpper
 */
(_.toUpper('a'): string);
(_.toUpper(null): string);
// $ExpectError
(_.toUpper('a'): void);

/**
 * _.trim
 */
(_.trim('a'): string);
(_.trim(null): string);
// $ExpectError
(_.trim('a'): void);

/**
 * _.truncate
 */
(_.truncate({}, 'a'): string);
(_.truncate({})('a'): string);
(_.truncate({}, null): string);
// $ExpectError
(_.truncate({}, 'a'): void);
// $ExpectError
(_.truncate({})('a'): void);
// $ExpectError
(_.truncate({}, null): void);

/**
 * _.startsWith
 */
(_.startsWith('a', 'a'): boolean);
(_.startsWith('a')('a'): boolean);
(_.startsWith('a', null): boolean);
// $ExpectError
(_.startsWith('a', 'a'): void);
// $ExpectError
(_.startsWith('a')('a'): void);
// $ExpectError
(_.startsWith('a', null): void);

/* UTIL */

/**
 * _.compose
 */
(_.compose(
  () => 'f',
  () => 'e',
  () => 'd',
  () => 'c',
  () => 'b',
  () => 'a',
): () => 'f');
(_.compose(() => 'e', () => 'd', () => 'c', () => 'b', () => 'a'): () => 'e');
(_.compose(() => 'd', () => 'c', () => 'b', () => 'a'): () => 'd');
(_.compose(() => 'c', () => 'b', () => 'a'): () => 'c');
(_.compose(() => 'b', () => 'a'): () => 'b');
(_.compose(() => 'a'): () => 'a');
(_.compose(
  // $ExpectError
  () => 'f',
  () => 'e',
  () => 'd',
  () => 'c',
  () => 'b',
  () => 'a',
): () => 'g');
// $ExpectError
(_.compose(() => 'e', () => 'd', () => 'c', () => 'b', () => 'a'): () => 'f');
// $ExpectError
(_.compose(() => 'd', () => 'c', () => 'b', () => 'a'): () => 'e');
// $ExpectError
(_.compose(() => 'c', () => 'b', () => 'a'): () => 'd');
// $ExpectError
(_.compose(() => 'b', () => 'a'): () => 'c');
// $ExpectError
(_.compose(() => 'a'): () => 'b');

/**
 * _.cond
 */
(_.cond([[(a: 'a') => a === 'a', (a: 'a') => 'b']]): (a: 'a') => 'b');
// $ExpectError
(_.cond([[(a: 'a') => a === 'a', (a: 'a') => 'b']]): (a: 'b') => 'b');
// $ExpectError
(_.cond([[(a: 'a') => a === 'a', (a: 'a') => 'b']]): (a: 'a') => 'c');

/**
 * _.constant
 */
(_.constant('a'): () => 'a');
(_.constant(true): () => true);
// $ExpectError
(_.constant('a'): () => 'b');
// $ExpectError
(_.constant(true): () => false);

/**
 * _.flow
 */
(_.flow(
  () => 'a',
  () => 'b',
  () => 'c',
  () => 'd',
  () => 'e',
  () => 'f',
): () => 'f');
(_.flow(() => 'a', () => 'b', () => 'c', () => 'd', () => 'e'): () => 'e');
(_.flow(() => 'a', () => 'b', () => 'c', () => 'd'): () => 'd');
(_.flow(() => 'a', () => 'b', () => 'c'): () => 'c');
(_.flow(() => 'a', () => 'b'): () => 'b');
(_.flow(() => 'a'): () => 'a');
(_.flow(
  () => 'a',
  () => 'b',
  () => 'c',
  () => 'd',
  () => 'e',
  // $ExpectError
  () => 'f',
): () => 'g');
// $ExpectError
(_.flow(() => 'a', () => 'b', () => 'c', () => 'd', () => 'e'): () => 'f');
// $ExpectError
(_.flow(() => 'a', () => 'b', () => 'c', () => 'd'): () => 'e');
// $ExpectError
(_.flow(() => 'a', () => 'b', () => 'c'): () => 'd');
// $ExpectError
(_.flow(() => 'a', () => 'b'): () => 'c');
// $ExpectError
(_.flow(() => 'a'): () => 'b');

/**
 * _.identity
 */
(_.identity('a'): 'a');
(_.identity(true): true);
// $ExpectError
(_.identity('a'): 'b');
// $ExpectError
(_.identity(true): false);

/**
 * _.matches
 */
_.matches({a: 'a', b: 'b', c: 'c'});
// $ExpectError
_.matches('a');
// $ExpectError
_.matches([]);

/**
 * _.noop
 */
(_.noop(): void);

/**
 * _.stubTrue
 */
(_.stubTrue(): true);
// $ExpectError
(_.stubTrue(): false);

/**
 * _.overEvery
 */
(_.overEvery([(a: 'a') => true]): (a: 'a') => boolean);
// $ExpectError
(_.overEvery([(a: 'a') => a]): (a: 'a') => boolean);
// $ExpectError
(_.overEvery([(a: 'a') => true]): (a: 'b') => boolean);
// $ExpectError
(_.overEvery([(a: 'a') => true]): (a: 'a') => 'a');

/**
 * _.overSome
 */
(_.overSome([(a: 'a') => true]): (a: 'a') => boolean);
// $ExpectError
(_.overSome([(a: 'a') => a]): (a: 'a') => boolean);
// $ExpectError
(_.overSome([(a: 'a') => true]): (a: 'b') => boolean);
// $ExpectError
(_.overSome([(a: 'a') => true]): (a: 'a') => 'a');

/**
 * _.range
 */
(_.range(0, 1): Array<number>);
(_.range(0)(1): Array<number>);
// $ExpectError
(_.range(0, 1): Array<void>);
// $ExpectError
(_.range(0)(1): Array<void>);

/**
 * _.times
 */
(_.times(() => 'a', 1): Array<'a'>);
(_.times(() => 'a')(1): Array<'a'>);
// $ExpectError
(_.times(() => 'a', 1): Array<'b'>);
// $ExpectError
(_.times(() => 'a')(1): Array<'b'>);
