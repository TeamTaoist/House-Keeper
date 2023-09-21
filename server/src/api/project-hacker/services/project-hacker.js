'use strict';

/**
 * project-hacker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-hacker.project-hacker');
