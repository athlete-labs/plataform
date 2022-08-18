import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function LinkBox(props) {
  return (
    <Paper className="p-32 w-160" align="center">
      <div className="w-60 h-80">
        <img width={60} height={80} src={props.src} alt={props.alt} />
        <Typography align="center">{props.alt}</Typography>
      </div>
    </Paper>
  );
}

export default LinkBox;
