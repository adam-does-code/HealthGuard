import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


class HealthProgressBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const barWidth = Dimensions.get('screen').width - 30;
    return (
      <View style={styles.container}>
      <Text style={styles.label}>{this.props.title}</Text>
      <ProgressBarAnimated
        {...this.props.customColor}
        width={barWidth}
        height={50}
        value={this.props.percentCompleted}
        backgroundColorOnComplete="#6CC644"
        description={this.props.description}
      />
      </View>
    );
  }
}

HealthProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentCompleted: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  customColor: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
});


export default HealthProgressBar;