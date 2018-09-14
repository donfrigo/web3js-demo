import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../web3';

class SearchBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            errorMessage: '',
            loading: false
        };
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const trx = await web3.eth.getTransaction(this.state.searchTerm);
            this.props.searchChange(trx);

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <Input
                            value={this.state.searchTerm}
                            placeholder='Transaction hash'
                            onChange={event =>
                                this.setState({ searchTerm: event.target.value })}
                        />
                    </Form.Field>
                    <Message
                        error
                        header = 'OoPs!'
                        content={this.state.errorMessage}
                    />

                    <Button loading={this.state.loading} primary>Search</Button>
                </Form>
        );
    };
};

export default SearchBar;