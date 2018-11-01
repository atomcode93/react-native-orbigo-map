import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import listings from '../data/listing'
import SearchBar from '../components/SearchBar'
import Listings from '../components/Listings'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      favouriteListings: []
    }
    this.handleAddToFav = this.handleAddToFav.bind(this)
    this.renderListings = this.renderListings.bind(this)
    this.onCreateListClose = this.onCreateListClose.bind(this)
  }

  onCreateListClose (listingId, listCreated) {
    let {favouriteListings} = this.state
    if (listCreated) {
      favouriteListings.push(listingId)
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId)
    }
    this.setState({favouriteListings})
  }

  handleAddToFav (listing) {
    const {navigate} = this.props.navigation
    let {favouriteListings} = this.state

    let index = favouriteListings.indexOf(listing.id)
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id)
      this.setState({favouriteListings})
    } else {
      navigate('CreateList', {listing, onCreateListClose: this.onCreateListClose})
    }
  }

  renderListings () {
    return listings.map((listing, index) => {
      return (
        <View
          key={`listing-${index}`}
        >
          <Listings
            navigation={this.props.navigation}
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <SearchBar navigation={this.props.navigation}/>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          {this.renderListings()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollview: {
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    // color: colors.gray04,
  }
})

export default Home
