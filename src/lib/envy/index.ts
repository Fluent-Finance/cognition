export const prerender = true;

import dotenv from 'dotenv'

dotenv.config()

export const env = {
  DB_URL: import.meta.env.DATABASE_URL,
}
