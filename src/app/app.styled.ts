import BoxMui from '@mui/material/Box';
import CardMediaMui from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const Box = styled(BoxMui)(() => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CardMedia = styled(CardMediaMui)(({ theme }) => {
  return {
    objectFit: 'unset',
    width: 160,
    marginTop: theme.spacing(2),
    display: 'inline-block',
  };
}) as typeof CardMediaMui;

export default {
  CardMedia,
  Box,
};
