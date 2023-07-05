import { useState, useCallback } from 'react';


export const useOrderPage = () => {


    const [open, setOpen] = useState(false)
    
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return {
        open,
        handleClickOpen,
        handleClose

    };

};