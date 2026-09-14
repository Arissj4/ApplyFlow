/*
  Warnings:

  - You are about to drop the column `refresh_toker` on the `accounts` table. All the data in the column will be lost.
  - Added the required column `refresh_token` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "refresh_toker",
ADD COLUMN     "refresh_token" TEXT NOT NULL;
