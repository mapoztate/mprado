export default class AssetProxy {
  constructor({
    url,
    file,
    path,
    field
  }) {
    this.url = url ? url : file ? window.URL.createObjectURL(file) : '';
    this.fileObj = file;
    this.path = path;
    this.field = field;
  }
  toString() {
    return this.url;
  }
  async toBase64() {
    const blob = await fetch(this.url).then(response => response.blob());
    if (blob.size <= 0) {
      return '';
    }
    const result = await new Promise(resolve => {
      const fr = new FileReader();
      fr.onload = readerEvt => {
        const binaryString = readerEvt.target?.result || '';
        resolve(binaryString.toString().split('base64,')[1]);
      };
      fr.readAsDataURL(blob);
    });
    return result;
  }
}
export function createAssetProxy({
  url,
  file,
  path,
  field
}) {
  return new AssetProxy({
    url,
    file,
    path,
    field
  });
}