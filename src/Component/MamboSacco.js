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
            <p>Mambo Sacco is a sacco that brings together people from different job description within Mambo travellers to contribute to a common goal of financial safety in times of needs such as funerals,sickness etc </p>  
            </Box>
            <Typography variant="h4"> New Members
            
            </Typography>
            <Box style={{display: 'flex'}}>
            <p>Currently not accepting new members</p>  
            </Box>
            
        </Header>
    )
}

export default CodeForInterview;