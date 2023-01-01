import { useState } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import { BookType } from '../models/Book';

interface FormTypes {
  formId: string;
  bookForm: BookType;
  forNewBook?: boolean;
}

const Form = ({ formId, bookForm, forNewBook = true }: FormTypes) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: bookForm.name,
    file: bookForm.file,
    size: bookForm.size,
    url: bookForm.url,
    date: bookForm.date,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form: any) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/pets/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status as any);
      }

      const { data } = await res.json();

      mutate(`/api/pets/${id}`, data, false); // Update the local data without a revalidation
      router.push('/');
    } catch (error) {
      setMessage('Failed to update pet');
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: any) => {
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status as any);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add book');
    }
  };

  const handleChange = (e: any) => {
    const target = e.target;
    const value =
      target.name === 'poddy_trained' ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  /* Makes sure pet info is filled for pet name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err = { ...err, name: 'Name is required' };
    if (!form.file) err = { ...err, file: 'File is required' };
    if (!form.size) err = { ...err, size: 'Size is required' };
    if (!form.url) err = { ...err, url: 'Url is required' };
    return err;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewBook ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="file">File</label>
        <input
          type="text"
          name="file"
          value={form.file}
          onChange={handleChange}
          required
        />

        <label htmlFor="species">Size</label>
        <input
          type="text"
          name="size"
          value={form.size}
          onChange={handleChange}
          required
        />

        <label htmlFor="url">Url</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
