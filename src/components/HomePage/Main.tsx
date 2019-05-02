import React from 'react';
import { withStyles, WithStyles, Theme, Paper, Grid } from '@material-ui/core';
import Logo from 'logo.svg';

const styles = (theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
});
export interface MainProps extends WithStyles<typeof styles> {
    theme: Theme,
  }
class Main extends React.Component<MainProps, {}> {
  render() {
      let {classes} = this.props;
      return (
        <div className={classes.toolbar}>
            <Grid container spacing={24}>
                <Grid item xs>
                    <Paper>
                        <div style={{padding : '20px'}}>
                            <h1>Welcome to BlockRedit.</h1>
                            <img className='App-logo' src={Logo} alt=""/>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
      )
  }
}

export default withStyles(styles)(Main);