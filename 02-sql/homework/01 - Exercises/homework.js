/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movies WHERE duration < 90';

const ejercicio03 = 'SELECT * FROM movies WHERE year>=1930 and year<= 1940;';

const ejercicio04 = 'SELECT * FROM movies WHERE title LIKE '%til%';';

const ejercicio05 = 'SELECT title, actors  FROM movies WHERE ARRAY_LENGTH(actors,1)=1;';

const ejercicio06 = 'SELECT title,(SELECT ROUND(AVG(rating),2) FROM unnest(ratings) AS t(rating))AS rating FROM movies ORDER BY rating DESC;';

const ejercicio07 = 'SELECT title, actors FROM movies WHERE title LIKE '%Fastand%' AND year=2016;'

//cantidad de peliculas en que trabajaron los actores
const extra1= 'SELECT actor, COUNT(*) AS cantidad FROM( SELECT unnest(actors) AS actor FROM movies) GROUP BY actor ORDER BY cantidad DESC;'


module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
