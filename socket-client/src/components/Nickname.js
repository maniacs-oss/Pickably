import React from 'react';

import './Styles/Nickname.css';

class Nickname extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // value: '',
    //         loading: true,
    //         error: null,
    //         data: {
    //             userName: '',
    //         }
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // componentDidMount() {
    //     this.fetchData();
    // }

    // fetchData = async () => {
    //     this.setState({ loading: true, error: null });

    //     try {
    //         fetch("http://localhost:5500/room/zHjAhZp7/player/add", {
    //             method: 'POST',
    //             body: JSON.stringify(this.state.data),
    //             headers:{
    //                 'Content-Type': 'application/json'
    //               }
    //             }).then(post => post.json());
    //         this.setState({ loading: false });
    //         console.log(this.state.data);
    //         // window.location.href='./nickname';
    //     } catch (error) {
    //         this.setState({ loading: false, error: error });
    //     }
    // }

    // handleChange = (event) => {
    //     this.setState({data: event.target});

    //     console.log("<<<<<<<<<<<<" + this.state.data);
    // }

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch("http://localhost:5500/room/zHjAhZp7/player/add", {
            method: 'POST',
            body: JSON.stringify({
                userName: data.get('userName')
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        console.log(data)
    }

    render() {
        return (
            <div className="grid_container_light">
                <div className="nickname__content">
                    <div className="nickname__text">Before starting, <br/> identify yourself please.</div>

                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Nickname" className="nickname__input" id="userName" name="userName" type="text"/>
                        <button className="nickname__button">GO!</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Nickname;