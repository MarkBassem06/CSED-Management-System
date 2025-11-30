// this file sets up and exports the Prisma Client for database access
// imports
import { PrismaClient } from '../generated/prisma/index.js';

// initialize Prisma Client with explicit database URL from environment
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Change DATABASE_URL to whatever your env var is named
    },
  },
});

export default prisma;
