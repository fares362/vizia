const postVideoBtn = document.getElementById('postVideoBtn');
const videoUpload = document.getElementById('videoUpload');

postVideoBtn.addEventListener('click', () => {
  videoUpload.click();
});

videoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    alert(`Tu as choisi la vidéo : ${file.name}`);
    // Ici, tu pourrais ajouter le code pour envoyer la vidéo au serveur (backend)
  }
});
