import * as React from 'react';
import * as FormGroup from 'react-bootstrap/lib/FormGroup';
import * as InputGroup from 'react-bootstrap/lib/InputGroup';
import * as FormControl from 'react-bootstrap/lib/FormControl';
import * as Button from 'react-bootstrap/lib/Button';
import * as ControlLabel from 'react-bootstrap/lib/ControlLabel';


/**
 * AddVillage
 */
export class AddVillage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {toAdd: ''};
    }

    updateName(event) {
        this.setState({toAdd: event.target.value});
    }

    handleAddVillageClick(e) {
        e.preventDefault();
        this.props.addVillage(this.state.toAdd);
        this.setState({toAdd: ''});
    }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Add villages to predict</ControlLabel>
                    <InputGroup>
                        <FormControl onChange={e => this.updateName(e)} value={this.state.toAdd} type="text"/>
                        <InputGroup.Button>
                            <Button type="submit" onClick={e => this.handleAddVillageClick(e)}>Add</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        );
    }
}
