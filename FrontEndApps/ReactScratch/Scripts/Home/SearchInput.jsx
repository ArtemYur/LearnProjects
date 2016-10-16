var SearchInput = React.createClass({
    render: function() {
        return (
            <form className="form-inline">
                <div className="input-group">
                    <input type="search" className="form-control" size="50" placeholder="Type geo object name" ref="input"/>
                    <span className="input-group-btn">
                        <button type="button" className="btn-secondary btn btn-danger" onClick={() => { this.props.onClickSearch(this.refs.input.value); } }>
                            <span className="glyphicon glyphicon-search"></span> Search
                        </button>
                    </span>                    
                </div>
            </form>
      );
    }
});