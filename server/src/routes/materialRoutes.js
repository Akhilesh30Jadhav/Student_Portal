import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { uploadMaterial, getMaterials, searchMaterials, downloadMaterial } from '../controllers/materialController.js';
import { upload } from '../middleware/upload.js';

const router = Router();
router.post('/upload', protect, upload.single('file'), uploadMaterial);
router.get('/', getMaterials);
router.post('/search', searchMaterials);
router.post('/:id/download', protect, downloadMaterial);
export default router;
