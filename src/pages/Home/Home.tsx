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

const ConnectMsn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  background: #312f37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 12px 32px rgba(0, 0, 0, 0.24);
  border-radius: 16px;
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
        {address && (
          <ButtonStyled
            variant="contained"
            onClick={() => history.push("/upload")}
            startIcon={<BsFillPlusCircleFill />}
          >
            Create new record
          </ButtonStyled>
        )}
      </HeaderContainer>
      <DappListContainer>
        {address ? (
          fileList && fileList.length > 0 ? (
            fileList.map((file) => <DappCard file={file} />)
          ) : (
            <ConnectMsn>
              <Typography variant="h5" component="h3" sx={{ color: "white" }}>
                <strong>No Records Found</strong>
              </Typography>
            </ConnectMsn>
          )
        ) : (
          <ConnectMsn>
            <Typography variant="h5" component="h3" sx={{ color: "white" }}>
              <strong>Connect Your Wallet</strong>
            </Typography>
          </ConnectMsn>
        )}
      </DappListContainer>
    </>
  )
}

export default Home
