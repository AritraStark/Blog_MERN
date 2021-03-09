import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Footer = () => {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/AritraStark">
                AritraStark
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <div>
                <br/>
            </div>
        </div>
    )
}
