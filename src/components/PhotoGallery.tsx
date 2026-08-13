import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface Photo {
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">Conheça nossas caçambas</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
            <p className="mt-4 text-muted-foreground text-lg">
              Confira algumas das caçambas da Potigua Caçamba.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <Reveal key={index} delay={index * 50} slideUp>
              <div 
                className="group relative aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer border border-border transition-all duration-300 hover:shadow-xl hover:border-primary"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="sr-only">Ver ampliado</span>
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2"
            onClick={closeLightbox}
            aria-label="Fechar galeria"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full"
            onClick={prevImage}
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={photos[selectedImage].url} 
              alt={photos[selectedImage].alt}
              className="max-h-[85vh] w-auto mx-auto object-contain rounded shadow-2xl animate-in zoom-in-95 duration-300"
            />
            <p className="text-white text-center mt-4 font-medium text-sm sm:text-base">
              {photos[selectedImage].alt}
            </p>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full"
            onClick={nextImage}
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm">
            {(selectedImage ?? 0) + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
