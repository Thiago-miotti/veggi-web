import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider'

import DefaultButton from '../DefaultButton';

const Modal = (props) => {
    const [open, setOpen] = React.useState(props.modalState);

    React.useEffect(() => {
        if (props.modalState)
            setOpen(true);
        else
            setOpen(false);

    }, [props.modalState])

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {props.title}
                </DialogTitle>

                <Divider />

                <DialogContent>
                    {props.content}
                </DialogContent>

                <DialogActions>
                    <DefaultButton text="Create task" action={props.handleClose} width="100%" />
                </DialogActions>

            </Dialog>
        </div>
    );
}

export default Modal;