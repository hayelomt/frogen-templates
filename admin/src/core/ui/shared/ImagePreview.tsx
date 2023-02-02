import { Group } from '@mantine/core';
import { IconBrandAppgallery } from '@tabler/icons';
import { useState } from 'react';
import MediaService from '../../services/mediaService';
import { Media } from '../../util/types';

type ImagePreviewProps = {
  media: Media | null | undefined;
  size?: number;
};

const ImagePreview = ({ media }: ImagePreviewProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {media ? (
        <>
          <Group pos="relative">
            <img
              src={MediaService.getMediaUrl(media)}
              width="50px"
              height="50px"
              style={{ borderRadius: '25px', objectFit: 'cover' }}
              alt={''}
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            />

            <Group
              style={{
                position: 'absolute',
                top: '50%',
                left: '50px',
                width: 200,
                transform: 'translate(0, -50%)',
                opacity: showPreview ? 1 : 0.5,
                visibility: showPreview ? 'visible' : 'hidden',
                transition: 'all 0.1s ease',
              }}
              onMouseOver={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >
              <img
                src={MediaService.getMediaUrl(media)}
                width="200px"
                alt={''}
                onClick={() => {
                  const link = document.createElement('a');
                  link.setAttribute('href', MediaService.getMediaUrl(media));
                  link.setAttribute('target', '_blank');
                  link.click();
                }}
              />
            </Group>
          </Group>
        </>
      ) : (
        <IconBrandAppgallery />
      )}
    </>
  );
};

export default ImagePreview;
