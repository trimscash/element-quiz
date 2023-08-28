/*
  Warnings:

  - You are about to drop the `Element` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Element";

-- CreateTable
CREATE TABLE "todays_atom" (
    "id" SERIAL NOT NULL,
    "atomic_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todays_atom_pkey" PRIMARY KEY ("id")
);
