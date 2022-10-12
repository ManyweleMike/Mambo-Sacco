import { Box, Typography, styled } from '@mui/material';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {
    
    return (
        <Header>
            <Typography variant="h4"> Mambo Sacco
            
            </Typography>
            <Box style={{display: 'flex'}}>
            <p>Mambo Sacco is a sacco  that brings together people from different work carrers together to work on a single </p>  
            </Box>
        </Header>
    )
}

export default CodeForInterview;