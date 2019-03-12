import React, { Component } from 'react';
import '../../css/footer.css';

class Footer extends Component {
    render() {
        return (
        <div className="foot">
                Copyright &copy; {new Date().getFullYear} Walk me out!
        </div>
        )
    }
}

export default Footer;
