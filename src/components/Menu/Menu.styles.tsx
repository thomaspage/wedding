import { NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button, Container, Typography } from "@mui/material";

export const MenuContainer = styled('div')(({ theme }) => ({

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200,

    [theme.breakpoints.down('md')]: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        width: '100%',
    }


}));


export const List = styled('div')<{open: boolean}>(({ theme, open }) => ({

    flexGrow: 1,

    position: 'fixed',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',

    transition: 'opacity 0.5s',

    [theme.breakpoints.down('md')]: {
        position: 'unset',
        opacity: 0,
        pointerEvents: 'none',
        width: '100%',

        ...open && {
            pointerEvents: 'auto',
            opacity: 1,
        },
        ...!open && {
            transition: 'opacity 0s',
        }
    }

    
}));

export const ListItem = styled(NavLink)(({}) => ({
    padding: 10,
    textDecoration: 'none',
}));

export const Hamburger = styled(Button)(({theme}) => ({
    pointerEvents: 'auto',

    [theme.breakpoints.up('md')]: {
        display: 'none',

    }
}))

export const ListType = styled(Typography)<{open: boolean}>(({theme, open}) => ({

    display: 'inline-block',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',

    color: 'black',
    padding: '2px 12px 2px 2px',

    ...open && {
        borderBottomColor:  'black',
    }
}))