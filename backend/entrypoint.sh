#!/bin/sh
npx prisma generate
npx prisma migrate dev
exec npm run start:dev
