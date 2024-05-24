import {useState} from 'react';
import CategoryService from '../../../server/categories/CategoryService';

const useFetchCategories = () => {
  const categoriesPromise = new CategoryService();
  const [categories, setCategories] = useState<any>([]);

  const fetchCategories = async () => {
    try {
      const res = await categoriesPromise.getCategories();
      setCategories(res.data.data.data.category);
    } catch (err) {
      console.error(err);
    }
  };
  return {
    categories,
    fetchCategories,
  };
};

export default useFetchCategories;
