import Form from '../components/Form';

const NewBook = () => {
  const bookForm = {
    name: 'Ahmet hamdi tanpinar',
    file: 'a',
    size: 102,
    url: 'a',
    date: new Date(),
  };

  return <Form formId="add-book-form" bookForm={bookForm} />;
};

export default NewBook;
