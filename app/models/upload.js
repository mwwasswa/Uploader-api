require('dotenv').config()
const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJson: { virtuals: true }
})

// Virtual property that generates the file URL location.
uploadSchema.virtual('fileUrl').get(function () {
  // Generating
  const url = 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName
  // Return he value
  return url
})

module.exports = mongoose.model('Upload', uploadSchema)
