import { useState } from 'react';
import { Image } from 'cloudinary-react';
import { useUpload } from '@/hooks/upload';

export function ProfileImageForm({ image: savedImage }) {
  const [file, setFile] = useState(null);
  const { loading, data } = useUpload(file);
  const image = data?.public_id || null;

  const handleChange = e => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div>
      {!loading && image ? (
        <div className="aspect-s w-24 overflow-hidden rounded-lg">
          <Image cloudName="dvzhqzjkm" publicId={image} />
        </div>
      ) : savedImage ? (
        <img src={savedImage} className="w-24 rounded-lg" alt="profile" />
      ) : (
        <div className="aspect-square w-24 rounded-lg bg-slate-200" />
      )}
      <input
        accept="image/*"
        type="file"
        name="image"
        onChange={handleChange} />
    </div>
  );
}
