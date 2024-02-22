'use strict';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    url: process.env.PRO_DB_URL || 'localhost',
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3000,
  },
  db: {
    url: process.env.PRO_DB_URL || 'localhost',
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
