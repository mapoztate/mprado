import flow from 'lodash/flow';
export function then(fn) {
  return p => Promise.resolve(p).then(fn);
}
const filterPromiseSymbol = Symbol('filterPromiseSymbol');
export function onlySuccessfulPromises(promises) {
  return Promise.all(promises.map(p => p.catch(() => filterPromiseSymbol))).then(results => results.filter(result => result !== filterPromiseSymbol));
}
function wrapFlowAsync(fn) {
  return async arg => fn(await arg);
}
export function flowAsync(fns) {
  return flow(fns.map(fn => wrapFlowAsync(fn)));
}