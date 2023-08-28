/*
  Warnings:

  - You are about to drop the `todays_atom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "todays_atom";

-- CreateTable
CREATE TABLE "daily_atom" (
    "id" SERIAL NOT NULL,
    "atomic_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_atom_pkey" PRIMARY KEY ("id")
);
