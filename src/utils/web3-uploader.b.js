import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js";

const token = process.env.REACT_APP_WEB3_STORAGE_TOKEN;
const storage = new Web3Storage({ token });

export const storeFiles = async (files) => {
  return await storage.put(files);
}

export const getMetadata = async (rootCid) => {
  const res = await storage.get(rootCid);
  const files = await res.files();
  let metadata = {};

  for (const file of files) {
    if (file.name === "metadata.json") {
      const data = await fetch(`https://dweb.link/ipfs/${file.cid}`);
      const parsedData = await data.json();
      metadata = parsedData;
    }
  }

  return metadata;
}

export const listUploads = async () => {
  const list = [];
  for await (const upload of storage.list()) {
    const metadata = await getMetadata(upload.cid);
    list.push({ metadata, cid: upload.cid });
  }
  return list;
}