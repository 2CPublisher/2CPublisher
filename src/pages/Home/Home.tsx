import "./Home.css";
import styled from "@emotion/styled";
import { FileData, Web3Uploader } from "src/utils/web3-uploader";
import { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import DappCard from "src/components/DappCard";
import { useWallet } from "src/hooks/useWallet";

const DappListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 30px 0;
`;

function Home() {
  const uploader = new Web3Uploader();
  const [fileList, setFileList] = useState([] as FileData[]);
  const { address } = useWallet();

  useEffect(() => {
    if (uploader) {
      const fetchFiles = async () => {
        const files = await uploader.listUploads();
        if (files) {
          setFileList(files);
        }
      };
      fetchFiles();
    }
  }, []);

  console.log(fileList);

  return (
    <>
      <Typography variant="h3" component="div">
        Dapp List
      </Typography>
      {address ? (
        <DappListContainer>
          {fileList && fileList.length > 0 ? (
            fileList.map((file) => <DappCard file={file} />)
          ) : (
            <div>
              <a href="/upload">Upload some files</a>
            </div>
          )}
        </DappListContainer>
      ) : (
        <div>Connect Wallet</div>
      )}
    </>
  );
}

export default Home;
