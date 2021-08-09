import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import styled from "@emotion/styled"

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
  return (
    <UserInfoContainer>
      <Avatar
        sx={{ width: 40, height: 40 }}
        alt="Nico Valencia"
        src="https://pbs.twimg.com/profile_images/1420834839159209984/8DT-YW8Z_400x400.jpg"
      />
      <Typography variant="subtitle1" component="div" sx={{ marginLeft: 1 }}>
        0xe...9876f
      </Typography>
    </UserInfoContainer>
  )
}

export default UserAddressInfo
