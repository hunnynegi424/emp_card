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
import CustomSkeleton from './skeleton';
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
            props.loader ? <CustomSkeleton  variant="circle" dimensions={[70, 70]} /> : <Avatar
              aria-label="emp-card"
              className={classes.avatar}
              src={props.data?.avatar}              
            />
          }
          title={props.loader ? <CustomSkeleton  variant="rect" dimensions={[150, 30, 0, 0, 6, 0]} /> : props.data?.name}
          titleTypographyProps={{
            variant: 'h6',
          }}
          subheader={props.loader ? <CustomSkeleton  variant="rect" dimensions={[180, 15]} /> : props.data?.address}
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
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <QualityComponent {...props} />}
              <Divider orientation="vertical" flexItem/>
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <HandicapComponent {...props} />}
              <Divider orientation="vertical" flexItem/>
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <SgtotalComponent {...props} />}
          </Grid>
          <Divider />
          {props.loader ? <CustomSkeleton  variant="rect" dimensions={[300, 128, 12, 6, 12, 6]} /> : <LevelChartComp />}
            <Divider />
          {props.loader ? <CustomSkeleton  variant="rect" dimensions={[300, 128, 12, 6, 0, 6]} /> : <LineGraphComp />}
        </CardContent>
      </Card>
    </div>
  )
}
