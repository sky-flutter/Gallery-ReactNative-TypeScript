import React, {Component} from "react";
import {Dimensions, Image, View} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";

const {width, height} = Dimensions.get('window');

export default class MovieDetails extends Component<{}, {}> {
    state = {
        activeSlide: 0,
    }

    constructor(props) {
        super(props);
    }

    get pagination() {
        return <Pagination dotsLength={this.props.route.params.data.length} activeDotIndex={this.state.activeSlide}
                           containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
                           dotStyle={{
                               width: 10,
                               height: 10,
                               borderRadius: 5,
                               marginHorizontal: 8,
                               backgroundColor: 'rgba(255, 255, 255, 0.92)'
                           }}
                           inactiveDotOpacity={0.4}
                           inactiveDotScale={0.6}/>
    }

    _renderItem = ({item, index}) => {
        return (
            <View>
                <Image source={{uri: `https://image.tmdb.org/t/p/w342${item.poster_path}`}}
                       style={{height: height, justifyContent: 'center'}}/>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Carousel data={this.props.route.params.data} renderItem={this._renderItem} sliderWidth={width}
                          itemWidth={width}
                          onSnapToItem={(index) => this.setState({activeSlide: index})}>
                    {this.pagination}
                </Carousel>
            </View>
        );
    }
}
