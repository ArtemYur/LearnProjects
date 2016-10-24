var FooterLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href="#"
                   onClick={() => { this.props.onClick(this.props.name); }}>{this.props.name}
                </a>
            </div>
            
      );
}
});