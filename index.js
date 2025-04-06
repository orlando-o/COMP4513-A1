const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const { SUPABASE_API_KEY, SUPABASE_URL } = process.env;
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// put cors for everything
app.use(cors());
// Returns all the eras
app.get("/api/eras", async (req, res) => {
  let { data: eras, error } = await supabase.from("eras").select("*");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(eras);
});

// Returns all the galleries
app.get("/api/galleries", async (req, res) => {
  let { data: galleries, error } = await supabase.from("galleries").select("*");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(galleries);
});

// Returns just the specified gallery
app.get("/api/galleries/:id", async (req, res) => {
  let { data: galleries, error } = await supabase
    .from("galleries")
    .select("*")
    .eq("galleryId", req.params.id);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (galleries.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(galleries);
});

// Returns the galleries whose galleryCountry (case insensitive) begins with the provided substring
app.get("/api/galleries/country/:substring", async (req, res) => {
  let { data: galleries, error } = await supabase
    .from("galleries")
    .select("*")
    .ilike("galleryCountry", req.params.substring + "%");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (galleries.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(galleries);
});

// Returns all the artists
app.get("/api/artists", async (req, res) => {
  let { data: artists, error } = await supabase.from("artists").select("*");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(artists);
});

// Returns just the specified artist
app.get("/api/artists/:id", async (req, res) => {
  let { data: artists, error } = await supabase
    .from("artists")
    .select("*")
    .eq("artistId", req.params.id);

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (artists.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(artists);
});

// Returns the artists whose last name (case insensitive) begins with the provided substring
app.get("/api/artists/search/:substring", async (req, res) => {
  let { data: artists, error } = await supabase
    .from("artists")
    .select("*")
    .ilike("lastName", req.params.substring + "%");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (artists.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(artists);
});

// Returns the artists whose nationality (case insensitive) begins with the provided substring
app.get("/api/artists/country/:substring", async (req, res) => {
  let { data: artists, error } = await supabase
    .from("artists")
    .select("*")
    .ilike("nationality", req.params.substring + "%");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (artists.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(artists);
});

// Returns all the paintings
app.get("/api/paintings", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(paintings);
});

// Returns all the paintings, sorted by either title or yearOfWork
app.get("/api/paintings/sort/:sortCriteria", async (req, res) => {
  if (req.params.sortCriteria != "title" && req.params.sortCriteria != "year") {
    res.status(400).json({
      error: "Bad sort criteria. Choose either 'title' or 'year'",
    });
    return;
  }
  let sortCriteria = req.params.sortCriteria;
  if (sortCriteria == "year") {
    sortCriteria = "yearOfWork";
  }

  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .order(sortCriteria, { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(paintings);
});

// Returns just the specified painting
app.get("/api/paintings/:id", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .eq("paintingId", req.params.id)
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns the paintings whose title (case insensitive) contains the provided substring
app.get("/api/paintings/search/:substring", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .ilike("title", "%" + req.params.substring + "%")
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns the paintings between two years, ordered by yearOfWork
app.get("/api/paintings/years/:start/:end", async (req, res) => {
  if (req.params.end < req.params.start) {
    return res
      .status(400)
      .json({ error: "Please enter a valid year range: start / end" });
  }
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .lte("yearOfWork", req.params.end)
    .gte("yearOfWork", req.params.start)
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns all the paintings in a given gallery
app.get("/api/paintings/galleries/:id", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .eq("galleryId", req.params.id)
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns all the paintings by a given artist
app.get("/api/paintings/artist/:id", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .eq("artistId", req.params.id)
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns all the paintings by artists whose nationality begins with the provided substring
app.get("/api/paintings/artists/country/:substring", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintings")
    .select(
      `
        paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
        copyrightText, description, excerpt, yearOfWork, width, height, medium, 
        cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
        artists:artistId (*), 
        galleries:galleryId (*)
    `
    )
    .not("artists", "is", null)
    .ilike("artists.nationality", req.params.substring + "%")
    .order("title", { ascending: true });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns all the genres
app.get("/api/genres", async (req, res) => {
  let { data: genres, error } = await supabase.from("genres")
    .select(`genreId, genreName, description, wikiLink,
        eras:eraId (*)
        `);
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.json(genres);
});

// Returns just the specified genre
app.get("/api/genres/:id", async (req, res) => {
  let { data: genres, error } = await supabase
    .from("genres")
    .select(
      `genreId, genreName, description, wikiLink,
        eras:eraId (*)
        `
    )
    .eq("genreId", req.params.id);
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (genres.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(genres);
});

// Returns the genres used in a given painting
app.get("/api/genres/painting/:id", async (req, res) => {
  let { data: genres, error } = await supabase
    .from("paintinggenres")
    .select(
      `genres:genreId (genreId, genreName, era:eraId (*), description, wikiLink)`
    )
    .eq("paintingId", req.params.id)
    .order("genres(genreName)", { ascending: true }); // .order() syntax retrieved from User: salmon_suit at https://www.reddit.com/r/Supabase/comments/1frwfv0/order_by_joined_column/
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (genres.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(genres);
});

// Returns all the paintings for a given genre
app.get("/api/paintings/genre/:id", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintinggenres")
    .select(
      `
    genres:genreId (
      genreId, genreName, description, wikiLink,
      era:eraId (eraId, eraName, eraYears)
    ),
    paintings:paintingId (
         paintingId, imageFileName, title, shapeId, museumLink, accessionNumber,
         copyrightText, description, excerpt, yearOfWork, width, height, medium, 
         cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations,
         artists:artistId (*), 
         galleries:galleryId (*)
     )
        `
    )
    .eq("genreId", req.params.id)
    .order("paintings(yearOfWork)", { ascending: true });
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns all the paintings for a given era
app.get("/api/paintings/era/:id", async (req, res) => {
  let { data: paintings, error } = await supabase
    .from("paintinggenres")
    .select(
      `
        genres:genreId (genreId, genreName, era:eraId (*), description, wikiLink),
        paintings:paintingId (paintingId , title, yearOfWork)
        `
    )
    .not("genres", "is", null)
    .eq("genres.eraId", req.params.id)
    .order("paintings(yearOfWork)", { ascending: true });
  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (paintings.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(paintings);
});

// Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (fewest to most)
app.get("/api/counts/genres", async (req, res) => {
  let { data: genres, error } = await supabase.from("genres").select(
    `genreName,
     paintinggenres:genreId (count)
     ` // count syntax retrieved from user: easylancer at https://www.reddit.com/r/Supabase/comments/13wlr6n/is_it_possible_to_select_count_in_a_relation/
  );

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  } else if (genres.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  const sortedGenres = genres.sort((a, b) => {
    return a.paintinggenres[0].count - b.paintinggenres[0].count;
  }); // couldn't get .order() to function given the (count), so I had to write my own JS, rather than rely on the API.

  res.json(genres);
});

// Returns the artist name and the number of paintings for each artist, sorted by the number of paintings (most to fewest).
app.get("/api/counts/artists", async (req, res) => {
  let { data: artists, error } = await supabase.from("artists").select(
    `
        firstName,
        lastName,    
        paintings:artistId (count)
        `
  );

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  const result = artists.map((artist) => ({
    fullName: artist.firstName
      ? artist.firstName + " " + artist.lastName
      : artist.lastName,
    numPaintings: artist.paintings[0].count,
  }));

  result.sort((a, b) => b.numPaintings - a.numPaintings);

  res.json(result);
});

// Returns the genre name and the number of paintings for each genre, sorted by the number of paintings (most to least) for genres having over some set number of paintings
app.get("/api/counts/topgenres/:threshold", async (req, res) => {
  const threshold = parseInt(req.params.threshold);
  if (threshold < 1) {
    res.status(400).json({ error: "Threshold must be greater than 0." });
    return;
  }
  let { data: genres, error } = await supabase.from("genres").select(
    `genreName,
     paintinggenres:genreId (count)
     `
  );

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  const result = genres.filter(
    (genre) => genre.paintinggenres[0].count > threshold
  );

  result.sort((a, b) => b.paintinggenres[0].count - a.paintinggenres[0].count);

  if (result.length == 0) {
    res.status(404).json({ error: "No data found matching that criteria." });
    return;
  }

  res.json(result);
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
