/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Customer";

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "favoriteColor" TEXT NOT NULL,
    "observation" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);
