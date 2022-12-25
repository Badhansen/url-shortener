import { Router } from 'express';
import Url from '../models/Url.js';

const router = Router();
// Get all the data
router.get("/all", async(req, res, next) => {
  console.log("Get all data");
  Url.find((err, data) => {
    if (err) return next(err);
    else {
      res.json(data);
    }
  });
});

export default router;
