CREATE TABLE customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(1024),
    NAME VARCHAR(64),
    birthday VARCHAR(64),
    gender VARCHAR(64),
    job VARCHAR(64)
) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;


alter table customer add createdate datetime;
alter table customer add isdeleted int;

update customer set createdate = now();
update customer set isdeleted = 0;
