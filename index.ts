const preduce = <T, U>(array: Array<T>, initialValue: U, reducer: (initial: U, current: T, idx?: number) => U) => array.reduce(reducer, initialValue);

export default preduce;