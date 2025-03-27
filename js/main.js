function generateImage(designNumber) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const name = document.getElementById('nameInput').value;
  const selectedFont = document.getElementById('fontSelect').value;
  const img = new Image();
  img.src = `images/design${designNumber}.jpg`;

  img.onload = async function () {
    canvas.width = img.width;
    canvas.height = img.height;

    const designSettings = {
      1: { fontSize: 28, fontColor: '#feffff', x: img.width * 0.7, y: 1155 },
      2: { fontSize: 38, fontColor: '#0f4c82', x: img.width / 2, y: 957 },
      3: { fontSize: 55, fontColor: '#333333', x: img.width / 2, y: 1660 },
      4: { fontSize: 40, fontColor: '#000000', x: 300, y: 1680 },
      5: { fontSize: 36, fontColor: '#fefeff', x: img.width / 2, y: 1080 },
      6: { fontSize: 25, fontColor: '#4e615f', x: 1090, y: 880 }
    };

    const settings = designSettings[designNumber] || { fontSize: 36, fontColor: '#006699', x: img.width / 2, y: 500 };

    await document.fonts.load(`${settings.fontSize}px ${selectedFont}`);
    
    drawCard();

    setTimeout(drawCard, 100);

    function drawCard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.font = `bold ${settings.fontSize}px ${selectedFont}`;
      ctx.fillStyle = settings.fontColor;
      ctx.textAlign = 'center';
      ctx.fillText(name, settings.x, settings.y);
      canvas.style.display = 'block';

      const downloadBtn = document.getElementById('downloadBtn');
      downloadBtn.href = canvas.toDataURL();
      downloadBtn.style.display = 'inline-block';
    }
  };
}
