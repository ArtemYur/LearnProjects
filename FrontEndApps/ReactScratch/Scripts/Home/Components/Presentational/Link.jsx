var Link = React.createClass({
    render: function () {
        return (
            <div>
                <a href="#"
                   onClick={() => {
                                   this.props.onClickSearch(this.props.name);
                                }}>{this.props.name}
                </a>
                <br />
            </div>
            
      );
    }
});