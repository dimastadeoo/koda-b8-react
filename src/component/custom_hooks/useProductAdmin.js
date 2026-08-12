import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  addProductImages,
  deleteProductImage,
  clearAdminProducts,
} from '../../redux/reducers/adminSlice';

export function useAdminProducts() {
  const dispatch = useDispatch();
  const { productsLoading, error } = useSelector((state) => state.admin);

  const create = (formData) => dispatch(createProduct(formData));
  const update = (id, productData) => dispatch(updateProduct({ id, productData })).unwrap();
  const remove = (id) => dispatch(deleteProduct(id));
  const addImages = (productId, formData) => dispatch(addProductImages({ productId, formData }));
  const removeImage = (imageId) => dispatch(deleteProductImage(imageId));
  const clear = () => dispatch(clearAdminProducts());

  return {
    loading: productsLoading,
    error,
    create,
    update,
    remove,
    addImages,
    removeImage,
    clear,
  };
}