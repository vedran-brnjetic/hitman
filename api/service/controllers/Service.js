'use strict';

/**
 * Service.js controller
 *
 * @description: A set of functions called "actions" for managing `Service`.
 */

module.exports = {

  /**
   * Retrieve service records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.service.search(ctx.query);
    } else {
      return strapi.services.service.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a service record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.service.fetch(ctx.params);
  },

  /**
   * Count service records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.service.count(ctx.query);
  },

  /**
   * Create a/an service record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.service.add(ctx.request.body);
  },

  /**
   * Update a/an service record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.service.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an service record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.service.remove(ctx.params);
  }
};
