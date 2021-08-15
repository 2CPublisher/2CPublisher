import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import styled from "@emotion/styled";
import { ReactElement } from "react";
import { FileData } from "src/utils/web3-uploader";

const DappCardContainer = styled.div`
  width: 9.3em;
  margin: 1em;
`;

type DappCardProps = {
  file: FileData;
};

export default function DappCard({ file }: DappCardProps): ReactElement {
  return (
    <DappCardContainer>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={file.metadata.name}
            height="140"
            image={`https://dweb.link/ipfs/${file.cid}/${file.metadata.thumbnail}`}
            title={file.metadata.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {file.metadata.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {file.metadata.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {`https://dweb.link/ipfs/${file.cid}`}
          </Button>
        </CardActions>
      </Card>
    </DappCardContainer>
  );
}
