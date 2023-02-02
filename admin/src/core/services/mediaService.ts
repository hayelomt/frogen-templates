import appConstants from '../util/constants';
import { Media } from '../util/types';

const MediaService = {
  getMediaUrl: (media: Media | null) => {
    return media
      ? `${appConstants.mediaUrl}/${media.id}/${media.file_name}`
      : '';
  },
};

export default MediaService;
