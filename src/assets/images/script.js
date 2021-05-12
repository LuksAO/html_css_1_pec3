const { exec } = require("child_process");

[
  'cordero',
  'rollo',
  'lomo',
  'pollo',
  'pollo2',
  'pollo3',
  'tiramisu',
  'pan',
  'panacota'
].forEach(file => {
  exec(`sharp -i ./${file}.jpg -o ./${file}-250w.jpg resize 250 200`);
  exec(`sharp -i ./${file}.jpg -o ./${file}-250w.webp resize 250 200`);
});