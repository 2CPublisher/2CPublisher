import Avatar from "@material-ui/core/Avatar"
import styled from "@emotion/styled"
import { useWallet } from "../../hooks/useWallet"
import { ellipseAddress } from "../../lib/utilities"
import { ButtonStyled } from "../../components/Button"

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  background-color: #e1e4f0;
  padding: 5px 15px 5px 15px;
  margin: 0 5px 0 5px;
`

const UserAddressInfo = () => {
  const { web3Provider, address, connect, disconnect } = useWallet()
  return (
    <UserInfoContainer>
      {web3Provider && address ? (
        <>
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt="Nico Valencia"
            src="https://pbs.twimg.com/profile_images/1420834839159209984/8DT-YW8Z_400x400.jpg"
          />
          <ButtonStyled onClick={disconnect} variant="text">
            {ellipseAddress(address)}
          </ButtonStyled>
        </>
      ) : (
        <ButtonStyled onClick={connect} variant="text">
          Connect
        </ButtonStyled>
      )}
    </UserInfoContainer>
  )
}

export default UserAddressInfo
