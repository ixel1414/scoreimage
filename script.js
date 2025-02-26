function uploadPhoto() {
    document.getElementById('photo-upload').click();
}

document.getElementById('photo-upload').addEventListener('change', (event) => {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const photoContainer = document.createElement('div');
            photoContainer.classList.add('photo-container');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Uploaded Photo";

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Löschen";
            deleteButton.addEventListener('click', () => {
                photoContainer.remove();
            });

            photoContainer.appendChild(img);
            photoContainer.appendChild(deleteButton);
            document.getElementById('uploaded-photos').appendChild(photoContainer);
        }
        reader.readAsDataURL(event.target.files[0]);
    }
});
