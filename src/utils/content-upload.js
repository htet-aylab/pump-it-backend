const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(process.cwd(), 'gcp-service-account.json'),
  projectId: process.env.GCP_PROJECT_ID,
});

const bucket = storage.bucket(process.env.GCP_BUCKET_NAME);

const uploadBase64Image = async (imageBase64, imageName) => {
  try {
    const file = bucket.file(imageName);
    const imageData = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');
    await file.save(Buffer.from(imageData, 'base64'), {
      metadata: { contentType: 'image/png' },
    });

    return file.publicUrl();
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { uploadBase64Image };
