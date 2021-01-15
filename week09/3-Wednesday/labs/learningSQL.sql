-- DROP TABLE student;

-- CREATE TABLE student (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     website varchar,
--     github_username varchar,
--     point integer DEFAULT 0,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean DEFAULT FALSE
    
-- );


-- INSERT INTO student VALUES 
-- (DEFAULT, 'Matt', 'matt@live.com', 'jmphil', 24, 'M', '2020-11-09', FALSE),
-- (DEFAULT, 'Matt', 'matt@live.com', 'jmphil', 100, 'M', '2020-11-09', FALSE),
-- (DEFAULT, 'Matt', 'matt@live.com', 'jmphil', 60, 'M', '2020-11-09', FALSE);
-- (DEFAULT, 'Matt', 'matt@live.com', 'jmphil', 80, 'M', '2020-11-09', FALSE);

-- INSERT INTO student (name, website, github_username, gender, cohort_start_date)
-- VALUES ('Donald', 'dt45@live.com', 'dtgit', 'M', '2017-01-20')

-- UPDATE student SET graduated = TRUE;

-- UPDATE student SET point = 99, graduated = FALSE WHERE id = 4;

-- DELETE FROM student WHERE id = 4;

-- SELECT * FROM student;

-- SELECT name, website FROM student WHERE id = 12;

-- ALTER TABLE student ADD age integer DEFAULT 18;

-- ALTER TABLE student DROP COLUMN gender;


-- SELECT name, point FROM student ORDER BY point DESC;