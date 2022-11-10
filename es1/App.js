/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { Surface} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { Chip } from 'react-native-paper';
import {useState, useEffect} from 'react';
import { DateTimePickerModal } from 'react-native-paper-datetimepicker';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//manel?
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//commit
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    
  };

  const { chipKey, value, chipPressed, sel } = props;

  const [selected, setSelected] = useState(false);
  const [textColor, setTextColor] = useState(`red`);
  const [style, setStyle] = useState({
    borderColor: `red`,
    backgroundColor: `grey`,
  });

  useEffect(() => {
    if (selected) {
      setTextColor(`red`);
      setStyle({ borderColor: `grey`, backgroundColor: `transparent` });
    } else {
      setTextColor(`grey`);
      setStyle({ borderColor: `grey`, backgroundColor: `transparent` });
    }
  }, [selected]);

  const handlePress = () => {
    setSelected(!selected);
    if (chipPressed) {
      chipPressed(selected);
    }
  };


  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        


        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

<TextInput
          label="Email"
          placeholder='Escribe el email'
          mode="outlined"
        />

<Button icon="alien" uppercase={false}  color="purple" mode="contained" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  <Button icon="alien" color="purple" mode="elevated" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  <Button icon="alien" color="purple" mode="outlined" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
  <Button icon="alien" color="purple" mode="contained-tonal" onPress={() => console.log('Pressed')}>
    Alien
  </Button>
<Section style={style.sectionContainer}> Descanset MANEL? </Section>
  <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="red" />
  <Section style={style.sectionContainer}> BOTO EN SURFACE </Section>
  <Surface style={styles.width} elevation={4}>
            <Button
              style={styles.width}
              icon="alien"
              color="white"
              labelStyle={{ color: "blueviolet"}}
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Alien
            </Button>
          </Surface>
  <Section style={style.sectionContainer}> CHIPS </Section>
  <View style={{ flexDirection: 'row' }} >
  
  <Chip style={styles.chip1} icon="web" color="red" onPress={() => console.log('Pressed')}>Internet</Chip>
  <Chip
              style={styles.chip2}
              icon="wifi"
              selected={selected}
              selectedColor={textColor}
              onPress={handlePress}>
              {value}
              Wifi
            </Chip>
            </View>


        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  width: {
    width: 340,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  chip1: {
    width: 95,
    textAlign: 'center',
  },
  chip2: {
    width: 70,
    textAlign: 'center',
  },
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

