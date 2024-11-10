import { PATH_DB } from '../constans/products.js';
import { readFile } from '../utils/readFile.js';

export const getAllProducts = async () => {
  const getFile = await readFile(PATH_DB);

  return getFile;
};

console.log(await getAllProducts());
