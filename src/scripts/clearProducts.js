import { PATH_DB } from '../constans/products.js';
import { writeFile } from '../utils/writeFile.js';

export const clearProducts = async () => {
  await writeFile(PATH_DB, []);
};

clearProducts();
