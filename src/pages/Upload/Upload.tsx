import { useCallback, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDropzone } from "react-dropzone"
import Typography from "@material-ui/core/Typography"
import { ButtonStyled } from "../../components/Button"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { BiPhotoAlbum } from "react-icons/bi"

import Label from "../../components/Label"
import FilesTable from "../../components/FilesTable"
import TextField from "@material-ui/core/TextField"
import { Web3Uploader } from "../../utils/web3-uploader"

import styled from "@emotion/styled"

type UploadFileZoneProps = {
  hasElements: boolean
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 600px;
  width: 60%;
`

const UploadFileZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props: UploadFileZoneProps) =>
    props.hasElements ? "100px" : "261px"};
  background: #312e37;
  border: 2px dashed #636068;
  border-radius: 16px;
  margin-top: 25px;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const UploadThumbnailFileZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #312e37;
  border: 2px dashed #636068;
  border-radius: 16px;
  margin-top: 25px;

  .message {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  margin: 10px 0 30px 0;
  align-self: flex-end;
`

const Thumb = styled.div`
  display: "inline-flex";
  border-radius: 2;
  border: "1px solid #eaeaea";
  margin-bottom: 8px;
  margin-right: 8px;
  width: 200px;
  height: 200px;
  padding: 4;
  box-sizing: "border-box";
`

const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`

const ThumbImg = styled.img`
  display: "block";
  width: 200px;
  height: 200px;
`

type MetadataProps = {
  name?: string
  description?: string
  thumbnail?: string
}

function Upload() {
  const [filesAdded, setFilesAdded] = useState<any>([])
  const [thumb, setThumb] = useState<any>()
  const [appName, setAppName] = useState<string>()
  const [appDesc, setAppDesc] = useState<string>()
  const [thumbnailName, setThumbnailName] = useState<string>()
  const history = useHistory()

  const createMetadataFile = async ({
    name,
    description,
    thumbnail,
  }: MetadataProps) => {
    const metadataFile = JSON.stringify({
      name,
      description,
      thumbnail,
    })
    const newMetadata = await new File([metadataFile], "metadata.json")
    setFilesAdded((filesAdded: any) => [...filesAdded, newMetadata])
  }

  useEffect(() => {
    createMetadataFile({
      name: appName,
      description: appDesc,
      thumbnail: thumbnailName,
    })
  }, [appName, appDesc, thumbnailName])

  useEffect(() => {
    if (thumb) setFilesAdded((filesAdded: any) => [...filesAdded, thumb])
  }, [thumb])

  const onDrop = useCallback((acceptedFiles) => {
    setFilesAdded((filesAdded: any) => [...filesAdded, ...acceptedFiles])
  }, [])

  const onThumbDrop = useCallback((acceptedFile) => {
    setThumbnailName(acceptedFile[0].name)
    setThumb(
      Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0]),
      })
    )
  }, [])

  const handleUpload = async () => {
    const uploader = new Web3Uploader()

    //TODO: THIS MSN IS TEMPORAL. WE NEED TO IMPLEMENT AN SPINNER HERE
    console.log("Uploading files... ")

    await uploader.storeFiles(filesAdded)

    console.log("Files uploaded... ")
    history.push("/")
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const {
    getRootProps: thGRP,
    getInputProps: thIP,
    isDragActive: thIsDragActive,
  } = useDropzone({
    onDrop: onThumbDrop,
    maxFiles: 1,
    accept: "image/*",
  })

  const hasElements = filesAdded.length > 0

  return (
    <MainContainer>
      <UploadContainer>
        <Label
          text="New record"
          toolTipMessage="This is the reason this exists"
        />
        <Typography variant="subtitle1" component="div" sx={{ color: "#fff" }}>
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

        <Label
          text="Metadata"
          toolTipMessage="This is the reason this exists"
        />
        <TextField
          id="outlined-basic"
          label="App Name"
          variant="outlined"
          sx={{ marginTop: 2, width: "100%" }}
          onBlur={(event) => setAppName(event.target.value)}
        />
        <TextField
          label="Description"
          multiline
          rows={2}
          sx={{ marginTop: 3, marginBottom: 3, width: "100%" }}
          onBlur={(event) => setAppDesc(event.target.value)}
        />

        <Label
          text="Upload screenshot/thumbnail preview"
          toolTipMessage="This is the reason this exists"
        />
        {thumb ? (
          <Thumb>
            <ThumbInner>
              <ThumbImg src={thumb.preview} />
            </ThumbInner>
          </Thumb>
        ) : (
          <UploadThumbnailFileZone {...thGRP()}>
            <input {...thIP()} />
            {thIsDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="message">
                <BiPhotoAlbum
                  style={{ width: 40, height: 40, color: "#7179A5" }}
                />
                <p>Upload your app thumbnail or drag and drop</p>
              </div>
            )}
          </UploadThumbnailFileZone>
        )}
        <ButtonsContainer>
          <ButtonStyled
            onClick={() => history.push("/")}
            variant="outlined"
            sx={{ margin: 2 }}
          >
            Cancel
          </ButtonStyled>
          <ButtonStyled
            variant="contained"
            disabled={!hasElements}
            onClick={handleUpload}
            sx={{ margin: 2 }}
          >
            Upload
          </ButtonStyled>
        </ButtonsContainer>
      </UploadContainer>
    </MainContainer>
  )
}

export default Upload
