-- CreateTable
CREATE TABLE `Usuario` (
    `id_User` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id_User`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfil` (
    `id_User` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `data_Nascimento` DATETIME(3) NOT NULL,
    `qntd_Amigos` INTEGER NOT NULL DEFAULT 0,
    `nivel_Perfil` INTEGER NOT NULL DEFAULT 0,
    `tipo` VARCHAR(191) NOT NULL,
    `genero_Musical` VARCHAR(191) NOT NULL,
    `instru_Musical` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_User`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Publicacao` (
    `id_Pub` INTEGER NOT NULL AUTO_INCREMENT,
    `id_User` INTEGER NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `data_horario` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `img` VARCHAR(191) NULL,

    PRIMARY KEY (`id_Pub`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentario` (
    `id_Coment` INTEGER NOT NULL AUTO_INCREMENT,
    `id_User` INTEGER NOT NULL,
    `id_Pub` INTEGER NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `data_horario` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_Coment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resposta` (
    `id_Resp` INTEGER NOT NULL AUTO_INCREMENT,
    `id_User` INTEGER NOT NULL,
    `id_Comentario` INTEGER NOT NULL,
    `conteudo` VARCHAR(191) NOT NULL,
    `data_horario` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_Resp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `id_Curso` INTEGER NOT NULL AUTO_INCREMENT,
    `curso` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `foto_curso` VARCHAR(191) NULL,
    `instrumento` VARCHAR(191) NOT NULL,
    `total_horas` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id_Curso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modulo` (
    `id_Modulo` INTEGER NOT NULL AUTO_INCREMENT,
    `id_Curso` INTEGER NOT NULL,
    `modulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `num_ordem` INTEGER NOT NULL,

    PRIMARY KEY (`id_Modulo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aula` (
    `id_Aula` INTEGER NOT NULL AUTO_INCREMENT,
    `id_Modulo` INTEGER NOT NULL,
    `Aula_Nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `video_aula` VARCHAR(191) NULL,
    `material` VARCHAR(191) NULL,
    `num_ordem` INTEGER NOT NULL,

    PRIMARY KEY (`id_Aula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Perfil` ADD CONSTRAINT `Perfil_id_User_fkey` FOREIGN KEY (`id_User`) REFERENCES `Usuario`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Publicacao` ADD CONSTRAINT `Publicacao_id_User_fkey` FOREIGN KEY (`id_User`) REFERENCES `Usuario`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_id_User_fkey` FOREIGN KEY (`id_User`) REFERENCES `Usuario`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentario` ADD CONSTRAINT `Comentario_id_Pub_fkey` FOREIGN KEY (`id_Pub`) REFERENCES `Publicacao`(`id_Pub`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_id_User_fkey` FOREIGN KEY (`id_User`) REFERENCES `Usuario`(`id_User`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_id_Comentario_fkey` FOREIGN KEY (`id_Comentario`) REFERENCES `Comentario`(`id_Coment`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modulo` ADD CONSTRAINT `Modulo_id_Curso_fkey` FOREIGN KEY (`id_Curso`) REFERENCES `Curso`(`id_Curso`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_id_Modulo_fkey` FOREIGN KEY (`id_Modulo`) REFERENCES `Modulo`(`id_Modulo`) ON DELETE RESTRICT ON UPDATE CASCADE;
