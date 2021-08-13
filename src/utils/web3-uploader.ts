import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';
export class Web3Uploader {
  private token: string | undefined = '';
  private storage: Web3Storage;
  public cid: string = '';
  public percentageCompleted: number;

  constructor() {
    this.percentageCompleted = 0;
    this.token = process.env.REACT_APP_WEB3_STORAGE_TOKEN;

    if (!this.token) {
      throw new Error('Set REACT_APP_WEB3_STORAGE_TOKEN variable');
    }

    this.storage = new Web3Storage({ token: this.token });
  }

  async storeFiles(files: File[]): Promise<string> {
    this.cid = await this.storage.put(files);
    return this.cid;
  }

  async storeWithProgress(files: File[]): Promise<string> {
    const onRootCidReady = (cid: string) => {
      this.cid = cid;
      this.percentageCompleted = 100;
    }

    const totalSize = files.map(f => f.size).reduce((a, b) => a + b, 0)
    let uploaded = 0;

    const onStoredChunk = (size: number): void => {
      uploaded += size;
      this.percentageCompleted = totalSize / uploaded;
    }

    return await this.storage.put(files, { onRootCidReady, onStoredChunk });
  }
}
