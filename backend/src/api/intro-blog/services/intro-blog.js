'use strict';

/**
 * intro-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::intro-blog.intro-blog');
