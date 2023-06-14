/*
  Warnings:

  - You are about to drop the column `deslike` on the `publicacao` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `comentario` ADD COLUMN `like` INTEGER NOT NULL DEFAULT 0,
    MODIFY `conteudo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `publicacao` DROP COLUMN `deslike`,
    MODIFY `conteudo` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `resposta` ADD COLUMN `like` INTEGER NOT NULL DEFAULT 0,
    MODIFY `conteudo` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_user_name_key` ON `Usuario`(`user_name`);
