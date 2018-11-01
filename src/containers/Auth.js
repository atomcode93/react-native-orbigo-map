import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Image, ActivityIndicator, Alert } from 'react-native'
import { Button, Container, Form, Input, Item, StyleProvider, Tab, Tabs, Text, View } from 'native-base'
import { Grid, Row } from 'react-native-easy-grid'

// Actions
import { loginRequest, signupRequest } from '../actions/auth';

import config from '../config'
import images from '../config/images'
import colors from '../config/colors'

import getTheme from '../../native-base-theme/components'
import orbigo from '../../native-base-theme/variables/orbigo'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginEmail: 'test@test.com',
      loginPassword: '123456',
      signupEmail: '',
      signupPassword: '',
      signupPhoneNumber: '',
    }
  }

  _handleChangeText = (name, text) => {
    this.setState({ [name]: text });
  }

  _handleEmailLogin = () => {
    if (this.state.loginEmail === ''){
      Alert.alert(
        'Alert',
        'Please Input Email',
      )
      return;
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if (reg.test(this.state.loginEmail) === false) {
        Alert.alert(
          'Alert',
          'Please Input Valid Email',
        )
        return;
      }
    }
    if (this.state.loginPassword === ''){
      Alert.alert(
        'Alert',
        'Please Input Password',
      )
      return;
    }
    this.props.loginRequest(this.state.loginEmail, this.state.loginPassword)
    .then((res) => {
      this.props.navigation.navigate({routeName: 'NewJourney'})
    })
    .catch((err) => {
      Alert.alert(
        '',
        err,
      )
    })
  }

  _handleEmailSignUp = () => {
    if (this.state.signupEmail === ''){
      Alert.alert(
        'Alert',
        'Please Input Email',
      )
      return;
    } else {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if (reg.test(this.state.signupEmail) === false) {
        Alert.alert(
          'Alert',
          'Please Input Valid Email',
        )
        return;
      }
    }
    if (this.state.signupPassword === ''){
      Alert.alert(
        'Alert',
        'Please Input Password',
      )
      return;
    }
    if (this.state.signupPhoneNumber === ''){
      Alert.alert(
        'Alert',
        'Please Input Phone Number',
      )
      return;
    }
    let data = {
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      phoneNumber: this.state.signupPhoneNumber
    }
    this.props.signupRequest(data)
    .then((res) => {
      Alert.alert(
        'Notification',
        'Successfully registered!',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate({routeName: 'NewJourney'})}
        ]
      )
    })
    .catch((err) => {
      Alert.alert(
        'Alert',
        err,
      )
    })
  }

  render () {
    return (
      <StyleProvider style={getTheme(orbigo)}>
        <Container>
          <Grid>
            <Row size={30} style={styles.alignCenter}>
              <Image source={images.logo} style={styles.logo}/>
            </Row>
            <Row size={70} style={{justifyContent: 'center'}}>
              <View style={{width: '80%'}}>
                <Tabs
                  initialPage={0}
                  tabBarUnderlineStyle={{height: 2, backgroundColor: colors.green}}
                >
                  <Tab
                    heading={'Sign up'}
                    tabStyle={{backgroundColor: colors.white}}
                    activeTabStyle={{backgroundColor: colors.white}}
                    textStyle={{color: colors.gray1}}
                    activeTextStyle={{color: colors.green}}
                  >
                    <Form style={styles.form}>
                      <Item authLabel>
                        <Input placeholder="EMAIL ADDRESS" value={this.state.signupEmail} placeholderTextColor={colors.gray1} autoCapitalize="none"
                        onChangeText={(text) => this._handleChangeText('signupEmail', text)}/>
                      </Item>
                      <Item authLabel>
                        <Input placeholder="PASSWORD" value={this.state.signupPassword} placeholderTextColor={colors.gray1} autoCapitalize="none" secureTextEntry={true}
                        onChangeText={(text) => this._handleChangeText('signupPassword', text)}/>
                      </Item>
                      <Item authLabel>
                        <Input placeholder="PHONE NUMBER" value={this.state.signupPhoneNumber} placeholderTextColor={colors.gray1} autoCapitalize="none" keyboardType='numeric'
                        onChangeText={(text) => this._handleChangeText('signupPhoneNumber', text)}/>
                      </Item>
                    </Form>
                    { this.props.loading? <ActivityIndicator animating={true} color="#20d471" size="large" />
                    :<Button green style={styles.button}
                            onPress={this._handleEmailSignUp}>
                      <Text>{`Create account`}</Text>
                    </Button>
                    }
                    { this.props.isSocial? <ActivityIndicator animating={true} color="#20d471" size="large" />
                    :<Button bordered gray style={[styles.button, styles.marginTomSmall]}>
                      <Text>{`Sign up with Facebook`}</Text>
                    </Button>
                    }
                  </Tab>

                  <Tab
                    heading={'Log in'}
                    tabStyle={{backgroundColor: colors.white}}
                    activeTabStyle={{backgroundColor: colors.white}}
                    textStyle={{color: colors.gray1}}
                    activeTextStyle={{color: colors.green}}
                  >
                    <Form style={styles.form}>
                      <Item authLabel>
                        <Input placeholder="EMAIL ADDRESS" placeholderTextColor={colors.gray1} value={this.state.loginEmail}
                        autoCapitalize="none" onChangeText={(text) => this._handleChangeText('loginEmail', text)}/>
                      </Item>
                      <Item authLabel>
                        <Input placeholder="PASSWORD" placeholderTextColor={colors.gray1} value={this.state.loginPassword}
                        autoCapitalize="none" secureTextEntry={true} onChangeText={(text) => this._handleChangeText('loginPassword', text)}/>
                      </Item>
                    </Form>
                    { this.props.loading? <ActivityIndicator animating={true} color="#20d471" size="large" />
                    :<Button green style={styles.button}
                            onPress={this._handleEmailLogin}>
                      <Text>{`Login`}</Text>
                    </Button>
                    }
                    { this.props.isSocial? <ActivityIndicator animating={true} color="#20d471" size="large" />
                    :<Button bordered gray
                            style={[styles.button, {marginTop: config.smallWhiteSpace}]}>
                      <Text>{`Log in with Facebook`}</Text>
                    </Button>
                    }
                  </Tab>
                </Tabs>
              </View>

            </Row>
          </Grid>

        </Container>
      </StyleProvider>
    )
  }
}

const styles = {
  logo: {
    width: 200 / 1242 * config.windowWidth,
    height: 200 / 1242 * config.windowWidth
  },
  button: {
    width: config.windowWidth * 0.55,
    alignSelf: "center"
  },
  form: {
    width: '100%',
    marginTop: config.mediumWhiteSpace,
    marginBottom: config.largeWhiteSpace
  },
  marginTomSmall: {
    marginTop: config.smallWhiteSpace
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.isLoading,
  socialLoading: state.auth.isSocial,
    uid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
  signupRequest: (data) => dispatch(signupRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
