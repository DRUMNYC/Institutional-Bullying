import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
// import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('gallery', GalleryPagePreview)
