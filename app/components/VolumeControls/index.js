import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

import PlayOptionsControls from '../PlayOptionsControls';
import VolumeSlider from './VolumeSlider';

class VolumeControls extends React.Component {

  handleClick(value) {
    if (value > 0){
      this.props.toggleMute(false);
    }
    return this.props.updateVolume(value);
  }

  toggleMute = () => {
    this.props.toggleMute(!this.props.muted);
  }

  render() {
    return (
      <div className={styles.volume_controls_container}>
        <PlayOptionsControls
          toggleOption={this.props.toggleOption}
          settings={this.props.settings}
        />
        <div className={styles.volume_speaker_control}
          onClick={this.toggleMute.bind(this)}>
          <FontAwesome name={this.props.muted ? 'volume-off' : 'volume-up'} />
        </div>

        <VolumeSlider
          fill={this.props.volume}
          handleClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

export default VolumeControls;
