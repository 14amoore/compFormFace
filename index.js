const FaceGenerator = function() {
  this.typeFace = 'sans-serif';
  this.Height = 'Height';
  this.Hair = 'Hair';
  this.HairColor = 'Hair color';
  this.Eyebrows = 'Eyebrows';
  this.Eyes = 'Eyes';
  this.Nose = 'Nose';
  this.Cheeks = 'Cheeks';
  this.VDay = "Valentine's Day";
};

window.onload = function() {
  document.body.style.fontFamily = 'sans-serif';
  const valentine = new FaceGenerator();
  const gui = new dat.GUI();
  //   customContainer.appendChild(gui.domElement);
  const typeControl = gui.add(valentine, 'typeFace', [
    'sans-serif',
    'Lacquer',
    'Tomorrow',
    'Playfair Display'
  ]);

  const heightControl = gui.add(valentine, 'Height', [
    'tall',
    'average height',
    'short',
    'beautifully proportioned'
  ]);
  const hairControl = gui.add(valentine, 'Hair', [
    'long',
    'bobed',
    'short',
    'perfectly cut'
  ]);
  const hairColor = gui.add(valentine, 'HairColor', [
    'pink',
    'blue',
    'orange',
    'blonde',
    'black',
    'red',
    'brown',
    'expertly colored',
    '________'
  ]);
  const eyerbrowControl = gui.add(valentine, 'Eyebrows', [
    'full',
    'thin',
    'pencilled',
    'bleached'
  ]);

  const eyeControl = gui.add(valentine, 'Eyes', [
    'sparkling',
    'twinkling',
    'laughing',
    'smiling',
    'intelligent'
  ]);

  const noseControl = gui.add(valentine, 'Nose', [
    'aquiline',
    'noble',
    'slightly crooked',
    'boopable'
  ]);

  const cheekControl = gui.add(valentine, 'Cheeks', [
    'full',
    'smooth',
    'gaunt',
    'hollow'
  ]);

  const vdayControl = gui.add(valentine, 'VDay', [
    'lovely',
    'dream like',
    'wonderful',
    'exciting'
  ]);
  heightControl.onChange(value => {
    document.querySelector('#height').textContent = value;
  });
  hairControl.onChange(value => {
    document.querySelector('#hair').textContent = value;
  });
  hairColor.onChange(value => {
    document.querySelector('#hairColor').textContent = value;
  });
  eyerbrowControl.onChange(value => {
    document.querySelector('#brows').textContent = value;
  });
  eyeControl.onChange(value => {
    document.querySelector('#eyes').textContent = value;
  });
  noseControl.onChange(value => {
    document.querySelector('#nose').textContent = value;
  });
  cheekControl.onChange(value => {
    document.querySelector('#cheeks').textContent = value;
  });
  vdayControl.onChange(value => {
    document.querySelector('#vDay').textContent = value;
  });
  typeControl.onChange(function(value) {
    console.log(value);
    document.body.style.fontFamily = `${value}`;
  });
};
