import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, Image, TouchableWithoutFeedback, TextInput } from "react-native";
import PropTypes from "prop-types";
import { Dimensions } from 'react-native';
import { images } from '../../assets';

const HEADER_BACKGROUND = "#dcdcdc";
const HEADER_DESCRIPTION = "#00bfff";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const propTypes = {
    item: PropTypes.object
};

export class HomeItem extends Component {
    state = {
        isSelected: false
    };

    onPress = () => {
        this.setState((prevState, prevProps) => ({
            isSelected: !prevState.isSelected
        }));
    };

    renderDetails = () => (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.description}>Số chế tạo:</Text>
                <Text style={styles.description}>Năm sản xuất:</Text>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
            </View>
            <View style={styles.line}>
                <View style={styles.lineBgLeft} />
                <View style={{ flex: 0.1}}></View>
                <View style={styles.lineBgRight} />
            </View> 

            <View style={styles.titleContainer}>
                <Text style={styles.description}>Loại:</Text>
                <Text style={styles.description}>Tỷ số biến(CT):</Text>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
            </View>
            <View style={styles.line}>
                <View style={styles.lineBgLeft} />
                <View style={{ flex: 0.1}}></View>
                <View style={styles.lineBgRight} />
            </View> 

            <View style={styles.titleContainer}>
                <Text style={styles.description}>Dấu niêm phong hộp dấu dây/thùng bảo vệ:</Text>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' ,margin: 5}}>
                <View style={{ flex: 1, height: 1, backgroundColor: HEADER_DESCRIPTION }} />
            </View>
            
            <View style={styles.titleContainer}>
                <Text style={styles.description}>Dấu tem kiểm định:</Text>
                <Text style={styles.description}>Hiệu lực kiểm định:</Text>
            </View>
            <View style={styles.line}>
                <View style={styles.lineBgLeft} />
                <View style={{ flex: 0.1}}></View>
                <View style={styles.lineBgRight} />
            </View> 
            <View style={styles.titleContainer}>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
                <Text style={styles.descriptionItem}>{this.props.item.description}</Text>
            </View>
            <View style={styles.line}>
                <View style={styles.lineBgLeft} />
                <View style={{ flex: 0.1}}></View>
                <View style={styles.lineBgRight} />
            </View> 


        </View>
    );

    render() {
        const { isSelected } = this.state;
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{this.props.item.title}</Text>
                        <Image source={images.expand} style={styles.image} />
                    </View>
                </TouchableWithoutFeedback>
                {isSelected && this.renderDetails()}
            </View>
        );
    }
}


HomeItem.propTypes = propTypes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: HEADER_BACKGROUND,
        borderRadius: 5,
        margin: 15,
    },
    titleContainer: {
        marginStart: 5,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        flex: 1,
        fontSize: 20
    },

    description: {
        flex: 1,
        fontSize: 15,
        color: 'black',
    },
    descriptionItem: {
        flex: 1,
        fontSize: 15,
        color: HEADER_DESCRIPTION,
    },
    image: {
        width: 25,
        height: 25,
    },
    line:{
        flexDirection: 'row', 
        alignItems: 'center',
    },
    lineBgRight:{
        flex: 0.5, 
        height: 1,
        backgroundColor: HEADER_DESCRIPTION,
        marginEnd:5 ,
        marginBottom:10,
    },
    lineBgLeft:{
        flex: 0.4, 
        height: 1, 
        backgroundColor: HEADER_DESCRIPTION,
        marginStart:5 ,
        marginBottom:10
    },
});
