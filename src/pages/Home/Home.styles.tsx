import {styled} from "@mui/material/styles";


export const HomeContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
})

export const ScheduleContainer = styled('div')(({theme}) => ({
    display: 'flex',
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
          
}))

export const Time = styled('div')({

})
export const Place = styled('div')({


})
