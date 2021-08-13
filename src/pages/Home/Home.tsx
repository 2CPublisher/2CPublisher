import { useCallback, useState } from "react"
import MainLayout from "../../components/Layout"
import { useDropzone } from "react-dropzone"
import Typography from "@material-ui/core/Typography"
import { ButtonStyled } from "../../components/Button"
import { AiOutlineCloudUpload } from "react-icons/ai"
import Label from "../../components/Label"
import FilesTable from "../../components/FilesTable"
import { Web3Uploader } from "../../utils/web3-uploader"
import "./Home.css"

import styled from "@emotion/styled"

type UploadFileZoneProps = {
  hasElements: boolean
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 600px;
  margin-top: 50px;
`

const UploadFileZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 639px;
  height: ${(props: UploadFileZoneProps) =>
    props.hasElements ? "100px" : "261px"};
  background: #fafafd;
  border: 2px dashed #ced4eb;
  margin-top: 25px;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

function Home() {
  const [filesAdded, setFilesAdded] = useState<any>([])

  const onDrop = useCallback((acceptedFiles) => {
    setFilesAdded((filesAdded: any) => [...filesAdded, ...acceptedFiles])
  }, [])

  const handleUpload = async () => {
    const uploader = new Web3Uploader()

    console.log(
      "🚀 ~ file: Home.tsx ~ line 60 ~ handleUpload ~ filesAdded",
      filesAdded
    )
    await uploader.storeFiles(filesAdded)

    // Progress storage (probably not needed)
    uploader.storeWithProgress(filesAdded)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const hasElements = filesAdded.length > 0

  return (
    <MainLayout>
      <HomeContainer>
        <div>
          <Label
            text="Upload your Code"
            toolTipMessage="This is the reason this exists"
          />
          <Typography variant="subtitle1" component="div">
            Drag an drop or upload your asset to the network.
          </Typography>
          <UploadFileZone {...getRootProps()} hasElements={hasElements}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="message">
                <AiOutlineCloudUpload
                  style={{ width: 40, height: 40, color: "#7179A5" }}
                />
                <p>Upload {hasElements && "more"} files or drag and drop</p>
              </div>
            )}
          </UploadFileZone>
          <FilesTable files={filesAdded} />
        </div>
        <Label
          text="Add metadata to this file"
          toolTipMessage="This is the reason this exists"
        />
        <Label
          text="Upload screenshot/thumbnail preview"
          toolTipMessage="This is the reason this exists"
        />
        <ButtonsContainer>
          <ButtonStyled variant="outlined">Cancel</ButtonStyled>
          <ButtonStyled
            variant="contained"
            disabled={!hasElements}
            onClick={handleUpload}
          >
            Continue
          </ButtonStyled>
        </ButtonsContainer>
      </HomeContainer>
    </MainLayout>
  )
}

export default Home
