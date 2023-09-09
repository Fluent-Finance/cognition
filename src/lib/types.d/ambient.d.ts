// Squelch warnings of image imports from assets dir
declare module '$lib/assets/*' {
  var meta
  export default meta
}
