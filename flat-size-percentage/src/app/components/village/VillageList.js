import * as React from 'react';
import * as ListGroup from 'react-bootstrap/lib/ListGroup';
import {VillageElement} from './VillageElement';

export class VillageList extends React.Component {

    render() {
        let villages = this.props.villages.map((village, index) => {
            return (
                <VillageElement key={index} village={village} year={this.props.year}/>
            );
        });
        return (<ListGroup>{villages}</ListGroup>);
    }
}
