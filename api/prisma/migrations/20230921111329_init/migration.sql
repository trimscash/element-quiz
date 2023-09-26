-- CreateTable
CREATE TABLE "daily_element" (
    "id" SERIAL NOT NULL,
    "atomic_num" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "daily_element_pkey" PRIMARY KEY ("id")
);
