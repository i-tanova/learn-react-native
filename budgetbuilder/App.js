

/**
 * Setting up a Form
 * 
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { Content, Form, Item, Label, Input, TextArea } from 'native-base';
// import { Button, Content, DeckSwiper, Card, CardItem, Text, View, Image, Form, Item, Input, Label, TextArea } from 'native-base';
import Layout from './Components/Layout';
// import TabHeading from './native-base-theme/components/TabHeading';

const { width } = Dimensions.get('window')

export default class Demo extends Component {

  state = {
    title: '',
    amount: '',
    notes: '',
    budget: [{
      title: "Budget Builder",
      notes: '',
      amount: ''
    }]
  }

  componentDidMount() {
    if (this.state.budget.length > 1) {
      this.getTotal();
    }
  }

  getTotal() {
    const { budget } = this.state;
    const amount = budget.map((item) => item.amount).reduce((total, num) => total + num);
    budget.push({ title: 'total', amount });
    this.setState({ budget });
  }

  onButtonPress() {
    const { title, amount, notes, budget } = this.state;
    budget.pop();
    budget.push({ title, amount, notes });
    this.setState({ title: '', amount: '', notes: '', budget }, () => this.getTotal())
  }

  render() {
    return (
      <Layout>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>title</Label>
              <Input
                onChangeText={(title) => this.setState({ title })}
                value={this.state.title} />
            </Item>
          </Form>
        </Content>
      </Layout>
      // <Layout>
      //   <Content>
      //     <Form>
      //       <Item floatingLabel>
      //         <Label>title</Label>
      //         <Input 
      //         onChangeText={(title) => this.setState({title})}
      //         value={this.state.title}/>
      //       </Item>

      //       <Item floatingLabel>
      //       <Label>amount</Label>
      //         <Input 
      //         onChangeText={(amount) => this.setState({amount: +amount})}
      //         value={this.state.amount.toString()}/>
      //       </Item>
      //       <Item stackedLabel>notes</Item>
      //       <TextArea style= {styles.textArea}
      //         value={this.state.notes}
      //         onChangeText={ (notes) => this.setState({notes}) }
      //         rowSpan={ 5 }
      //       />
      //     </Form>
      //   </Content>

      //   {<View style={styles.cardContainer}>

      //      <DeckSwiper
      //      ref={ (card) => this._deckSwiper = card }
      //      dataSource={this.state.budget}
      //      renderItem=
      //      { item => 
      //       <Card style={{elevation: 3}}>
      //         <CardItem cardBody>
      //           <View style={styles.cardStyle}>
      //              {
      //               (item.title === 'Budget Builder') ? <Text> Your personal budget tracker</Text> :
      //               (item.title === 'total') ? 
      //               <React.Fragment>
      //                 <Text>The item {item.title} has an amount of {item.amount}</Text>
      //                 <Text>notes: {item.notes}</Text>
      //               </React.Fragment>
      //               <Text> the total amount due is {item.amount} </Text>
      //               }  
      //           </View>
      //         </CardItem>
      //       </Card>
      //     }
      //     />
      //     <Button
      //     dark
      //     onPress={this.onButtonPress.bind(this)}
      //     style={styles.placeAtBottom}
      //     >
      //       <Text>Submit Budget Item</Text>
      //     </Button>

      //   </View> }
      // </Layout>

    );
  }
}

const styles = StyleSheet.create({
  placeAtBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    height: 250,
    backgroundColor: '#DDF9D9'
  },
  cardStyle: {
    height: 150,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ADD9FE'

  }
  ,
  textArea: {
    flex: 1,
    width
  }

});

/**
 *
 *   Custom Component + Image resize demo
 *
 */

// import React, { Component } from 'react';
// import { Text, View, Image } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import Layout from './Components/Layout';

// export default class Demo extends Component {

//   render() {
//     return (
//       <Layout>
//         <Grid>
//           <Col style={{ backgroundColor: '#ADD9FE' }}>
//             <Image
//               style={{ flex: 1, height: undefined, width: undefined }}
//               source={require('./Images/cat.jpg')}
//               resizeMode='contain'
//             />
//           </Col>
//           <Col style={{ backgroundColor: '#ADD9FE' }}>
//             <Image
//               style={{ flex: 1, height: undefined, width: undefined }}
//               source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUPDxAPDw8VFRAPEBAPEBAQEBUQFRUXFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHSAtLS0tKysrLSstLS0tLS0tLS0tLSstLS0tLSstLS0tKy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA5EAACAQIFAgQDBgUEAwEAAAABAgADEQQFEiExQVEGEyJhcYGRMkKhscHwBxQjYtEVM1LhgqLxU//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgMBAQEAAgMAAAAAAAABAhEDITFBElEiYQQTgf/aAAwDAQACEQMRAD8A9AAkgIpITFsQjiKPAFE0cSNXiAcV4kz+ojlKRIsehA46k/GYWA8e1aL6cQLofvA337+3aX4waqzs1ubc+15jZrlS1R6bauQNhf2HvFP9trj109dy3HJXprUpkMpFwRCp4v4M8SPgav8ALVb+UzWUn7pPT4XnsOExa1VDKbg7x6ZVfFFHgRR40eAKPK61VUBZiFUbknYTksz8bU1by6ILnqYjk27GPMfIcwauLmbMJRZoo8aPAikWkpFoGpaVtLGlZjJW0raWNIGMlLShxCGlDxgO4lDiEPKHEoglUQV4bUEFcRkCxImbiJp4kTOxEqBnmKOYoyewCSEiJITnaFHjR4A8jU4PwMeB5zixRo1Kl7aVZhx0EA89xDMDU92Zh16C3Mw8RiQT0v8A8bkX/wC4aMxapSSrtdkViB/yAsw/AH5iZjVKTN6qiL3DDp8YYxvlfGfmyioNYNivOrZh/n4y3IfGGKwx0031KNwrglbHYg9ehj5olM2WnU132ve4t7bCZr+ThhpY+ZUY76DcAH9/jLjHJ3vhr+KBd2TGoqr91qSsd+xH6zqR4/wH36j0ze1mpt9bi4ni6Y4MxC0wL7WAF77WIPe/5zTqYT7FQ+pdmIHGsW7/ABX6xZagxm3t2DzvC1d6dek219mF/oZj43x5gaeoK7VXBK6KaEkn2J2t7zyzFYqlVsCuk8Kwt06E9+Yly626OQbXXqbdZMs+q/P87bufeK6uKYICVB3Wmp2Qd2PVvyhWU5egGoD1HctySepvOZyfLndr3Ui+m9twB/bO+y/DhrIpY3IUGw+sMulcbpPC+G0U79WN5uSjDU9ChQOBaXiKIyu6eKKPBJSLyUi8DUNKzLGlRjJBpAybSBjCppS8vaUvGSh4PUhLQeqI4QWpBakKqQZ5QB4gTOxM08QJm4qVCZ5ijmKMnr8eNHnO0KPGigDzzz+L2YAUBRBGote3WwnoRM8c/ivUJrAXRttgt7j4ysfQ5/LMaqrdxcaALXsdW4DD5AfQSeW0krK7ODoUg6lALD/AmMMK1hqJFxdVHM0csxVYUjQp6lufU2pePpHZo5lvpZi8YP8AZpEmmbG5N9/h0/fzHpYb1m9n4bUSN7EbNfpzx3E6TKskpUUu7es7m5H0gxwNnsulk5FgtgT9TInJj8XePL6Bw2HWwO4KuQLaL2FrXP7E3fFNMLRSum41jVYWGlyBvb30yeHw7uCKGFNfRdXquyU6YY8oSdyd97e0TZkoX+Qx2GOCWoGWlW1+ZSLbW3t3AMm5S305qTTmcVQIZqf2Q2l1N++23xl2QYhkqaGO24BYEja4P5Taz7LjSNPzgpKoFRwfSQp+18YqGU3ZdDFtWld730k3378/hL6uKe5ksy+kxcsu7aW0k7gqjWb/AMiLTtPCChmJFgFt6T0J/WctTNDCvrqVFp0UFUBqh0mo76RpXqQNB3A6wnwhmqJVXRUD0XYrcberkXv9IpNw7lp6mskJCm1xcScGZ48aKAPI1JKQqRBS0qMtaVGMIGQMmZExhWwlDwhpQ8ZKWg9SEtB6sZA6kHaE1YM0oBcRMzFTSxEzcVKhAYo5ijJ67FGimDQ8UaKAJztPEP4k1mOJsTq29O3H4T2rFmyE3tsZ4P4mxXm4pmqMdjYau36R4imynBlh5je37HeGU3CnUOmy8fkOsC/1BUX36KNyY2Cp1K93N1C9zt9JNlvrTGyeNbBIlZv6mruD2PuJs5fhMNTIqPRYC+k2vce4nO4WiyVFawt1vcAbe07HBqzglghSwsV1E/SZZzTbjy362a1JPJdEb+jVJdah38tmUKyuB9kbageNzxtMbx3XwdTBLgxUpNVRV8sUr1GDIhCWtfcmwt2vC8BdQR6l6C4K2XoeTAsdh9WoiqbEaQiC5v7n99N5jhjrP9f+lnxT3bmVz+nWwQwtYn+ZphbG2rjbn4TUyfE01ppqPrXSy2Gq29/jaYFLw49IsygljuSd9rnb5zRyarqtT0rckgd7Dm03ys+DDG29u6w5p1KdN0AKMHRx5asGZdKhWJPpFg3Q3nD5jhFwtSo+GpnyEruh0EWVxZiov21WA/ttGxlXEUWdaFV6asFLhHPpPF9IPuN+bfCDtWqKlPCWtSualwp1Mx3ZmZjcm/WHDx2X9bY5zWVlexeHswTEUErISQw3vyGGxB97zTnH/wAN7eQ4BJAqvyPYTsJrfUHijR4geQqSchUgFLSky55UYwgZEyZkTAlbSl5e0oeMKmg1WEtBqsoglSDtCKsHaMAsRM3EzSxMzcRKiQhEUcxRh6zFFFMGhRRRQDA8U50cPTNlvcEX4nimbEuxY8km9v8AE9K8fYttWjcJb4bzzav9o3Ox62/xHDvgDzUHNz02/e8PpZvVsEo0jbgG2/yluDy1G9QAIsb3JCi3c7TSoYeio/3WY7DRRHXtuLtHbCkoBaWNI1HQo/uc6v8A1B/Gb+QYzFgrQ8wKx3C+WCSPa7CFZfTv6dFFDt/uIzsPiCbD4Ga1ZHUbG1v/AM/0VbKOvN5GWU8sa442dymx5qU/VW1MCdOktTp89gT+pMHpIzt9o06YKqq0hTPp3O7vz8gfiZTicw02DHy2vsXtdvfSoFz+E1MoyYVxqqNTp3NgCo3tvuoOw623meutL/Xe6jhMNcksajPc6ld0NieAVU9oE3ghw383Q102RyTTuyq4YFbDe17m87jAZbSokWAquTdbIoA2tNXGYWuy+jSLWbT0NukMcL7au8uO+owst/h/TC+dUdjWZBr6qLA+ke083xHpbVUqIjWKgggglWK7NsNwJ69W8QBcN5hRg5BUU2Olte+1+h2M4v8A0oVqTeaieti66rkG/F3Burfu00n+PrC7zu274Aw+jDkghgzagQQegHIJnUTnfBWFFGh5OkoVJ2JB57EAflOij9RejxRo8RHkHk5B4BS8qMteVmMkDGkrRowreDvCHlDRhS0Fqwp4LVjILVgzQirB3jIHiJm4iaOImdXlQgpiiMUYesxXjRpg0SvHkImawuYByHjjBAgVAfUORfpPOq+EqMfTqHzsJ2Pi/OwxKKVI4nHUMz8tvVcoeRzHFfFSUXQgE6j2G+3uT/3NClT9J8tArb3cWZt+xPT5TTy/BUMQuuk/swJAI+UPw+QEHa9jaxFj8bSc9rw05NaOJpsHVg5HAN727Af4nc+FalXEDSUOscgAqR3mzkHh+nfUwBYG/vvOzweHRNlAHwFpn3l6q2Y+OUTwjSJD1Eub3N+ZqU8qpLayqLCw2nShQZVUwymVLplbtmUNN7KB8ekOpmw2k6WCWFJRAj2Ti88y6lSJq1CdyW0sx0372nOJnetytOxsbMvQz0zNMvpV10VVDL7zisyyOjhzqprp6TLOfXRxZTxp5A9we223Ue015k+HQNBPUnea81x8Ycl3lSjxhHjSUi4k5F4BQ8rMtcSsiMkLRjJRjGFLyhoQ8oaMlDwWrC3gdWMBakHeX1IPUlECrzOrzQrTPrxwgxijGKMPWYpG8e8xaFBsyqaabHbg8m0JgebUw9J1P/EwDxLMcUWqtYb3O3I+sza6k9z8AbS3H19FUoLBbmG0MIHtz7ngStD1Xkqujhgt7dCs9T8PZ4Dp82np27bD4Srwxk1IUwadMEnmo25+V50NPJwehB/fSO2FBeFUKxZT6W3+cIq5kiuAzheBcmwuekHOH8tQL7TgMxauMQ9XzlCKwK0XXVrqEkA3vsN1H1mfX2qkt8m3p/8APbMykG3Iv1k8NiywudpyIyPGPXSqaiJT3aoqlvWTvxaw33+U6Wjh2Gx9oWQmrSrS3zJj1UqdDaJfOA5DSdG0MTiVUEkgDuZ574s8TUyxpJ6iNmI6TVz6pWIN+Lcfvmec5xTuToC6jzwT9IdeLmN1t3fgjNBVUqCDb3nWiea/w1y2rSZi72B3C3npQlIy9KPFFER4zR4iIBS8rIlrCQIlErtImWESLQCh5Q0IeDvGSipA60MqQKtKASpBnMIqmDPGQKqYBXh1WZ9eUSgxRiYoB6reK8rvFeZLWapVihdSLXuDJXldQ7QDw/PcA+t9gCrG468yrKcdqHluSLdyAPr1m3n50YqoDY3N7nsZgZjlTG9Sk1+oCiPZ/wC3qHhDNFphafrqMfs32UD+1f1ndpiAeLX673tPm/AeJK1D0EEX5I2Y/Oex+EM3pvh1/q0zU4CIwY7dz3hcS21PEWYin/TXdzufYe85qn5XpdqStWQk06h6HuR1IPf2hOKqhqlRqm7WsvX1XH6XltQ4e62Hp1Nq+19npPN5eTK53vWunqcXHjMJ1vfbofDWc+aBSf8A3FGzf8gP1nQFbzg8rVTXpGlcEAmpzbVpuflc2+U7wPtf5mbcGVuPfxzf8nCY59fUajaeRt3EBxWMRbm9vnKs1zDSmpDfobfnaea+IM9drgXtci/2W+nWaXL+Iw4991s+IvESOGpqWvwRuD8QZwi4Oq1S6aiL8km4hOC1129RYW7idIhp0V9RA25ky2VrcZY0vC9NkddRueDO3SeX5Vmt6urVakCAGHB7z0bAYtXUFTebSajlz7oyPGEeNJRzEJIiAUsJEiWESJEZKiJBpaRK2gA9SDvCakGeUQepAqxhtWA1owEqwdxL6kpfiMgFWZ9aaFaZ1aUSgxRExQD0vXH1Qe8WuZrEa4JmGKCIW22BMmas43x1melPLXk8m8A5HOcUa9R34JO0zMvxdRXID79m/SRSuSvcDfmDq5B13GrptfaA21cWlCofVZ6lt3Hpt8jzABiamEf+g1wRp1bkgdh0EuqlqtPUQBUBv6eQB1MrweLDDS9Msw6g7ntcQlsF7ejZBiXxVEVTZGRdL6zbWF+97Hp7yWHxwqAlUq2DKhuhsCe54t7zkjnQoL5f9RVIu2gem/YmaOR5+dStRdqg13qJyFp9b7bnsPecvJwY55fqx2cXPcMfzK9TyPK1ogVGYFm2NvsgdAJXjc6FNtmL0+AQC1jx6rdPeZ+b59Sag+oGnUutk4N+V2mJ/qyUlNyqgAHY3Xf4cScp+Z+cYrD/ADv6yq/NM4Vr2q6STsFpnn2J2mG+CeqdVXWD90kLpI9wODDsBmJrEny1Wl0PN4Y+ELj0mw7SJlprcduTxOIxFK9lUdAw3X6dICyYrEEq7Er1sbC37E7n+RCD7pvyDBcVS8tCEA1NfjpNsOSfIwz479rGp1FSj5K2uLE29u/vO18F4nUo5+c4ijhiiurm7t6tx27Tc8CYkkldQFjxN3NXpqmTEpo3tLhEk4kpEScArIkDLDItAlTSppa0qeMKKkHeEPKHEogtWA1YdVgNWMA6koqS6pKKsZAa0z6sPrQGrKIOYoxigHfl4xaQMa8hSGJbY7zzLxbidbWBnX+Js2WmukH1HaedZo99zzCnAtD7NhuTtKHXS1uR+sswdXpeKs3q3F1EIVH5SAb7WNxzf1f5/KSxuDqoSyDfm6G1l7e8y6uOqK1ksydiPT8B7TQqV1dQS702tcgElD2FunzisqpZoVl9QV08qpyCNQU3a3wvNelisvwDK7JWNRPUFC3Jbps1gOZgZRXUMp1aD9+oQL6R1B6XmjQwlPF4iyMWpoQSzXLO3U/ASb1Vzudetr/UnxTtialMUqCC6qdyWPVj1M1KmEWogINh02uLGxF+43nJ+Ks2ZSuAogBQQ9Rh1a/AnR5VqSkgqN907H4bflMeTett+Ozel+Awgpk6GKD79Im6fEe008NVDKQKncX4MwMxxh0gAWLnn+1en0tKsbWayvSBS1rMOp4sw+sz/G2n/ZprvXSkwfUxvtu3pPyJ/KUZrmtMLfUg2+O85/HYVqpCk635sOl+tplV8qxC1AlS9j94Hp7d5thxz+sc+TL+OhwWNWoCWvcAgHmEeEairV2tzvaZ2BwBRdJYbC4J6zQ8Dh/Ob+kWF/tW2m2mO/69fwjXUEQgQbCcCFCRUkJOREnaIKzINLTK2jJU0qeXNKnjAd5Q8vqSh5RBa0ArQ6tAa0YB1INWMJeC14yA1jAa0MqwKsZRBzFIkxQDvSZn5rjhSQsTbtNAzhfG+OuwpDpuZC3MZljDUqFiSd9oFjxfrJV/xlWIJ0xADRa3HN5eymwLAkdoAreqbArKbADcWuSZST0sPpIYg0xYkA79OTC8Vgw4DqbELdr9bdbR6eJRgerDY7+kSFXECxs4Yi+qwt14k9rmlVbMS6eSieolV19h7CbuS1EwT6CwYMPU5J2sOg6m+31nMYPFvSfWo2DK2ki+15rZjSWsadRLhevxBufxtJynxWN+/VmDprVxpqOLU9yL9huf1mzgnNR9TmyEkLbi4BI+Vh+MBq0CKqgXA0EA/wB7CxP5TYyigFRUewALNv0Vf+9pnk2wgerX8yr5Z2C8exImXjMTVVzTJJtwR8ZfSqXrNU2tc3Hx/wDsTXZy9gTuCTCdFe1+FruLKhPmHcta5A7e0MzPDU2pqHY+Z1Ic6gZmVc4WiCdDAHl7WN+3tM+tnQxLBQoTf7XU/GXjLvacspJoVWxvlf0mDf2sZ1PgXMX1AC1pw2YV1DBd26XO87rwCitbuJpYyleq0DcAy6UUOJdeZg4MtlUugEDK2lplbQJU0peXNKXjAd4O8IeDvKILWgFaHVoDWjAOpBaxhVSCV5RAKxgNYwytAaxjIOTFIkxRh31Q7TzXxIddZvbaKKZrc/WNto62Kna5iiiDHxOzbdDLte3y594opcRUWJICrxufnDcop3uLA6u8UUWXisfRlel5bgkAg+kr7XhOHrBW/lwN2dWHsNN/zt9IopDTx0ow92S+5BUb+1iYZnFPQoXg1SQD2pKbn6m0UUy+t/jlqLm7aeS6ov6n8B9ZdUe10PC3FvgDvFFKvrOeMmqWrDQDsOL+0i+TtRp+aDvewHvFFNJ1dM7NzYRMQbnUoJO9+s9N/hvgyRrPXiKKXUYvU6HEtiimSiEIEUUQRaQZYooEpeUVIoowHeUVIopRBK0ArRRRgFUgteNFKJnVjAa0UUZBDGiijJ//2Q==' }}
//               resizeMode='repeat'
//             />
//           </Col>
//         </Grid>
//       </Layout>
//     );
//   }
// }

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