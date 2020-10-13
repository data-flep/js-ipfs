'use strict'

const addAll = require('./add-all')
const last = require('it-last')
const configure = require('./lib/configure')

/**
 * @typedef {import("./lib/core").ClientOptions} ClientOptions
 */

/**
 * @param {ClientOptions} options
 */
module.exports = (options) => {
  const all = addAll(options)

  return configure(() => {
    /**
     * @type {import('../../ipfs-core/src/components/add').Add<import('.').HttpOptions>}
     */
    async function add (input, options = {}) { // eslint-disable-line require-await
      // @ts-ignore
      return last(all(input, options))
    }
    return add
  })(options)
}
