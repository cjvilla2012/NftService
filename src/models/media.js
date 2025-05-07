import { Schema } from 'mongoose'
export const mediaSchema = new Schema({
  mimeType: { type: String, default: undefined },
  source: { type: String, default: undefined }, //FileId: Original source for media
  display: { type: String, default: undefined }, //FileId: Display version. For images, may be scaled-down source.
  thumbnail: { type: String, default: undefined }, //FileId: Small version for lists etc. For images, scaled-down display.
  sourceName: { type: String, default: undefined }, //Filename: required for delete
  displayName: { type: String, default: undefined },
  thumbnailName: { type: String, default: undefined },
  dimensions: { type: String, default: undefined }, //Width x Height for source
  maxAvailWidth: { type: Number, default: undefined },
  maxAvailHeight: { type: Number, default: undefined },

  //For audio, there is no thumbnail in publicMedia. Instead there is a CID for the audio file to stream
  audio: { type: String, default: undefined },
  duration: { type: String, default: undefined }, //Duration hh:mm:ss for av

  //For privileged media
  description: { type: String, default: undefined },
  storage: Number, //GB used for the priviliged file 
})
