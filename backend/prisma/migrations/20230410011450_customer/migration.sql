-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "favoriteColor" TEXT NOT NULL,
    "observation" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
