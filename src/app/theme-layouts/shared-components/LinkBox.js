import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function LinkBox(props) {
  return (
    <Paper className={props.className} onClick={props.onClick} align="center">
      <div className="w-100 h-80">
        <img width={60} height={60} src={props.src} alt={props.alt} />
        <Typography variant="caption" align="center">
          {props.alt}
        </Typography>
      </div>
    </Paper>
  );
}

export default LinkBox;
