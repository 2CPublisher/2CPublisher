import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import { AiOutlineQuestionCircle } from "react-icons/ai"

import styled from "@emotion/styled"

const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
type LabelProps = {
  text: string
  toolTipMessage: string
}

const Label = ({ text, toolTipMessage }: LabelProps) => {
  return (
    <LabelContainer>
      <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
        {text}
      </Typography>
      <Tooltip title={toolTipMessage} placement="right">
        <IconButton color="primary" aria-label="upload picture" component="div">
          <AiOutlineQuestionCircle
            style={{ width: 20, height: 20, color: "#000" }}
          />
        </IconButton>
      </Tooltip>
    </LabelContainer>
  )
}

export default Label
