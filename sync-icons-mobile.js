/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const path = require('path');

const basePath = path.resolve(
  __dirname,
  '..',
  `mobile/src/components/${process.env.FOLDER}`,
);

const files = fs.readdirSync(basePath);
files.forEach((fileName) => {
  const filePath = `${basePath}/${fileName}`;
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' });
  fs.writeFileSync(
    filePath,
    content
      .replace('xmlns', '')
      .replace('xmlnsXlink', '')
      .replace(/filter="url\(#filter0_d_1021_998\)"/g, '')
      .replace('id={15}', ''),
  );
});

const content = fs.readFileSync(`${basePath}/index.ts`, { encoding: 'utf-8' });
fs.writeFileSync(`${basePath}/index.ts`, content.replace(/.tsx/g, ''));
