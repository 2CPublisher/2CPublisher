import { useCallback } from "react"
import MainLayout from "../../components/Layout"
import { useDropzone } from "react-dropzone"
import Typography from "@material-ui/core/Typography"
import { ButtonStyled } from "../../components/Button"
import { AiOutlineCloudUpload } from "react-icons/ai"
import Label from "../../components/Label"
import "./Home.css"

import styled from "@emotion/styled"

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
  height: 261px;
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
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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
          <UploadFileZone {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="message">
                <AiOutlineCloudUpload
                  style={{ width: 40, height: 40, color: "#7179A5" }}
                />
                <p>Upload a file or drag and drop</p>
              </div>
            )}
          </UploadFileZone>
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
          <ButtonStyled variant="contained" disabled>
            Continue
          </ButtonStyled>
        </ButtonsContainer>
      </HomeContainer>
    </MainLayout>
  )
}

export default Home
