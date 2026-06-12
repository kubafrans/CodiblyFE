import {Box, Container, Stack, styled, TextField} from "@mui/material";

export const StyledContainer = styled(Container)({
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    gap: '18px',
});

export const CenteredContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const StyledStack = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
})

export const StyledForm = styled('form')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    gap: '18px'
})

export const StyledTextField = styled(TextField)({
    maxWidth: '250px',
    maxHeight: '80px'
})

export const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

})