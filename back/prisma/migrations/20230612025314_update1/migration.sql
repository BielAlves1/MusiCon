-- AlterTable
ALTER TABLE `publicacao` ADD COLUMN `deslike` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `like` INTEGER NOT NULL DEFAULT 0;
