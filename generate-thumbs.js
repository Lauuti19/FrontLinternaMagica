const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "src/assets/Archivo/pecera3");
const outputDir = path.join(__dirname, "src/assets/Archivo/pecera3/thumbs");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith(".jpg")) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    sharp(inputPath)
      .resize({ width: 400 })
      .toFile(outputPath)
      .then(() => console.log(`Thumbnail generado: ${file}`))
      .catch(err => console.error(`Error procesando ${file}:`, err));
  }
});
