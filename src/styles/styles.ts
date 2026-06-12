import {Container, styled} from "@mui/material";

export const StyledContainer = styled(Container)({
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
});

export const CenteredContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})