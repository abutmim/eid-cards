function generateImage(designNumber) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const name = document.getElementById('nameInput').value;
  const selectedFont = document.getElementById('fontSelect').value;
  const img = new Image();
  img.src = `images/design${designNumber}.jpg`;

  const designSettings = {
    1: { fontSize: 36, fontColor: '#feffff', x: canvas.width * 0.7, y: 1190 },
    2: { fontSize: 42, fontColor: '#CC0000', x: canvas.width * 0.7, y: 460 },
    3: { fontSize: 34, fontColor: '#333333', x: canvas.width * 0.3, y: 530 },
    4: { fontSize: 40, fontColor: '#000000', x: 100, y: 480 },
    5: { fontSize: 36, fontColor: '#3366CC', x: canvas.width / 2, y: 510 },
    6: { fontSize: 38, fontColor: '#FF6600', x: canvas.width - 100, y: 500 }
  };

  const settings = designSettings[designNumber] || { fontSize: 36, fontColor: '#006699', x: canvas.width / 2, y: 500 };

  img.onload = async function () {
    await document.fonts.load(`${settings.fontSize}px ${selectedFont}`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.font = `bold ${settings.fontSize}px ${selectedFont}`;
    ctx.fillStyle = settings.fontColor;
    ctx.textAlign = 'center';
    ctx.fillText(name, settings.x, settings.y);

    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.href = canvas.toDataURL();
    downloadBtn.style.display = 'inline-block';
  };
}
