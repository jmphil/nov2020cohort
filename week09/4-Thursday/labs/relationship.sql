-- CREATE TABLE  author (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );
-- CREATE TABLE articles (
--     id serial PRIMARY KEY, 
--     title varchar, 
--     author_id integer REFERENCES author (id)
-- );

-- INSERT INTO author VALUES
-- (DEFAULT, 'Matt'),
-- (DEFAULT, 'Joe'),
-- (DEFAULT, 'John'),
-- (DEFAULT, 'Luke'),
-- (DEFAULT, 'Peter'),
-- (DEFAULT, 'Judah'),
-- (DEFAULT, 'Shepherd'),
-- (DEFAULT, 'Eli');

-- INSERT INTO  articles VALUES
-- (DEFAULT, 'Short stories', 3),
-- (DEFAULT, 'News articles', 1),
-- (DEFAULT, 'Biography', 8),
-- (DEFAULT, 'Auto-biography', 4),
-- (DEFAULT, 'Blog posts', 6),
-- (DEFAULT, 'Tweets', 2),
-- (DEFAULT, 'News letter', 5),
-- (DEFAULT, 'Email list', 7);

-- CREATE TABLE groups (
--     id SERIAL PRIMARY KEY,
--     name varchar(100)
-- );
-- CREATE TABLE member (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );
-- CREATE TABLE membership(
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups (id),
--     member_id integer REFERENCES member (id)
-- );
-- INSERT INTO groups VALUES 
-- (DEFAULT, 'Atlanta JavaScript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES 
-- (DEFAULT, 1, 9),
-- (DEFAULT, 2, 9),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 4, 9),
-- (DEFAULT, 1, 2),
-- (DEFAULT, 2, 2),
-- (DEFAULT, 2, 3),
-- (DEFAULT, 2, 4),
-- (DEFAULT, 2, 5),
-- (DEFAULT, 3, 6),
-- (DEFAULT, 3, 7),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 4, 9);

-- SELECT * 
-- FROM groups
-- INNER JOIN membership
-- ON groups.id = membership.group_id
-- INNER JOIN member 
-- ON membership.group_id = member.id

--cartesian join
-- CREATE TABLE blouses(
--     id SERIAL PRIMARY KEY,
--     description varchar(100)
-- );

-- INSERT INTO blouses VALUES
-- (DEFAULT, 'red polka dots'),
-- (DEFAULT, 'yellow sun flowers'),
-- (DEFAULT, 'white with brown buttons'),
-- (DEFAULT, 'coding t-shirt');

-- CREATE TABLE pants(
--     id SERIAL PRIMARY KEY,
--     description varchar(100),
--     url img pants 
-- );

-- INSERT INTO pants VALUES
-- (DEFAULT, 'blue jeans'),
-- (DEFAULT, 'black jeans'),
-- (DEFAULT, 'brown bell bottoms'),
-- (DEFAULT, 'blue slacks');

-- CREATE TABLE shoes(
--     id SERIAL PRIMARY KEY,
--     description varchar(100)
-- );

-- INSERT INTO shoes VALUES
-- (DEFAULT, 'black jordans'),
-- (DEFAULT, 'red high heels'),
-- (DEFAULT, 'yellow flip flops'),
-- (DEFAULT, 'brown birkenstock');

-- select blouses.description as blouses, pants.description as pants, shoes.description as shoes
-- from blouses, pants, shoes;

















