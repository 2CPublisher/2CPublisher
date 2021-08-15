import "./Home.css"
import styled from "@emotion/styled"
import { FileData, Web3Uploader } from "src/utils/web3-uploader"
import { useEffect, useState } from "react"
import Typography from "@material-ui/core/Typography"
import DappCard from "src/components/DappCard"
import { ButtonStyled } from "src/components/Button"
import { useHistory } from "react-router-dom"
import { useWallet } from "src/hooks/useWallet"
import { BsFillPlusCircleFill } from "react-icons/bs"

const DappListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

function Home() {
  const uploader = new Web3Uploader()
  const [fileList, setFileList] = useState([] as FileData[])
  const { address } = useWallet()
  const history = useHistory()

  useEffect(() => {
    if (uploader) {
      const fetchFiles = async () => {
        const files = await uploader.listUploads()
        if (files) {
          setFileList(files)
        }
      }
      fetchFiles()
    }
  }, [])

  console.log(fileList)

  return (
    <>
      <HeaderContainer>
        <Typography
          variant="h5"
          component="h3"
          sx={{ alignSelf: "flex-start", color: "white" }}
        >
          <strong>BYOF Records</strong>
        </Typography>
        <ButtonStyled
          variant="contained"
          onClick={() => history.push("/upload")}
          startIcon={<BsFillPlusCircleFill />}
        >
          Create new record
        </ButtonStyled>
      </HeaderContainer>
      <DappListContainer>
        {address ? (
          fileList && fileList.length > 0 ? (
            fileList.map((file) => <DappCard file={file} />)
          ) : (
            <div>
              <a href="/upload">Upload some files</a>
            </div>
          )
        ) : (
          <div>Connect Wallet</div>
        )}
      </DappListContainer>
    </>
  )
}

export default Home
