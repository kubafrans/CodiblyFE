import {CenteredContainer} from "../../styles/styles";
import {Typography} from "@mui/material";

export const NoDataView = () => {
    return <CenteredContainer>
        <Typography variant="body1" component="div">
            Brak danych do wyświetlenia
        </Typography>
    </CenteredContainer>
}