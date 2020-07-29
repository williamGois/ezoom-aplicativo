import React, { Component } from 'react';
import { View, ActivityIndicator, Text, FlatList, StyleSheet, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { add_curso, intiCurso, idCurso } from '../actions/AuthActions';

import CheckBox from 'react-native-check-box'

export class Curso extends Component {

    constructor(props) {
        super(props);
        this.props.intiCurso();

    }

    renderFooter() {
        return (
            <View style={styles.loading}>
                {(this.props.feedLoading == true) &&
                    <ActivityIndicator size="large" color="#0078FF" />
                }
            </View>
        );
    };

    gotoCurso(id) {

        this.props.idCurso(id);
        this.props.navigation.navigate('CursoInternal');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexGrow: 1, backgroundColor: "#f3f3f3", paddingBottom: 100 }}>
                    <ImageBackground imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} source={require('../images/background.jpg')} style={styles.image}>
                        <View style={{ flex: 1, backgroundColor: "#0000008c", justifyContent: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }} >
                            <Text style={{ textAlign: "center", fontSize: 22, color: "#e84d33", fontWeight: "bold" }} >CURSOS E TREINAMENTO</Text>
                            <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFFF", marginTop: 10, width: "50%", left: "25%" }} >Selecione o curso ou treinamento que desejar.</Text>
                        </View>
                    </ImageBackground>

                    {(this.props.cursos.hasOwnProperty('cursos')) &&
                       
                            <FlatList
                                data={this.props.cursos.cursos}
                                extraData={this.props}
                                renderItem={({ item }) => <TouchableOpacity onPress={() => { this.gotoCurso(item.id); }} ><ListarCursos data={item} /></TouchableOpacity>}
                                keyExtractor={(item, index) => item.id}
                                onEndReachedThreshold={0.1}
                                bounces={false}
                                onEndReached={() => {
                                    if (this.props.feedLoading == false) {
                                        // this.mudaNoMesInicial()
                                    }
                                }}
                            />
                    }


                    {(!this.props.cursos.hasOwnProperty('cursos')) &&
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                            <Text style={{ color: "#000000", fontSize: 20 }}>Não possui cursos no momento!</Text>
                        </View>
                    }

                    {this.props.pesquisa == true &&
                        <View>{this.renderFooter()}</View>
                    }

                </View>
            </View>
        );
    }
}


class ListarCursos extends Component {
    render() {
        return (
            <View style={{ padding: 20, paddingBottom: 0, paddingTop: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF", padding: 10, borderBottomWidth: 1, borderBottomColor: "#000000" }} >
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "70%", paddingLeft: 20 }} >
                        <Text style={{ fontSize: 15, color: "#000000" }} >{this.props.data.titulo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", width: "30%" }} >
                        <Image source={{ uri: "https://fiuzas.com.br/ezoom/upload/tumb/" + this.props.data.imagem + "" }} style={styles.logoCurso} />
                    </View>
                </View>
            </View>
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
        width: 80,
        height: 80,
        borderRadius: 20
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
        cursos: state.auth.cursos
    };
};

const CursoConnect = connect(mapStateToProps, { add_curso, intiCurso, idCurso })(Curso);

export default CursoConnect;
