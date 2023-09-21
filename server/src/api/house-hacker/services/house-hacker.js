'use strict';

/**
 * house-hacker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::house-hacker.house-hacker');
