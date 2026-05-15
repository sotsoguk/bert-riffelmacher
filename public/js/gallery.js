document.addEventListener("DOMContentLoaded", function() {
    const galleries = document.querySelectorAll('.gallery');
    if (galleries.length === 0) return;

    // Lightbox Container erstellen und ans Ende des Bodys hängen
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    
    const prevBtn = document.createElement('div');
    prevBtn.className = 'lightbox-prev';
    prevBtn.innerHTML = '&#10094;'; // Das HTML-Zeichen für den linken Pfeil ❮

    const nextBtn = document.createElement('div');
    nextBtn.className = 'lightbox-next';
    nextBtn.innerHTML = '&#10095;'; // Das HTML-Zeichen für den rechten Pfeil ❯

    const img = document.createElement('img');
    
    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';

    lightbox.appendChild(prevBtn);
    lightbox.appendChild(img);
    lightbox.appendChild(caption);
    lightbox.appendChild(nextBtn);
    document.body.appendChild(lightbox);

    let currentImages = [];
    let currentIndex = 0;

    function updateImage() {
        // Fade-in Animation bei jedem Bildwechsel neustarten
        img.classList.remove('fade-in');
        void img.offsetWidth; // Zwingt den Browser zum Reflow, um die Animation neu zu starten
        img.classList.add('fade-in');

        img.src = currentImages[currentIndex].src;
        caption.textContent = currentImages[currentIndex].alt || '';
    }

    // Klick auf das Bild selbst soll die Lightbox nicht schließen
    img.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Navigation per Klick auf die Buttons
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateImage();
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateImage();
    });

    // Schließen per Klick auf den Hintergrund
    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('visible');
    });

    // Tastatur-Steuerung (Escape, Links, Rechts)
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('visible')) return;
        
        if (e.key === "Escape") {
            lightbox.classList.remove('visible');
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateImage();
        } else if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateImage();
        }
    });

    // Bilder gruppiert nach Galerie anklickbar machen
    galleries.forEach(gallery => {
        const images = Array.from(gallery.querySelectorAll('img'));
        images.forEach((galleryImg, index) => {
            
            // Wrapper und Caption für das Grid erstellen
            const wrapper = document.createElement('figure');
            wrapper.className = 'gallery-item';
            galleryImg.parentNode.insertBefore(wrapper, galleryImg);
            wrapper.appendChild(galleryImg);
            
            if (galleryImg.alt) {
                const figcap = document.createElement('figcaption');
                figcap.className = 'gallery-caption';
                figcap.textContent = galleryImg.alt;
                wrapper.appendChild(figcap);
            }

            galleryImg.addEventListener('click', function() {
                currentImages = images;
                currentIndex = index;
                updateImage();
                lightbox.classList.add('visible');
            });
        });
    });
});