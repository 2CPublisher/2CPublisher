import styled from "@emotion/styled"
import { useWallet } from "../../hooks/useWallet"
import { ellipseAddress } from "../../lib/utilities"
import { ButtonStyled } from "../../components/Button"

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  background-color: #312e37;
  padding: 5px 15px 5px 15px;
  margin: 0 5px 0 5px;
`

const UserAddressInfo = () => {
  const { web3Provider, address, connect, disconnect } = useWallet()
  return (
    <UserInfoContainer>
      {web3Provider && address ? (
        <>
          <ButtonStyled
            onClick={disconnect}
            sx={{ color: "#fff" }}
            variant="text"
          >
            {ellipseAddress(address)}
          </ButtonStyled>
        </>
      ) : (
        <ButtonStyled onClick={connect} variant="text" sx={{ color: "#fff" }}>
          Connect
        </ButtonStyled>
      )}
    </UserInfoContainer>
  )
}

export default UserAddressInfo
