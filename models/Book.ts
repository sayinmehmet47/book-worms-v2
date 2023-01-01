import mongoose from 'mongoose';

interface BookType {
  name: string;
  file: string;
  size: number;
  url: string;
  date: Date;
}

const BooksSchema = new mongoose.Schema<BookType>(
  {
    name: {
      type: String,
    },
    file: {
      type: String,
    },
    size: {
      type: Number,
    },
    url: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  { collection: 'booksInfo' }
);

export default mongoose.model<BookType>('Books', BooksSchema);

export type { BookType };
