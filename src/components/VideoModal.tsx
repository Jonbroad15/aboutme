import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  src: string;
  onClose: () => void;
}

const VideoModal = ({ src, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-slate-300 transition-colors"
          aria-label="Close"
        >
          <X size={28} />
        </button>
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default VideoModal;
