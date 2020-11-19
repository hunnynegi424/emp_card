import './index.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Grid,
  Divider,
} from '@material-ui/core';
import QualityComponent from './detailcomponents/quality';
import HandicapComponent from './detailcomponents/handicap';
import SgtotalComponent from './detailcomponents/sgTotal';
import { LineGraphComp, LevelChartComp } from './charts';

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    maxWidth: 345,
    backgroundColor: 'white',
    minHeight: 450,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: '4px solid rgba(210,210,210, 0.5)',
  },
  customTypo: {
    color: 'grey',
  }
}),
);

export default function CardComponent(props) {
  const classes = useStyles();
  return (
    <div className="card-container">
      <Card className={classes.root} variant="outlined">
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              aria-label="emp-card"
              className={classes.avatar}
              src={props.avatar}              
            />
          }
          title={props.name}
          titleTypographyProps={{
            variant: 'h6',
          }}
          subheader={props.address}
          subheaderTypographyProps={{
            variant: 'subtitle2'
          }}
        />
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-end"
          >
            <QualityComponent {...props} />
              <Divider orientation="vertical" flexItem/>
            <HandicapComponent {...props} />
              <Divider orientation="vertical" flexItem/>
            <SgtotalComponent {...props} />
          </Grid>
          <Divider />
          <LevelChartComp />
            <Divider />
          <LineGraphComp />
        </CardContent>
      </Card>
    </div>
  )
}
