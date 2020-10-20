import React from 'react';

class Links extends React.Component {
    render() {
        return (
            <div>
                <h3>Some Links</h3>
                <p>Beberapa Link Sosial Media Saya</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Web</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Instagram</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Twitter</a>
                    </li>
                </ul>
                <hr className="d-sm-none"></hr>
            </div>
        );
    }
}

export default Links;