import * as React from 'react';
import * as ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';


/**
 * Render a Village Element linking to the prediction
 */
export class VillageElement extends React.Component {

    render() {
        return (
            <LinkContainer to={`prediction/${this.props.village}/${this.props.year}`}>
                <ListGroupItem>{this.props.village}</ListGroupItem>
            </LinkContainer>
        );
    }
}
