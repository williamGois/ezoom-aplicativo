import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList, StyleSheet, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { intiCursoImagemCursos } from '../actions/AuthActions';

import CheckBox from 'react-native-check-box'

export class CursoInternal extends Component {

    constructor(props) {
        super(props);
        this.props.intiCursoImagemCursos(this.props.id_curso);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexGrow: 1, backgroundColor: "#f3f3f3", paddingBottom: 100 }}>
                    {((this.props.cursosInternal.hasOwnProperty('curso_imagens'))) &&
                        <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={{uri: "https://fiuzas.com.br/ezoom/upload/tumb/" + this.props.cursosInternal.curso.imagem + ""}} style={styles.image}>
                            <View style={{ flex: 1, backgroundColor: "#0000008c", justifyContent: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginTop:50 }} onPress={() => { this.props.navigation.navigate('Cursos'); }}>
                                    <Image source={require('../images/back.png')} style={[{ width: 30, height: 25 }]} />
                                </TouchableOpacity>
                                <Text style={{ textAlign: "center", fontSize: 22, color: "#e84d33", fontWeight: "bold", padding: 50, paddingTop:30 }} >{this.props.cursosInternal.curso.titulo}</Text>
                            </View>
                        </ImageBackground>
                    }
                    {((this.props.cursosInternal.hasOwnProperty('curso_imagens'))) &&
                        <View style={{ padding: 10 }}>
                            <View style={{ flexGrow: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
                                <Text style={{ fontSize: 16, marginBottom: 20, marginTop: 10 }}>
                                    {this.props.cursosInternal.curso.descricao}
                                </Text>
                                <FlatList
                                    data={this.props.cursosInternal.curso_imagens}
                                    extraData={this.props}
                                    renderItem={({ item }) => <ListarCurso data={item} style={{ flex: 1, flexDirection: "row" }} />}
                                    keyExtractor={(item, index) => item.id}
                                    onEndReachedThreshold={0.1}
                                    bounces={false}
                                    numColumns={2}
                                />
                            </View>
                        </View>
                    }
                </View>
            </View>
        );
    }
}


class ListarCurso extends Component {
    render() {
        return (
            <Image source={{ uri: "https://fiuzas.com.br/ezoom/upload/tumb/" + this.props.data.imagem + "" }} style={styles.logoCurso} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000000"
    },
    image: {
        height: 250,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius: 25,
        marginBottom: 40,
        backgroundColor: "#000000"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },
    logoArea: {
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    logoCurso: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginLeft: 5
    },
    logo: {
        marginTop: 60,
    },
    checkbox: {
        alignSelf: "center",
    },
    inputArea: {
        marginTop: 25,
        paddingRight: 40,
        paddingLeft: 40,
    },
    entreAgora: {
        fontSize: 24
    },
    labelInput: {
        fontSize: 17
    },
    input: {
        height: 60,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#FFF",
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: "#FFF",
        padding: 10,
        paddingLeft: 20,
        fontSize: 17
    },
    btn: {
        flex: 1,
        height: 60,
        backgroundColor: '#0078FF'
    },
    textBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtnEntrar: {
        fontSize: 22,
        color: 'white'
    }
});


const mapStateToProps = (state) => {
    return {
        id_curso: state.auth.id_curso,
        cursosInternal: state.auth.cursosInternal,
    };
};

const CursoConnect = connect(mapStateToProps, { intiCursoImagemCursos })(CursoInternal);

export default CursoConnect;
