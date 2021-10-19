import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import { GraficoDinamico } from "../../components/GraficoDinamico/GraficoDinamico";
import GraficoEstatico from "../../components/GraficoEstatico/GraficoEstatico";

import './Graficos.css';
import { Tabela } from "./Tabela/Tabela";


export class Graficos extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            graficoDinamico: true
        };
    }

    componentWillUnmount() {
        this.GraficoDinamico();
    }

    GraficoEstatico() { 
        return (
            <GraficoEstatico />
        );
    }

    GraficoDinamico() {
        return (
            // <GraficoDinamico />
            <h1>Imagine um grafico aqui</h1>
        );
    }

    TrocarGrafico() {
        (this.state.graficoDinamico) ? this.setState({graficoDinamico: false}) : this.setState({graficoDinamico: true});
    }

    render() {
        return( 
            <section className="section-graficos">

                <h1 className="title h1">Temperaturas</h1>

                <Container className="grafico-container">
                    {
                        (this.state.graficoDinamico) ? this.GraficoDinamico() : this.GraficoEstatico()
                    }
                </Container>

                <Container className="tabela-container">
                    <Tabela />
                </Container>

                <Button onClick={() => this.TrocarGrafico()}>Trocar gráfico</Button>
            </section>
        );
    }

}