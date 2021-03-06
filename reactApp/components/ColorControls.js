// packages
import React from 'react';
import { GithubPicker } from 'react-color';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import FontIcon from 'material-ui/FontIcon';

// css styles
import styles from '../assets/styles'

// imported components
import StyleButton from './StyleButton';

var COLORS = [
  // {label: 'Red', style: 'red'},
  // {label: 'Orange', style: 'orange'},
  // {label: 'Yellow', style: 'yellow'},
  // {label: 'Green', style: 'green'},
  // {label: 'Blue', style: 'blue'},
  // {label: 'Indigo', style: 'indigo'},
  // {label: 'Violet', style: 'violet'},
];

class ColorControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerOpen: false,
    }
  }

  openColorPicker(e) {
    this.setState({
      colorPickerOpen: true,
      colorPickerButton: e.target,
    })
  }

  closeColorPicker() {
    this.setState({
      colorPickerOpen: false,
    })
  }

  render() {
    return (
      <div style={styles.controls}>
        <RaisedButton
          icon={<FontIcon className="material-icons">format_paint</FontIcon>}
          onMouseDown={(e) => this.openColorPicker(e)}
          >
          <Popover
            open={this.state.colorPickerOpen}
            anchorEl={this.state.colorPickerButton}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={() => this.closeColorPicker()}
            >
            <GithubPicker
              onChangeComplete={(color) => this.props.onToggle(color.hex)}
            />
          </Popover>
        </RaisedButton>
      </div>
    );
  }
};

export default ColorControls
