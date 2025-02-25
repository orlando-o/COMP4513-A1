# COMP4513 (Winter 2025)
### Assignment 1 - Node API, Orlando Ormon, February 2025
## Project Overview
This repository contains the code for Assignment 1 in COMP4513. The assignment is an API that was built using Node.js, with data stored in a Supabase database. The application is hosted on Render, allowing users to query various endpoints to retrieve detailed information. The data is returned in JSON format, and the API includes error handling for cases such as invalid parameters or missing data.

## Built With:
 - Node.Js - JS Runtime
 - Express - Routing
 - Supabase - Online Database & Query Builder
 - Render - Hosting

## API Endpoints
| **Endpoint**                         | **Description**                                                                                                       |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `/api/eras`                          | Returns all the eras                                                                                                  |
| `/api/galleries`                     | Returns all the galleries                                                                                             |
| `/api/galleries/ref`                 | Returns the specified gallery                                                                                         |
| `/api/galleries/country/substring`   | Returns galleries whose `galleryCountry` begins with the provided substring                                           |
| `/api/artists`                       | Returns all the artists                                                                                               |
| `/api/artists/ref`                   | Returns the specified artist                                                                                          |
| `/api/artists/search/substring`      | Returns artists whose last name begins with the provided substring                                                    |
| `/api/artists/country/substring`     | Returns artists whose nationality begins with the provided substring                                                  |
| `/api/paintings`                     | Returns all paintings                                                                                                 |
| `/api/paintings/sort/titleORyear`    | Returns all paintings, sorted by either `title` or `yearOfWork`                                                       |
| `/api/paintings/ref`                 | Returns the specified painting                                                                                        |
| `/api/paintings/search/substring`    | Returns paintings whose `title` contains the provided substring                                                       |
| `/api/paintings/years/start/end`     | Returns paintings between two years, ordered by `yearOfWork`                                                          |
| `/api/paintings/galleries/ref`       | Returns all paintings in a given gallery                                                                              |
| `/api/paintings/artist/ref`          | Returns all paintings by a given artist                                                                               |
| `/api/paintings/artists/country/ref` | Returns all paintings by artists whose nationality begins with the provided substring                                 |
| `/api/genres`                        | Returns all the genres                                                                                                |
| `/api/genres/ref`                    | Returns the specified genre                                                                                           |
| `/api/genres/painting/ref`           | Returns genres used in a given painting, ordered by `genreName`                                                       |
| `/api/paintings/genre/ref`           | Returns all paintings for a given genre                                                                               |
| `/api/paintings/era/ref`             | Returns all paintings for a given era                                                                                 |
| `/api/counts/genres`                 | Returns genre names and the number of paintings for each genre, sorted by the number of paintings (fewest to most)    |
| `/api/counts/artists`                | Returns artist names (first and last) and the number of paintings for each artist, sorted by most to fewest paintings |
| `/api/counts/topgenres/ref`          | Returns genre names and the number of paintings for genres with more than a set number of paintings                   |

## Links For Testing Purposes:

1. [https://comp4513-a1-orlando-ormon.onrender.com/api/eras](https://comp4513-a1-orlando-ormon.onrender.com/api/eras)
2. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/years/1800/1850](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/years/1800/1850)
3. [https://comp4513-a1-orlando-ormon.onrender.com/api/galleries](https://comp4513-a1-orlando-ormon.onrender.com/api/galleries)
4. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/galleries/5](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/galleries/5)
5. [https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/30](https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/30)
6. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artist/16](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artist/16)
7. [https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/Calgary](https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/Calgary)
8. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artist/666](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artist/666)
9. [https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/country/fra](https://comp4513-a1-orlando-ormon.onrender.com/api/galleries/country/fra)
10. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artists/country/tial](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/artists/country/tial)
11. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists](https://comp4513-a1-orlando-ormon.onrender.com/api/artists)
12. [https://comp4513-a1-orlando-ormon.onrender.com/api/genres](https://comp4513-a1-orlando-ormon.onrender.com/api/genres)
13. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists/12](https://comp4513-a1-orlando-ormon.onrender.com/api/artists/12)
14. [https://comp4513-a1-orlando-ormon.onrender.com/api/genres/76](https://comp4513-a1-orlando-ormon.onrender.com/api/genres/76)
15. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists/1223423](https://comp4513-a1-orlando-ormon.onrender.com/api/artists/1223423)
16. [https://comp4513-a1-orlando-ormon.onrender.com/api/genres/painting/408](https://comp4513-a1-orlando-ormon.onrender.com/api/genres/painting/408)
17. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists/search/ma](https://comp4513-a1-orlando-ormon.onrender.com/api/artists/search/ma)
18. [https://comp4513-a1-orlando-ormon.onrender.com/api/genres/painting/jsdfhg](https://comp4513-a1-orlando-ormon.onrender.com/api/genres/painting/jsdfhg)
19. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists/search/MA](https://comp4513-a1-orlando-ormon.onrender.com/api/artists/search/MA)
20. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/genre/78](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/genre/78)
21. [https://comp4513-a1-orlando-ormon.onrender.com/api/artists/country/fra](https://comp4513-a1-orlando-ormon.onrender.com/api/artists/country/fra)
22. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/era/2](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/era/2)
23. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings)
24. [https://comp4513-a1-orlando-ormon.onrender.com/api/counts/genres](https://comp4513-a1-orlando-ormon.onrender.com/api/counts/genres)
25. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/sort/year](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/sort/year)
26. [https://comp4513-a1-orlando-ormon.onrender.com/api/counts/artists](https://comp4513-a1-orlando-ormon.onrender.com/api/counts/artists)
27. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/63](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/63)
28. [https://comp4513-a1-orlando-ormon.onrender.com/api/counts/topgenres/20](https://comp4513-a1-orlando-ormon.onrender.com/api/counts/topgenres/20)
29. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/port](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/port)
30. [https://comp4513-a1-orlando-ormon.onrender.com/api/counts/topgenres/2034958](https://comp4513-a1-orlando-ormon.onrender.com/api/counts/topgenres/2034958)
31. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/pORt](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/pORt)
32. [https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/como1ly](https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/search/como1ly)
