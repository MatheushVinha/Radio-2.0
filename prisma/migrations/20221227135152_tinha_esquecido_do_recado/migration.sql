/*
  Warnings:

  - Added the required column `Recado` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `Recado` VARCHAR(191) NOT NULL;
