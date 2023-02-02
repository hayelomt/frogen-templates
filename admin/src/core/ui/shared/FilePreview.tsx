import { Group, Text } from '@mantine/core';
import { IconDownload, IconFile } from '@tabler/icons';
import { useState } from 'react';
import MediaService from '../../services/mediaService';
import FileService from '../../services/mediaService';
import { Media } from '../../util/types';

type FilePreviewProps = {
  media: Media | null | undefined;
};

const FilePreview = ({ media }: FilePreviewProps) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {media ? (
        <>
          <a href={MediaService.getMediaUrl(media)} target="_blank">
            <Group pos="relative">
              <IconDownload />

              <Text>{media.file_name.substring(0, 20)}</Text>
            </Group>
          </a>
        </>
      ) : (
        <IconFile />
      )}
    </>
  );
};

export default FilePreview;
