import { PATH_DB } from '../constans/products.js';
import { readFile } from '../utils/readFile.js';

export const countProducts = async () => {
  const data = await readFile(PATH_DB);

  return data.length;
};

console.log(await countProducts());
