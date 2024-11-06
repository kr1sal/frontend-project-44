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

  /**
   * Сalled when an instance of a class is created
   * @param {function} lambda - saved in the instance by default
   */
  constructor(lambda = () => {}) {
    this.#lambda = lambda;
    this.#onSuccess = () => {};
    this.#onFail = () => {};
  }

  /**
   * Execute the lambda passed or saved in the Action instance
   * @param {function} lambda - saved in the instance by default
   * @returns {boolean}
   */
  execute(lambda = this.#lambda) {
    lambda();
    const isSuccess = this.#result ?? true;
    this.#result = undefined;
    if (isSuccess === true) this.#onSuccess();
    else this.#onFail();
    return isSuccess;
  }

  /**
   * Terminates the Action instance with a result of true and executes the onSuccess lambda
   * @param {function} onSuccess - saved in the instance by default
   * @returns {boolean}
   */
  success(onSuccess = this.#onSuccess) {
    if (this.#result !== undefined) throw Error('Action call more than 1 success and/or fail.');
    this.#onSuccess = onSuccess;
    this.#result = true;
    return true;
  }

  /**
   * Terminates the Action instance with a result of false and executes the onFail lambda
   * @param {function} onFail - saved in the instance by default
   * @returns {boolean}
   */
  fail(onFail = this.#onFail) {
    if (this.#result !== undefined) throw Error('Action call more than 1 success and/or fail.');
    this.#onFail = onFail;
    this.#result = false;
    return false;
  }
}

export default Action;
