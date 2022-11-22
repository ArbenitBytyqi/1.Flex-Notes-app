import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

//GET ALL NOTES

app.get("/notes", async (req, res) => {
    try {
      const notes = await prisma.note.findMany({
      });
      res.send(notes);
    } catch (error) {
      // @ts-ignore
      res.status(500).send({ error: error.message });
    }
  });

//GET A NOTES BY A SPECIFIC CATEGORY

  app.get("/notes/:category", async (req, res) => {
    try {
      const { category } = req.params;
  
      const notes = await prisma.note.findMany({
        where: { category: category },
      });
  
      res.send(notes);
    } catch (error) {
      // @ts-ignore
      res.status(500).send({ error: error.message });
    }
  });

//DELETE A NOTE

  app.delete("/notes/:id", async (req, res) => {
    try {
      const note = await prisma.note.delete({
        where: { id: Number(req.params.id) },
      });
      res.send(note);
    } catch (error) {
      res.status(400).send({ error: error });
    }
  });

//POST A NOTE

  app.post("/notes", async (req, res) => {
    const notes = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
    };
    let errors: string[] = [];
  
    if (typeof req.body.title !== "string") {
      errors.push("Add a proper title!");
    }
    if (typeof req.body.content !== "string") {
      errors.push("Add a proper note description!");
    }
    if (typeof req.body.category !== "string") {
      errors.push("Select a proper category");
    }
    if (errors.length === 0) {
      try {
        const newNote = await prisma.note.create({
          data: {
            title: notes.title,
            content: notes.content,
            category: notes.category,
          },
        });
        res.send(newNote);
      } catch (err) {
        // @ts-ignore
        res.status(400).send(err.message);
      }
    } else {
      res.status(400).send({ errors: errors });
    }
  });

//SEARCH FOR NOTES

  app.get("/notes/note/:title", async (req, res) => {
    try {
      const { title } = req.params;
  
      const notes = await prisma.note.findMany({
        where: { title: { contains: title } }
      });
  
      res.send(notes);
    } catch (error) {
      // @ts-ignore
      res.status(500).send({ error: error.message });
    }
  });
  

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
  });