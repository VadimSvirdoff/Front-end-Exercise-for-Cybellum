import CardMediaMui from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const Logo = styled(CardMediaMui)(({ theme }) => {
    return {
        objectFit: 'unset',
        width: 160,
        marginTop: theme.spacing(2),
        display: 'inline-block',
    };
}) as typeof CardMediaMui;

const CardMedia = styled(CardMediaMui)(({ theme }) => {
    return {
        objectFit: 'unset',
        width: "100%",
        marginTop: theme.spacing(2),
        display: 'inline-block',
    };
}) as typeof CardMediaMui;


export default {
    CardMedia,
    Logo,
};
