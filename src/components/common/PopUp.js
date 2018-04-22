import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Text } from 'react-native';

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: props.visible || false };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  
  render() {
    const {
      children, 
      animationType,
      transparent,
      visible,
      onShow,
      onRequestClose,
      onDismiss,
      animated
    } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          animationType={animationType}
          transparent={transparent}
          visible={this.state.modalVisible || visible}
          onShow={onShow}
          onRequestClose={onRequestClose}
          onDismiss={onDismiss}
          animated={animated}
        >
          {children}
          <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
          >
                  <Text> Hide Modal</Text>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10
  }
});

export { PopUp };
