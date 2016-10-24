var Link = React.createClass({
    render: function () {
        return (
            <div>
                <a href="#" onClick={(e) => { this.props.onClick(this.props.id, e); }}>
                    {this.props.name}
                </a>
            </div>
            
      );
    }
});