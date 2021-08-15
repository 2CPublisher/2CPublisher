import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import { BiRightArrowAlt } from "react-icons/bi"

import Rating from "@material-ui/core/Rating"

const DappCardContainer = styled.div`
  width: 70%;
  margin: 1em;
`

const GoToIcon = styled(BiRightArrowAlt)`
  width: 30px;
  height: 30px;
`

type DappCardProps = {
  file: { metadata: {}; cid: any; }
}

export default function DappCard({ file }: DappCardProps): ReactElement {
  return (
    <DappCardContainer>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          p: 1,
          borderRadius: 3,
          backgroundColor: "#312F37",
          boxShadow:
            "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 12px 32px rgba(0, 0, 0, 0.24)",
        }}
      >
        <CardMedia
          component="img"
          alt={file.metadata['name']}
          sx={{ width: 80, height: 80, borderRadius: 50 }}
          image={`https://dweb.link/ipfs/${file.cid}/${file.metadata['thumbnail']}`}
          title={file.metadata['name']}
        />
        <CardContent
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              sx={{ fontWeight: 700 }}
            >
              {file.metadata['name']}
            </Typography>
            <div style={{ display: "flex" }}>
              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                size="small"
                readOnly
                sx={{ color: "#41D4B0", fontSize: 15 }}
              />{" "}
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                sx={{ fontSize: 10, color: "#A5A4B7", marginLeft: "5px" }}
              >
                4.5
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <a href={`https://dweb.link/ipfs/${file.cid}`}>
            <GoToIcon style={{ color: "#fff" }} />
          </a>
        </CardActions>
      </Card>
    </DappCardContainer>
  )
}
