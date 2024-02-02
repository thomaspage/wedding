import { styled } from "@mui/material/styles";

export const ContentContainer = styled('div')(({theme}) => ({
    width: 600,
    height: 600,
    padding: '0px 10px',
    maxHeight: '80vh',
    maxWidth: '100%',

    border: '1px solid lightgrey',

    [theme.breakpoints.down('md')]: {
        // height: 'unset',
        // margin: 'auto',
    }    
}));
