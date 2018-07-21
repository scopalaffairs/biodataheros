import { ZOOM_IN, ZOOM_OUT, DOWNLOAD_IMAGE } from './buttonTypes';

export const buttonsSettings =  {
  [ZOOM_IN]: {
    icon: 'zoom',
    popup: 'Zoom In',
    type: ZOOM_IN,
  },
  [ZOOM_OUT]: {
    icon: 'zoom out',
    popup: 'Zoom Out',
    type: ZOOM_OUT,
  },
  [DOWNLOAD_IMAGE]: {
    icon: 'image',
    popup: 'Download as Image',
    type: DOWNLOAD_IMAGE,
  },
};
