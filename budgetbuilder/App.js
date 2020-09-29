
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Layout from './Components/Layout';

export default class Demo extends Component {

  render() {
    return (
     <Layout>
        <Grid>
          <Col style={{backgroundColor: '#ADD9FE'}} size={2}>
            <Text>1st col</Text>
          </Col>
          <Col size={1}>
            <Row style={{backgroundColor: '#91F58C'}}>
              <Text>
                First Row
              </Text>
            </Row>
            <Row style={{backgroundColor: '#B2ABE8'}}>
            <Text>
                Second Row
              </Text>
            </Row>
          </Col>
        </Grid>
      </Layout>
    );
  }
}

/**
 * 
 *  Change Theme
 * 
 */
// import React, { Component } from 'react';
// import { StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, StyleProvider } from 'native-base'
// import {Col, Row, Grid} from 'react-native-easy-grid'
// import getTheme from './native-base-theme/components'
// import material from './native-base-theme/variables/material'
// import commonColor from './native-base-theme/variables/commonColor';

// export default class Demo extends Component {

//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => <Text style={styles.item}>{item.key}</Text>

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }

//   //green #91F58C
//  //red #F58C9A
//  //blue #ADD9FE

//   render() {
//     return (
//        // Material style
//       // <StyleProvider style={getTheme(material)}>
//       <StyleProvider style={getTheme(commonColor)}>
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
//             </Button>
//           </Left>
//           <Body>
//             <Title>
//               Header
//             </Title>
//           </Body>
//           <Right>
//             <Icon name='add' />
//           </Right>
//         </Header>
//         <Grid>
//           <Col style={{backgroundColor: '#ADD9FE'}} size={2}>
//             <Text>1st col</Text>
//           </Col>
//           <Col size={1}>
//             <Row style={{backgroundColor: '#91F58C'}}>
//               <Text>
//                 First Row
//               </Text>
//             </Row>
//             <Row style={{backgroundColor: '#B2ABE8'}}>
//             <Text>
//                 Second Row
//               </Text>
//             </Row>
//           </Col>
//         </Grid>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//       </StyleProvider>
//     );
//   }
// }

// //two containers in half - red and white
// const styles = StyleSheet.create(
//   {
//     headerText: {
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header: {
//       height: 100,
//       backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//       height: 10,
//       backgroundColor: '#D4AF37'
//     },
//     item: {
//       flex: 1,
//       borderColor: 'black',
//       borderWidth: 1
//     },
//     list: {
//       marginTop: 50,
//       marginBottom: 50
//     }
//   }
// )





/**
 * 
 *  Easy Grid
 * 
 */
// import React, { Component } from 'react';
// import { StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
// import {Col, Row, Grid} from 'react-native-easy-grid'

// export default class Demo extends Component {

//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => <Text style={styles.item}>{item.key}</Text>

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }

  // green #91F58C
//red #F58C9A
//blue #ADD9FE

//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
//             </Button>
//           </Left>
//           <Body>
//             <Title>
//               Header
//             </Title>
//           </Body>
//           <Right>
//             <Icon name='add' />
//           </Right>
//         </Header>
//         <Grid>
//           <Col style={{backgroundColor: '#ADD9FE'}} size={2}>
//             <Text>1st col</Text>
//           </Col>
//           <Col size={1}>
//             <Row style={{backgroundColor: '#91F58C'}}>
//               <Text>
//                 First Row
//               </Text>
//             </Row>
//             <Row style={{backgroundColor: '#B2ABE8'}}>
//             <Text>
//                 Second Row
//               </Text>
//             </Row>
//           </Col>
//         </Grid>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

// //two containers in half - red and white
// const styles = StyleSheet.create(
//   {
//     headerText: {
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header: {
//       height: 100,
//       backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//       height: 10,
//       backgroundColor: '#D4AF37'
//     },
//     item: {
//       flex: 1,
//       borderColor: 'black',
//       borderWidth: 1
//     },
//     list: {
//       marginTop: 50,
//       marginBottom: 50
//     }
//   }
// )




/**
 * Native base
 * 
 */
// import React, { Component } from 'react';
// import { StyleSheet, ActivityIndicator, FlatList, View} from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'


// export default class Demo extends Component {

//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => <Text style={styles.item}>{item.key}</Text>

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }


//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
//             </Button>
//           </Left>
//           <Body>
//             <Title>
//               Header
//             </Title>
//           </Body>
//           <Right>
//             <Icon name='add' />
//           </Right>
//         </Header>
//         <Content>
//           {
//             (this.state.list.length) ?
//               <FlatList
//                 style={styles.list}
//                 data={this.state.list}
//                 renderItem={({ item }) => this.renderItem(item)}
//                 ItemSeparatorComponent={this.renderSeparator}
//                 ListHeaderComponent={this.renderHeader}
//                 ListFooterComponent={this.renderFooter}
//               /> : <ActivityIndicator />
//           }
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

// //two containers in half - red and white
// const styles = StyleSheet.create(
//   {
//     headerText: {
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header: {
//       height: 100,
//       backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//       height: 10,
//       backgroundColor: '#D4AF37'
//     },
//     item: {
//       flex: 1,
//       borderColor: 'black',
//       borderWidth: 1
//     },
//     list: {
//       marginTop: 50,
//       marginBottom: 50
//     }
//   }
// )






/**
 * Flex box deep dive
 *
 */

// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View} from 'react-native';


// export default class TouchableDemo extends Component {


//   // render() {
//   //   return (

//   //     <View style={styles.container} >
//   //     <Text style={styles.text} />
//   //     </View>
//   //   );
//   // }

//   //two containers in half - red and white
//    render() {
//     return (

//       <View style={styles.container} >
//       <View style ={styles.halfContainer}/>
//       <View style ={styles.halfContainerWhite}/>
//       </View>
//     );
//   }
// }

// //two containers in half - red and white
// const styles = StyleSheet.create(
//   {
//     halfContainer: {
//       flex: 1,
//       backgroundColor: '#E7141B'
//     },
//     halfContainerWhite: {
//       flex: 1,
//       backgroundColor: '#ffff'
//     },
//     container:{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'stretch', // change with center
//       backgroundColor: '#D4AF37'
//     }
// }
// )


/**
 *
 *  Flex introduction
 *
 */
// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View} from 'react-native';


// export default class TouchableDemo extends Component {


//   // render() {
//   //   return (

//   //     <View style={styles.container} >
//   //     <Text style={styles.text} />
//   //     </View>
//   //   );
//   // }

//   //two containers in half - red and white
//    render() {
//     return (

//       <View style={styles.container} >
//       <View style ={styles.halfContainer}/>
//       <View style ={styles.halfContainerWhite}/>
//       </View>
//     );
//   }
// }

// //two containers in half - red and white
// const styles = StyleSheet.create(
//   {
//     halfContainer: {
//       flex: 1,
//       backgroundColor: '#E7141B'
//     },
//     halfContainerWhite: {
//       flex: 1,
//       backgroundColor: '#ffff'
//     },
//     container:{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'stretch', // change with center
//       backgroundColor: '#D4AF37'
//     }
// }
// )

////three element stretched in colum in the center
// const styles = StyleSheet.create(
//   {
//     container:{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'stretch', // change with center
//       backgroundColor: '#D4AF37'
//     },
//     text:{
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//       backgroundColor: '#ffff'
//     }
// }
// )

////three element in a row at the beginning with space |   |   |
// const styles = StyleSheet.create(
//   {
//     container:{
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       backgroundColor: '#D4AF37'
//     },
//     text:{
//       top: 100,
//       backgroundColor: '#ffff'
//     }
// }
// )


////three element in a row one after another
// const styles = StyleSheet.create(
//   {
//     container:{
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       backgroundColor: '#D4AF37'
//     },
//     text:{
//       top: 100,
//       backgroundColor: '#ffff'
//     }
// }
// )

//one element at the beginning
// const styles = StyleSheet.create(
//   {
//     container:{
//       flex: 1,
//       justifyContent: 'flex-start',
//       alignItems: 'flex-start',
//       backgroundColor: '#D4AF37'
//     },
//     text:{
//       top: 100,
//       backgroundColor: '#ffff'
//     }
// }
// )

// one element in the center
// const styles = StyleSheet.create(
//   {
//     container:{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#D4AF37'
//     },
//     text:{
//       textAlign: 'center',
//       backgroundColor: '#ffff'
//     }
// }
// )





/**
 * Use Platform and Dimensions
 *
 */
// import React, { Component } from 'react';
// import { Platform, Dimensions, Image, TouchableOpacity, TouchableHighlight, ScrollView, FlatList, Alert, Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';


// export default class TouchableDemo extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => {
//     return (
//      <TouchableOpacity
//      onPress = {() => Alert.alert(`You clicked ${item.key}`)}
//      style={ {backgroundColor:'#D4AF37'} }>
//         <Text style={styles.item}>{item.key}</Text>
//      </TouchableOpacity>
//     );
//   }

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     const {height, width} = Dimensions.get('screen');
//     const isPortrait = (width > height) ? true : false;
//     const backgroundColor = (isPortrait) ? '#a9a9a9' : '#555eee';
//     const headerText  = (Platform.OS === 'ios') ? 'iOs' : 'Android';
//     return(
//       <View style={{ height: height/5, backgroundColor }}>
//         <Text style={styles.headerText}> Header Platform is {headerText} </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }

//    render() {
//     return (
//       <View style={{ flex: 1}}>
//        {

//          (this.state.list.length) ?
//             <FlatList
//               style={styles.list}
//               data={this.state.list}
//               renderItem={({ item }) => this.renderItem(item)}
//               ItemSeparatorComponent={this.renderSeparator}
//               ListHeaderComponent={this.renderHeader}
//               ListFooterComponent={this.renderFooter}
//               onEndReached={() => this.fillList(this.state.list.length + 50)}
//               onEndReachedThreshold={0.1}
//             /> : <ActivityIndicator />
//        }
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     headerText:{
//       fontSize: 30,
//       color: '#000000'
//     },

//     separator: {
//        height: 10,
//        backgroundColor: '#D4AF37'
//     },
//   item: {
//     flex: 1,
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   list: {
//     marginTop: 50,
//     marginBottom: 50
//   }
// }
// )





/**
 *
 *  Zoom image
 *
 */
// import React, { Component } from 'react';
// import { Image, TouchableOpacity, TouchableHighlight, ScrollView, FlatList, Alert, Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';


// export default class TouchableDemo extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => {
//     return (
//      <TouchableOpacity
//      onPress = {() => Alert.alert(`You clicked ${item.key}`)}
//      style={ {backgroundColor:'#D4AF37'} }>
//         <Text style={styles.item}>{item.key}</Text>
//      </TouchableOpacity>
//     );
//   }

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }

//   render() {
//     return (
//       <View style={{ flex: 1}}>
//               <ScrollView
//          contentContainerStyle={{alignItems:"center", justifyContent:"center"}}
//          centerContent
//          maximumZoomScale={2}
//          minimumZoomScale={1}
//          >

//          <TouchableHighlight>
//            <Image style={{width: 300, height: 300}}
//              source={{uri: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708'}}/>
//          </TouchableHighlight>
//          </ScrollView>
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     headerText:{
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header:{
//        height: 100,
//        backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//        height: 10,
//        backgroundColor: '#D4AF37'
//     },
//   item: {
//     flex: 1,
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   list: {
//     marginTop: 50,
//     marginBottom: 50
//   }
// }
// )





/**
 *
 *
 *   Touchables
 *
 */

// import React, { Component } from 'react';
// import { Image, TouchableOpacity, TouchableHighlight, ScrollView, FlatList, Alert, Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';


// export default class TouchableDemo extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => {
//     return (
//      <TouchableOpacity
//      onPress = {() => Alert.alert(`You clicked ${item.key}`)}
//      style={ {backgroundColor:'#D4AF37'} }>
//         <Text style={styles.item}>{item.key}</Text>
//      </TouchableOpacity>
//     );
//   }

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }


//   render() {
//     return (
//       <View style={{ flex: 1}}>
//        {

//          (this.state.list.length) ?
//             <FlatList
//               style={styles.list}
//               data={this.state.list}
//               renderItem={({ item }) => this.renderItem(item)}
//               ItemSeparatorComponent={this.renderSeparator}
//               ListHeaderComponent={this.renderHeader}
//               ListFooterComponent={this.renderFooter}
//               onEndReached={() => this.fillList(this.state.list.length + 50)}
//               onEndReachedThreshold={0.1}
//             /> : <ActivityIndicator />
//        }
//        </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     headerText:{
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header:{
//        height: 100,
//        backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//        height: 10,
//        backgroundColor: '#D4AF37'
//     },
//   item: {
//     flex: 1,
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   list: {
//     marginTop: 50,
//     marginBottom: 50
//   }
// }
// )






/****
 *
 *   FlatList
 *
 */

// import React, { Component } from 'react';
// import { FlatList, Alert, Button, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';


// export default class OnButtonListener extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     setTimeout(() => this.fillList(100), 1000);
//   }

//   fillList = (numberOfRows) => {
//     const list = [...Array(numberOfRows)].map((x, i) => ({ key: `item ${i}` }));
//     this.setState({ list })
//   }

//   renderItem = (item) => <Text style={styles.item}>{item.key}</Text>

//   renderSeparator = () => <View style={styles.separator} />

//   renderHeader = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Header </Text>
//       </View>
//     )
//   }

//   renderFooter = () => {
//     return(
//       <View style={styles.header}>
//         <Text style={styles.headerText}> Footer </Text>
//       </View>
//     )
//   }


//   render() {
//     return (
//       <View style={{ flex: 1}}>
//         {
//           (this.state.list.length) ?
//             <FlatList
//               style={styles.list}
//               data={this.state.list}
//               renderItem={({ item }) => this.renderItem(item)}
//               ItemSeparatorComponent={this.renderSeparator}
//               ListHeaderComponent={this.renderHeader}
//               ListFooterComponent={this.renderFooter}
//               onEndReached={() => this.fillList(this.state.list.length + 50)}
//               onEndReachedThreshold={0.1}
//             /> : <ActivityIndicator />
//         }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     headerText:{
//       fontSize: 30,
//       color: '#ffff'
//     },
//     header:{
//        height: 100,
//        backgroundColor: '#a9a9a9a9'
//     },
//     separator: {
//        height: 10,
//        backgroundColor: '#D4AF37'
//     },
//   item: {
//     flex: 1,
//     borderColor: 'black',
//     borderWidth: 1
//   },
//   list: {
//     marginTop: 50,
//     marginBottom: 50
//   }
// }
// )

/*

      On button press event + input of the user + state

*/

// import React, { Component } from 'react';
// import {  Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';


// export default class OnButtonListener extends Component {
//   state = {
//     text: ''
//   }

//   OnButtonPress(){
//     const { text } = this.state
//     Alert.alert(`you entered ${text} into the text box`)
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'powderblue' }}>
//         <TextInput style={{
//           height: 40,
//           width: 300,
//           borderColor: 'black',
//           borderWidth: 1
//         }}
//           onChangeText={(text) => this.setState({ text })}
//           placeholder="enter text here"
//           autoCapitalize={"none"}
//         />
//         <Button
//           title="press here"
//           onPress={this.OnButtonPress.bind(this)} />
//       </View>
//     );
//   }
// }




// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       // <View>
//       //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//       //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//       //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       // </View>

// <View style={{flex: 1, flexDirection: 'row', top: 100, justifyContent: "center", alignItems: "center"}}>
// <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
// <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
// <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
// </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {

//   componentDidMount(){
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }

//   //state object
//   state = { isShowingText: true };

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 100}}>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }



// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
/////////////////

// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default HelloWorldApp;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;



// green #91F58C
//red #F58C9A
//blue #B2ABE8