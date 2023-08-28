-- CreateTable
CREATE TABLE "Element" (
    "id" SERIAL NOT NULL,
    "element" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Element_pkey" PRIMARY KEY ("id")
);
