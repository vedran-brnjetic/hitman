'use strict';

/**
 * Servicerequest.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicerequest`.
 */

module.exports = {

  /**
   * Retrieve servicerequest records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.servicerequest.search(ctx.query);
    } else {
      return strapi.services.servicerequest.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a servicerequest record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.servicerequest.fetch(ctx.params);
  },

  /**
   * Count servicerequest records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.servicerequest.count(ctx.query);
  },

  /**
   * Create a/an servicerequest record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicerequest.add(ctx.request.body);
  },

  /**
   * Update a/an servicerequest record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicerequest.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicerequest record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicerequest.remove(ctx.params);
  }
};
