class Action {
  #lambda;

  #onSuccess;

  #onFail;

  #result;

  /**
     * @param {function} lambda
     */
  set lambda(lambda) {
    this.#lambda = lambda;
  }

  /**
     * @param {function} onSuccess
     */
  set onSuccess(onSuccess) {
    this.#onSuccess = onSuccess;
  }

  /**
     * @param {function} onFail
     */
  set onFail(onFail) {
    this.#onFail = onFail;
  }

  execute(lambda = this.#lambda) {
    if (typeof lambda !== 'function') throw Error('Action lambda must be a function.');
    lambda();
    const isSuccess = this.#result;
    this.#result = undefined;
    return isSuccess ?? true;
  }

  success() {
    if (this.#onSuccess) this.#onSuccess();
    if (this.#result) throw Error('Action call more than 1 success and/or fail.');
    this.#result = true;
    return true;
  }

  fail() {
    if (this.#onFail) this.#onFail();
    if (this.#result) throw Error('Action call more than 1 success and/or fail.');
    this.#result = false;
    return false;
  }
}

export default Action;
