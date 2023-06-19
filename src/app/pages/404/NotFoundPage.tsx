import { Typography } from '@mui/material';
import StyledContainer from './notFoundPage.styles';

const NotFoundPage = () => {
    return (
        <StyledContainer maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" align="center">
                The requested page could not be found.
            </Typography>
        </StyledContainer>
    );
};

export default NotFoundPage;