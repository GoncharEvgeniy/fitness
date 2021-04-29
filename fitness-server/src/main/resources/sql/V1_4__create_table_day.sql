create table day
(
    `id`      BIGINT(20) NOT NULL AUTO_INCREMENT,
    `date`    DATE       NULL,
    `user_id` BIGINT     NULL,
    PRIMARY KEY (`id`),
    constraint user_id
        foreign key (user_id) references usrs (id)
)
    COLLATE = 'utf8mb4_0900_ai_ci'
    ENGINE = InnoDB
;