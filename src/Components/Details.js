import { useState, useEffect, useRef } from 'react';

export const useCloseAll = () => {
    const [open, setOpenState] = useState(null);

    const closeAll = () => {
        setOpenState(false);

        setTimeout(() => {
            setOpenState(null);
        }, 50);
    };

    return [open, closeAll];
};

const Details = ({ summary, children, forceState, classes }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const onToggle = (e) => {
            const nextState = e.currentTarget.open;
            setOpen(nextState);
        };

        element.addEventListener('toggle', onToggle);

        return () => element.removeEventListener('toggle', onToggle);
    }, []);

    // force close
    useEffect(() => {
        if (forceState != null) {
            setOpen(forceState);
        }
    }, [forceState]);

    return (
        <details ref={ref} open={open} className={classes.details}>
            <summary className={classes.summary}>{summary}</summary>
            {children}
        </details>
    );
};

Details.defaultProps = {
    classes: {
        details: null,
        summary: 'details__summary'
    }
};

export default Details;