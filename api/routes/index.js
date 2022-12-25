import { Router } from 'express';
import Url from '../models/Url.js';

const router = Router();

// Get one data using shortUrl
router.get('/:urlId', async (req, res) => {
  console.log("Go to the url");
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

export default router;