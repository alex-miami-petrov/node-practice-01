import * as fs from 'node:fs/promises';

export const readFile = async (path) => {
  const getFile = await fs.readFile(path, 'utf-8');
  return getFile ? JSON.parse(getFile) : [];
};
