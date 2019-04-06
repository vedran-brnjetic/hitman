'use strict';

/**
 * Hitman.js controller
 *
 * @description: A set of functions called "actions" for managing `Hitman`.
 */

module.exports = {

  /**
   * Retrieve hitman records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hitman.search(ctx.query);
    } else {
      return strapi.services.hitman.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hitman record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hitman.fetch(ctx.params);
  },

  /**
   * Count hitman records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hitman.count(ctx.query);
  },

  /**
   * Create a/an hitman record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hitman.add(ctx.request.body);
  },

  /**
   * Update a/an hitman record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hitman.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hitman record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hitman.remove(ctx.params);
  }
};
