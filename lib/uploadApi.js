require('dotenv').config()
// Require File System
const fs = require('fs')
// Require mime-types package
const mime = require('mime-types')
// Require AWS SDK
const AWS = require('aws-sdk')
// Set AWS region
AWS.config.update({ region: 'us-east-1' })
// Create S3 Object instance
const s3 = new AWS.S3()

// Define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME

module.exports = function () {
// create params object for s3 upload
  const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType: mime.lookup(filePath)
  }

  // upload to s3
  s3.upload(params, (err, s3Data) => {
    if (err) throw err

    console.log(s3Data)
  })
}
