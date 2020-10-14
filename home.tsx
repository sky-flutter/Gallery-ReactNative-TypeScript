import React, {Component} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';

type HomeState = {
    imageJson: []
};
export default class Home extends Component<{}, HomeState> {
    state: HomeState = {
        imageJson: [],
    }

    constructor(props) {
        super(props);
        this.key = "YOUR TMDB API KEY";
    }

    componentDidMount() {
        this.fetchImage();
    }

    fetchImage() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}`, {
            method: "GET",
        }).then((response) => response.json()).then(
            (json) => {
                console.log("Data:", json.results);
                this.setState({imageJson: json.results});
            }
        ).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.imageJson} renderItem={({item}) => (
                    <View style={{flexDirection: "column", flex: 1, margin: 1}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('movie-details', {id: item.id, data: this.state.imageJson});
                        }}>
                            <Image source={{uri: `https://image.tmdb.org/t/p/w342${item.poster_path}`}}
                                   style={{height: 160, justifyContent: 'center'}}/>
                        </TouchableOpacity>
                    </View>
                )} numColumns={3}/>
            </View>
        );
    }
}
