import * as React from 'react';
import './App.css';
import {VillageList} from './app/components/village/VillageList';
import {AddVillage} from './app/components/village/AddVillage';
import * as PageHeader from 'react-bootstrap/lib/PageHeader';
import * as ControlLabel from 'react-bootstrap/lib/ControlLabel';
import * as FormControl from 'react-bootstrap/lib/FormControl';
import * as FormGroup from 'react-bootstrap/lib/FormGroup';

class App extends React.Component {

    initState = {villages: ['Knonau', 'Männedorf', 'Meilen']};

    constructor(props, context) {
        super(props, context);
        this.state = {
            villages: [],
            year: 2018
        };
    }

    componentDidMount() {
        let storedState = JSON.parse(sessionStorage.getItem('flatSizePercentagePredictor'));
        if (storedState) {
            this.setState(storedState);
        } else {
            this.setState(this.initState);
            sessionStorage.setItem('flatSizePercentagePredictor', JSON.stringify(this.initState));

        }
    }

    addVillage(village) {
        this.setState(prevState => {
                let newState = {villages: [...prevState.villages, village]};
                sessionStorage.setItem('flatSizePercentagePredictor', JSON.stringify(newState));
                return newState;
            }
        );
    }

    updateYear(year) {
        this.setState(prevState => {
            let newState = {...prevState, year: year};
            sessionStorage.setItem('flatSizePercentagePredictor', JSON.stringify(newState));
            return newState;
        });
    }

    render() {
        return (
            <div className="container">
                <PageHeader>Village List<br/>
                    <small>Add a village in the canton Zurich and let you predict the percentage of 2 1/2 size flats
                        in that village for the year given
                    </small>
                </PageHeader>
                <form>
                    <FormGroup>
                        <ControlLabel>Type the year to predict</ControlLabel>
                        <FormControl onChange={e => this.updateYear(e.target.value)} value={this.state.year}
                                     type="number"/>
                    </FormGroup>
                    <AddVillage addVillage={(village) => this.addVillage(village)}/>
                    <VillageList villages={this.state.villages} year={this.state.year}/>
                </form>
            </div>
        );
    }
}

export default App;
