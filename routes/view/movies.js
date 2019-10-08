const express = require("express");
const router = express.Router();
//upload video
const multer = require("multer");
const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,'uploads/')
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+'-'+file.originalname)
  }
})

const upload = multer ({storage});
//Model 
const Movie = require("../../models/Movie");

router.get("/movies/add",async (req, res) => {
  const category=[
    "Comedy",
    "Drama",
    "Action",
    "Terror",
    "Documentation"
    
  ];
  const type=[
    "Movies",
    "Series"
  ];

  const language=[
    "English",
    "Spanish",
    "French",
    "Germany"
  ];

  const subtitle=[
    "English",
    "Spanish",
    "French",
    "Germany",
    "none"
  ];

  const dubbing=[
    "English",
    "Spanish",
    "French",
    "Germany",
    "none"
  ];

  res.render("./movies/new-movie",{category,type,language,subtitle,dubbing});
});

router.post("/movies/new-movie",upload.single("video"),async (req, res) => {
  try {
    const {video,category,type,title,director,year,time,language,subtitle,dubbing} = req.body
    const error = [];
    if (!req.file) {
      error.push({ text: "Please insert a video" });
    }
    if (!category) {
     error.push({ text: "Please write a category" });
    }
    if (!type) {
      error.push({ text: "select write a type" });
    }
    if (!title) {
      error.push({ text: "Please write a title" });
    }
    if (!director) {
      error.push({ text: "Please write an director" });
    }
    if (!year) {
      error.push({ text: "Please write a year" });
    }
    if (!time) {
      error.push({ text: "Please write a time" });
    }
    if (!language) {
      error.push({ text: "Please write a language" });
    }
    if (!subtitle) {
      error.push({ text: "Please write a subtitle" });
    }
    if (!dubbing) {
      error.push({ text: "Please write a dubbing" });
    }

    if (error.length > 0) 
      return res.render("./movies/new-movie", {
        error,
        video,
        category,
        type,
        title,
        director,
        year,
        time,
        language,
        subtitle,
        dubbing
      });

    const newMovie = new Movie({
      video: req.file.filename,
      category,
      type,
      title,
      director,
      year,
      time,
      language,
      subtitle,
      dubbing
    });
    
    const user = await newMovie.save();
    
    res.redirect("/movies");
  } catch (error) {
    //Codigo que ejecutas en caso de encontrar un error
    res.status(500).send({ error });
  }
}),

router.get("/movies", async(req, res) => { 
  const movies = await Movie.find().sort({date:'desc'});
  res.render('movies/all-movies', { movies}) 
});

  //Edit movie
  //router.get("/movies/edit/:id",async (req, res) => {
  //  const category=[
  //    "Comedy",
  //    "Drama",
  //    "Action",
  //    "Terror",
  //    "Documentation"
  //    
  //  ];
  //  const type=[
  //    "Movies",
  //    "Series"
  //  ];
  //
  //  const language=[
  //    "English",
  //    "Spanish",
  //    "French",
  //    "Germany"
  //  ];
  //
  //  const subtitle=[
  //    "English",
  //    "Spanish",
  //    "French",
  //    "Germany",
  //    "none"
  //  ];
  //
  //  const dubbing=[
  //    "English",
  //    "Spanish",
  //    "French",
  //    "Germany",
  //    "none"
  //  ];
  //
  //  res.render("./movies/edit-movie",{category,type,language,subtitle,dubbing});
  //});

//router.get("/movies/edit/:id",async(req,res)=>{
//  const movie= await Movie.findById(req.params.id)
//  res.render('movies/edit-movie',{movie})
//})

//router.put('/movies/edit-movie/:id',async(req,res) =>{
//  try {
//    const { video,category,type,title,director,year,time,language,subtitle,dubbing }=req.body;
//    await Movie.findByIdAndUpdate(req.params.id, { video,category,type,title,director,year,time,language,subtitle,dubbing});
//    res.redirect("/movies");
//  } catch (error) {
//    console.error("Error Put",error);
//  }
//});
//


module.exports = router;
