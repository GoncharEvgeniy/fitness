CREATE TABLE `user_role`
(
    `id`       BIGINT(20)   NOT NULL,
    `name`     VARCHAR(255) NULL DEFAULT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
)
    COLLATE = 'utf8mb4_0900_ai_ci'
    ENGINE = InnoDB
;