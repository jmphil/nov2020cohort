SET search_path TO restaurant;

-- CREATE TABLE restaurants (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar, 
--     distance_in_miles_from_HeadQuarters numeric,
--     stars integer,
--     category varchar,
--     favorite_dish varchar, 
--     does_takeout boolean,
--     last_time_you_ate_there date
-- );

-- INSERT INTO restaurants VALUES 
-- (DEFAULT, 'PapaJohns', 10, 4, 'pizza', 'the works', TRUE, '01-10-21'),
-- (DEFAULT, 'Dominos', 12, 3, 'pizza', 'thin crust bacon', TRUE, '12-10-20'),
-- (DEFAULT, 'PizzaHut', 12, 3, 'pizza', 'stuffed crust pepporoni', TRUE, '01-01-21'),
-- (DEFAULT, 'MellowMushroom', 15, 5, 'pizza', 'house special', TRUE, '06-20-20');

-- The names of the restaurants that you gave a 5 stars to

-- The favorite dishes of all 5-star restaurants
-- The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
-- restaurants in the category of 'BBQ'
-- restaurants that do take out
-- restaurants that do take out and is in the category of 'BBQ'
-- restaurants within 2 miles
-- restaurants you haven't ate at in the last week
-- restaurants you haven't ate at in the last week and has 5 stars

