import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux';
import { dataFetchData } from './actions';



class App extends Component {

  componentDidMount() {
    this.props.fetchData('https://poloniex.com/public?command=returnTicker');
    console.log(this.props);
  }


  render() {
    let url = 'https://poloniex.com/public?command=returnTicker';

    if (this.props.appData.hasErrored) {
      console.log(this.props);
    return(
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.text}>Sorry! There was an error loading the data</Text>
        </View>
      </View>
    );
    }
    if (this.props.appData.isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.text}>Loading</Text>
        </View>
      </View>
    );
    }
    return (
    <View style={styles.container}>
    <View style={styles.mainContent}>
        {this.props.appData.data.map((data) => (
            <View key={data.id}>
                <Text> PRICE: {data.USDT_BTC.last} </Text>
            </View>
        ))}
    </View>
  </View>
    );

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.text}>polo</Text>
    //     <TouchableHighlight style={styles.button} onPress={ () => this.props.fetchData()  }>
    //       <Text style={styles.buttonText}>Load Data</Text>
    //     </TouchableHighlight>
    //     <View style={styles.mainContent}>
    //       {
    //         this.props.appData.isLoading && <Text>Loading</Text>
    //       }
    //       {
    //         // dis needa change
    //         this.props.appData.data.length ? (
    //           this.props.appData.data.map((data) => {
    //             return <View key={data.id} >
    //               <Text>LAST: {data.USDT_BTC.last} </Text>
    //               <Text>24HR HIGH: {data.USDT_BTC.high24hr} </Text>
    //             </View>
    //           })
    //         ) : null
    //       }
    //     </View>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

const mapStateToProps = (state) => {
  return {
    appData: state.appData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (param) => dispatch(dataFetchData(param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
