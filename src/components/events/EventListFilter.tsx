import * as React from "react";
import { ButtonToolbar, Button, Label, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { EventListFilterSetting } from "./EventListFilterSetting";
import { EventCategory, EventCategoryName } from "../../services/events"

interface Props {
    onFilterApplied(newFilter: EventListFilterSetting): any
    history: { push(path: string): any }
    filters: EventListFilterSetting
}

interface State {
    category: EventCategory;
}

export class EventListFilter extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            category: props.filters.category
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFilterApplied = this.handleFilterApplied.bind(this)
    }

    handleFilterApplied() {
        let newFilter: EventListFilterSetting = {
            category: this.state.category
        }

        this.props.onFilterApplied(newFilter);

        this.props.history.push("/");
    }

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderCategoryOption(category: EventCategory) {
        return (
            <option value={category} selected={this.state.category == category}>{EventCategoryName.get(category)}</option>
        )
    }

    render() {
        return (
            <div>
                <h1>Filter</h1>

                <form>
                    <FormGroup>
                        <FormControl name="category" onChange={this.handleInputChange} componentClass="select" placeholder="select">
                            {this.renderCategoryOption(EventCategory.ALL)}
                            {this.renderCategoryOption(EventCategory.ART)}
                            {this.renderCategoryOption(EventCategory.CARD_GAMES)}
                            {this.renderCategoryOption(EventCategory.EDUCATIONAL)}
                            {this.renderCategoryOption(EventCategory.FOOD)}
                            {this.renderCategoryOption(EventCategory.MUSIC)}
                            {this.renderCategoryOption(EventCategory.SPORTS)}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.handleFilterApplied}>Apply</Button>
                </form>
            </div>
        );
    }

}
