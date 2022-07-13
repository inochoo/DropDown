import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import { HomeItem } from './HomeItem';

import { images } from '../../assets';
import TiModel from "../../../models/TiModel";
import TuModel from "../../../models/TuModel";



let tiModel = new TiModel("05044", "2012", "070", "1", "12312ed", "10(40)", "15/12/2022");

let tuModel = new TuModel("05044", "2012", "070", "1", "12312ed", "10(40)", "15/12/2022");




const data = [{ title: 'Khách hàng', description: 'Khách hàng', }, { title: 'Công tơ', description: 'Công tơ' },

{ title: 'TU', descrtuModel}, { title: 'TI', tiModel}];

export default class Home extends Component {
    renderItem = ({ item }) => <HomeItem item={item} />;

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleInfo}>
                    <Text style={styles.titleName}>Thông tin chi tiết</Text>
                    <Image source={images.remove} style={styles.imageRemove} />
                </View>

                <FlatList data={data} renderItem={this.renderItem} keyExtractor={(index, _) => index + ''} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'while',
        paddingTop: 50,
    },
    titleInfo: {
        marginStart: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    titleName: {
        flex: 1,
        fontSize: 20
    },
    imageRemove: {
        width: 35,
        height: 35,
        marginEnd: 15,
    }
});