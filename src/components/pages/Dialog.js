import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Product from './Product';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sm={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
         <CloseIcon /> 
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({img1, titulo, descrição,}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{float:'right', color:'antiquewhite', background:'#696969', position:'static'}} variant="outlined" onClick={handleClickOpen}>
        Ver mais
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} style={{background:'#696969', color:'antiqueWhite'}}>
          BuyMore
        </BootstrapDialogTitle>
        <DialogContent dividers style={{textAlign:'center'}}>
        <img src={img1} style={{width:'300px', height:'300px'}}/>
        <br />
        <h4>{titulo}</h4>
          <Typography gutterBottom>
            {descrição}
            <br />
            <br />
            <p>Email: mescbuymore@gmail.com</p>
            <p>Contactos: 921048213</p>
            <p>Pagina no Facebook: <a href='https://www.facebook.com/mescbuymore/' style={{color:'#00FFFF'}}> BuyMore</a></p>
            <p>Instagram:<a href='https://www.instagram.com/mesc_buymore?igshid=YmMyMTA2M2Y=' style={{color:'#00FFFF'}}> BuyMore</a></p>
            <a href="https://wa.me/921048213" class="whatsapp_float" target="_blank" rel="noopener noreferrer" style={{marginLeft:'0px'}}><button className='btn btn-dark'><i className='fab fa-whatsapp' style={{color:'antiquewhite', fontSize:'30px', width:'100px', marginLeft:'2%', }}></i></button></a>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{background:'#696969', color:'antiquewhite'}}>
            Voltar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
