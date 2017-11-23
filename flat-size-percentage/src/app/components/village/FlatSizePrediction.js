import * as React from 'react';
import axios from 'axios';
import * as PageHeader from 'react-bootstrap/lib/PageHeader';
import * as Jumbotron from 'react-bootstrap/lib/Jumbotron';

/**
 * Render the predicted percentage share of 2 1/2 sized flats in the specific village
 */
export class FlatSizePrediction extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { prediction: 0};
    }

    componentDidMount(){
        this.updatePrediction(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.updatePrediction(nextProps);
    }

    updatePrediction(props) {
        axios.get(`/predict?gebiet_name=${props.match.params.villageName}&year=${props.match.params.year}`)
            .then(response => {
                this.setState({prediction: response.data});
            });
    }

    render() {
        return (
            <div className="container">
                <PageHeader>Flat Size Percentage Prediction <small>Reachable in prediction/:villageName/:year</small></PageHeader>

                <Jumbotron>
                    <h2>Village: {this.props.match.params.villageName}</h2>
                    <h2>year: {this.props.match.params.year}</h2>
                    <h1>Percentage of 2½ room flats: {this.state.prediction}%</h1>
                </Jumbotron>
            </div>
        );
    }
}
