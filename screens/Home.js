import React from 'react';
import styled from 'styled-components/native';
import colors from '../color';
const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
  padding-top: 100px;
`;
const Text = styled.Text`
  font-size: 35px;
  font-weight: 700;
  color: #fff;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 100px;
`;
const Btn = styled.TouchableOpacity`
  background-color: ${colors.btnColor};
  border-radius: 40px;
  height: 80px;
  width: 80px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Home = ({navigation: {navigate}}) => (
  <View>
    <Title>My Jounal</Title>
    <Btn onPress={() => navigate('Write')}>
      <Text>+</Text>
    </Btn>
  </View>
);
export default Home;
