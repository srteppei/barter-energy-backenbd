CREATE TABLE `contact` (
  `contact_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(250) NOT NULL,
  `email` VARCHAR(250) NOT NULL UNIQUE
)