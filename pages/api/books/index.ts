import dbConnect from '../../../lib/dbConnect';
import Book from '../../../models/Book';

export default async function handler(req: any, res: any) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const pets = await Book.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: pets });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const book = await Book.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: book });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
