CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100),
    technology VARCHAR(100)
);

INSERT INTO projects(project_name, technology)
VALUES
('Portfolio Website', 'HTML,CSS,Node.js'),
('Calculator App', 'JavaScript');